// src/api/checkout.js
// import type { APIGatewayEvent, Context } from "aws-lambda";
import nodemailer from "nodemailer";
import mjml from "mjml";
import { createClient } from "@supabase/supabase-js";

interface CartItem {
    id: number;
    type: string;
    name: string;
    wattage: string;
    inverter_rating: string,
    inverter: number,
    solar_panel: number,
    panel_rating: number,
    number_of_panel: number,
    battery: number,
    price: number;
    battery_rating: string,
    battery_type: string,
    controller: number,
    controller_rating: string,
    number_of_battery: number,
    installation_kit: number,
    installation_cost: number,
}

interface CheckoutRequestBody {
    items: CartItem[];
    email: string;
    name: string;
    phone: string;
    address: string;
    location: string;
    total_price: number;
}

interface HandlerResponse {
    statusCode: number;
    body: string;
}

const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!
  );

export const handler = async function (
    event: { httpMethod: string; body: string },
    context: any
): Promise<HandlerResponse> {
    if (event.httpMethod !== "POST") {
        return {
            statusCode: 405,
            body: "Method Not Allowed",
        };
    }

    console.log("Received event:", event);


    const { items, email, name, phone, address, location, total_price }: CheckoutRequestBody = JSON.parse(event.body);
console.log(items, email, name, phone, address, location)
    if (!email || items.length === 0) {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: "Invalid request data" }),
        };
    };

  
    // Save to Supabase
  const { error } = await supabase.from("antoaxel_checout").insert([
    {
      email,
      name,
      phone,
      address,
      location,
      items,
      total_price,
    },
  ]);

  if (error) {
    console.error("Supabase error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Failed to save checkout" }),
    };
  }

    // Create HTML using MJML
    const mjmlTemplate = `
        <mjml>
            <mj-body>
                <mj-section>
                    <mj-column>
                        <mj-text font-size="20px" font-weight="bold">Thank you for your order!</mj-text>
                        <mj-text>Here is a summary of your order:</mj-text>
                        <mj-divider border-color="#F45E43" />
                        ${items
                            .map(
                                (item) => `
                            <mj-text>
                                <strong>${item.name}</strong> - $${item.price}
                            </mj-text>
                        `
                            )
                            .join("")}
                        <mj-divider border-color="#F45E43" />
                        <mj-text>
                            We’ll contact you shortly to confirm to complete your oder.
                        </mj-text>
                    </mj-column>
                </mj-section>
                <mj-section>
                    <mj-column>
                        <mj-text font-size="12px" color="#888">
                            AntonAxel Nigeria • sales@antonaxel.com.ng
                        </mj-text>
                    </mj-column>
                </mj-section>
            </mj-body>
        </mjml>
    `;

    const { html }: { html: string } = mjml(mjmlTemplate);

    // Nodemailer setup
    const transporter = nodemailer.createTransport({
        service: "smtp.zoho.com", // Or use SMTP provider
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    try {
        await transporter.sendMail({
            from: `"AntonAxel Nigeria" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: "Your Solar Product Booking Confirmation",
            html,
        });

        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Checkout successful! Email sent." }),
        };
    } catch (error: any) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Email failed", error: error.message }),
        };
    }
};
