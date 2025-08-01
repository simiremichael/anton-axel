// src/pages/solar-products.js
import CartQtySelector from "@/components/CartQtySelector";
import Layout from "@/components/layout";
import { StaticImage } from "gatsby-plugin-image";
import { Battery, FolderInput } from "lucide-react";
import React, { useEffect, useState } from "react";

const products = [
  {
    id: 1,
    type: "solar system",
    name: "Eco Solar System",
    wattage: "1.1KVA",
    inverter_rating: "1.1KVA",
    inverter: 130000,
    solar_panel: 1350000,
    battery_type: "Wet Cell",
    panel_rating: 300,
    number_of_panel: 4,
    battery: 180000,
    battery_rating: "230AMPS",
    number_of_battery: 1,
    controller: 135000,
    installation_kit: 150000,
    controller_rating: "80AMPS",
    installation_cost: 50000,
  },
  {
    id: 2,
    type: "solar system",
    name: "1.6kVA Solar System",
    wattage: "1.6kVA",
    inverter_rating: "1.6KVA",
    inverter: 190000,
    solar_panel: 165000,
    battery_type: "Wet Cell",
    panel_rating: 400,
    number_of_panel: 6,
    number_of_battery: 2,
    battery: 180000,
    battery_rating: "230AMPS",
    controller: 135000,
    controller_rating: "80AMPS",
    installation_kit: 180000,
    installation_cost: 60000,
  },
  {
    id: 3,
    type: "solar system",
    name: "2kVA Solar System",
    wattage: "2kVA",
    inverter_rating: "2KVA",
    inverter: 260000,
    solar_panel: 165000,
    panel_rating: 400,
    battery_type: "Wet Cell",
    number_of_panel: 6,
    number_of_battery: 2,
    battery: 180000,
    battery_rating: "230AMPS",
    controller: 135000,
    controller_rating: "80AMPS",
    installation_kit: 200000,
    installation_cost: 90000,
  },
  {
    id: 4,
    type: "solar system",
    name: "3.2kVA Solar System",
    wattage: "3.2kVA",
    inverter_rating: "3.2KVA",
    inverter: 440000,
    solar_panel: 185000,
    panel_rating: 500,
    number_of_panel: 9,
    battery: 180000,
    battery_rating: "230AMPS",
    battery_type: "Wet Cell",
    number_of_battery: 2,
    controller: 0,
    controller_rating: "80AMPS",
    installation_kit: 220000,
    installation_cost: 100000,
  },
  {
    id: 5,
    type: "solar system",
    name: "3.5kVA Solar System",
    wattage: "3.5kVA",
    inverter_rating: "3.5KVA",
    inverter: 380000,
    solar_panel: 185000,
    panel_rating: 500,
    number_of_panel: 9,
    battery: 1304500,
    battery_rating: "5kWTH",
    battery_type: "Lithium-ion",
    controller: 0,
    controller_rating: "80AMPS",
    number_of_battery: 1,
    installation_kit: 250000,
    installation_cost: 130000,
  },
  {
    id: 6,
    type: "solar system",
    name: "4.2kVA Solar System",
    wattage: "4.2kVA",
    inverter_rating: "4.2KVA",
    inverter: 420000,
    solar_panel: 185000,
    panel_rating: 500,
    number_of_panel: 9,
    battery: 1304500,
    battery_rating: "5kWTH",
    battery_type: "Lithium-ion",
    controller: 0,
    controller_rating: "120AMPS",
    number_of_battery: 1,
    installation_kit: 240000,
    installation_cost: 140000,
  },
  {
    id: 7,
    type: "solar system",
    name: "5kVA Solar System",
    wattage: "5kVA",
    inverter_rating: "5KVA",
    inverter: 780000,
    solar_panel: 185000,
    panel_rating: 500,
    number_of_panel: 12,
    battery: 2295000,
    battery_rating: "7.5kWTH",
    battery_type: "Lithium-ion",
    number_of_battery: 1,
    controller: 0,
    controller_rating: "120AMPS",
    installation_kit: 300000,
    installation_cost: 180000,
  },
  {
    id: 8,
    type: "solar system",
    name: "6.2kVA Solar System",
    wattage: "6.2kVA",
    inverter_rating: "6.2KVA",
    inverter: 920000,
    solar_panel: 185000,
    panel_rating: 500,
    number_of_panel: 12,
    battery: 2495000,
    battery_rating: "10kWTH",
    battery_type: "Lithium-ion",
    number_of_battery: 1,
    controller: 0,
    controller_rating: "120AMPS",
    installation_kit: 340000,
    installation_cost: 220000,
  },
  {
    id: 9,
    type: "solar system",
    name: "8kVA Solar System",
    wattage: "8kVA",
    inverter_rating: "8KVA",
    inverter: 1480000,
    solar_panel: 185000,
    panel_rating: 500,
    number_of_panel: 15,
    battery: 2395000,
    battery_rating: "10kWTH",
    battery_type: "Lithium-ion",
    number_of_battery: 1,
    controller: 260000,
    controller_rating: "160AMPS",
    installation_kit: 360000,
    installation_cost: 120000,
  },
  {
    id: 10,
    type: "solar system",
    name: "10kVA Solar System",
    wattage: "10kVA",
    inverter_rating: "10KVA",
    inverter: 1600000,
    solar_panel: 185000,
    panel_rating: 500,
    number_of_panel: 21,
    battery: 3255000,
    battery_rating: "15kWTH",
    battery_type: "Lithium-ion",
    number_of_battery: 1,
    controller: 0,
    controller_rating: "160AMPS",
    installation_kit: 490000,
    installation_cost: 260000,
  },
  {
    id: 11,
    type: "backup system",
    name: "600VA Backup System",
    wattage: "600VA",
    inverter_rating: "600VA",
    inverter: 150000,
    solar_panel: 0,
    panel_rating: 0,
    number_of_panel: 0,
    number_of_battery: 1,
    battery: 185000,
    battery_type: "Wet Cell",
    battery_rating: "230AMPS",
    controller: 0,
    controller_rating: "",
    installation_kit: 70000,
    installation_cost: 50000,
  },
  {
    id: 12,
    type: "backup system",
    name: "1kVA Backup System",
    wattage: "1kVA",
    inverter_rating: "1KVA",
    inverter: 170000,
    solar_panel: 0,
    panel_rating: 0,
    number_of_panel: 0,
    battery: 185000,
    number_of_battery: 1,
    battery_type: "Wet Cell",
    battery_rating: "230AMPS",
    controller_rating: "",
    controller: 0,
    installation_kit: 80000,
    installation_cost: 60000,
  },
  {
    id: 13,
    type: "backup system",
    name: "1.5kVA Backup System",
    wattage: "1.5kVA",
    inverter_rating: "1.5KVA",
    inverter: 195000,
    solar_panel: 0,
    panel_rating: 0,
    number_of_panel: 0,
    battery: 185000,
    number_of_battery: 2,
    battery_type: "Wet Cell",
    battery_rating: "230AMPS",
    controller: 0,
    controller_rating: "",
    installation_kit: 90000,
    installation_cost: 70000,
  },
  {
    id: 14,
    type: "backup system",
    name: "2kVA Backup System",
    wattage: "2kVA",
    inverter_rating: "2KVA",
    inverter: 240000,
    solar_panel: 0,
    panel_rating: 0,
    number_of_panel: 0,
    battery: 185000,
    number_of_battery: 2,
    battery_type: "Wet Cell",
    battery_rating: "230AMPS",
    controller: 0,
    controller_rating: "",
    installation_kit: 100000,
    installation_cost: 80000,
  },
  {
    id: 15,
    type: "backup system",
    name: "2.5kVA Backup System",
    wattage: "2.5kVA",
    inverter_rating: "2.5KVA",
    inverter: 300000,
    solar_panel: 0,
    panel_rating: 0,
    number_of_panel: 0,
    battery: 185000,
    number_of_battery: 2,
    battery_type: "Wet Cell",
    battery_rating: "230AMPS",
    controller: 0,
    controller_rating: "",
    installation_kit: 120000,
    installation_cost: 100000,
  },
  {
    id: 16,
    type: "backup system",
    name: "3.5kVA Backup System",
    wattage: "3.5kVA",
    inverter_rating: "3.5KVA",
    inverter: 480000,
    solar_panel: 0,
    panel_rating: 0,
    number_of_panel: 0,
    battery: 185000,
    number_of_battery: 2,
    battery_type: "Wet Cell",
    battery_rating: "230AMPS",
    controller: 0,
    controller_rating: "",
    installation_kit: 130000,
    installation_cost: 100000,
  },
  {
    id: 17,
    type: "backup system",
    name: "5kVA Backup System",
    wattage: "5kVA",
    inverter_rating: "5KVA",
    inverter: 780000,
    solar_panel: 0,
    panel_rating: 0,
    number_of_panel: 0,
    battery: 185000,
    number_of_battery: 4,
    battery_type: "Wet Cell",
    battery_rating: "230AMPS",
    controller: 0,
    controller_rating: "",
    installation_kit: 150000,
    installation_cost: 130000,
  },
  {
    id: 18,
    type: "backup system",
    name: "7.5kVA Backup System",
    wattage: "7.5kVA",
    inverter_rating: "7.5KVA",
    inverter: 965000,
    solar_panel: 0,
    panel_rating: 0,
    number_of_panel: 0,
    battery: 185000,
    number_of_battery: 4,
    battery_type: "Wet Cell",
    battery_rating: "230AMPS",
    controller: 0,
    controller_rating: "",
    installation_kit: 190000,
    installation_cost: 160000,
  },
  {
    id: 19,
    type: "backup system",
    name: "10kVA Backup System",
    wattage: "10kVA",
    inverter_rating: "10KVA",
    inverter: 1200000,
    solar_panel: 0,
    panel_rating: 0,
    number_of_panel: 0,
    battery: 185000,
    number_of_battery: 4,
    battery_type: "Wet Cell",
    battery_rating: "230AMPS",
    controller: 0,
    controller_rating: "",
    installation_kit: 190000,
    installation_cost: 170000,
  },
  {
    id: 20,
    type: "backup system",
    name: "3.5kVA Backup System",
    wattage: "3.5kVA",
    inverter_rating: "3.5KVA",
    inverter: 580000,
    solar_panel: 0,
    panel_rating: 0,
    number_of_panel: 0,
    battery: 1304500,
    battery_rating: "5kWTH",
    battery_type: "Lithium-ion",
    controller: 0,
    controller_rating: "",
    number_of_battery: 1,
    installation_kit: 130000,
    installation_cost: 80000,
  },
  {
    id: 21,
    type: "backup system",
    name: "4.2kVA Backup System",
    wattage: "4.2kVA",
    inverter_rating: "4.2KVA",
    inverter: 680000,
    solar_panel: 0,
    panel_rating: 0,
    number_of_panel: 0,
    battery: 1304500,
    battery_rating: "5kWTH",
    battery_type: "Lithium-ion",
    controller: 0,
    controller_rating: "",
    number_of_battery: 1,
    installation_kit: 150000,
    installation_cost: 100000,
  },
  {
    id: 22,
    type: "backup system",
    name: "5kVA Backup System",
    wattage: "5kVA",
    inverter_rating: "5KVA",
    inverter: 880000,
    solar_panel: 0,
    panel_rating: 0,
    number_of_panel: 0,
    battery: 2395000,
    battery_rating: "10KWTH",
    battery_type: "Lithium-ion",
    number_of_battery: 1,
    controller: 0,
    controller_rating: "",
    installation_kit: 200000,
    installation_cost: 150000,
  },
  {
    id: 23,
    type: "backup system",
    name: "6.2kVA Backup System",
    wattage: "6.2kVA",
    inverter_rating: "6.2KVA",
    inverter: 1082000,
    solar_panel: 0,
    panel_rating: 0,
    number_of_panel: 0,
    battery: 2395000,
    battery_rating: "10kWTH",
    battery_type: "Lithium-ion",
    number_of_battery: 1,
    controller: 0,
    controller_rating: "",
    installation_kit: 220000,
    installation_cost: 180000,
  },
  {
    id: 24,
    type: "backup system",
    name: "8kVA Backup System",
    wattage: "8kVA",
    inverter_rating: "8KVA",
    inverter: 1480000,
    solar_panel: 0,
    panel_rating: 0,
    number_of_panel: 0,
    battery: 2395000,
    battery_rating: "10kWTH",
    battery_type: "Lithium-ion",
    number_of_battery: 1,
    controller: 0,
    controller_rating: "",
    installation_kit: 250000,
    installation_cost: 200000,
  },
  {
    id: 25,
    type: "Backup system",
    name: "10kVA Backup System",
    wattage: "10kVA",
    inverter_rating: "10KVA",
    inverter: 1580000,
    solar_panel: 0,
    panel_rating: 0,
    number_of_panel: 0,
    battery: 2700000,
    battery_rating: "15kWTH",
    battery_type: "Lithium-ion",
    number_of_battery: 1,
    controller: 0,
    controller_rating: "",
    installation_kit: 300000,
    installation_cost: 250000,
  },
];

const solar = [
  {
    id: 26,
    name: "Solar panel",
    image: "../images/solar_panel.png",
    capacity: "550w",
    price: 180000,
    waranty: "5 yrs",
    type: "Mono-crystalline",
    quantity: 1,
  },
  {
    id: 27,
    name: "Solar panel",
    image: "../images/solar_panel.png",
    capacity: "400w",
    price: 160000,
    waranty: "5 yrs",
    type: "Mono-crystalline",
    quantity: 1,
  },
  {
    id: 28,
    name: "Solar panel",
    image: "../images/solar_panel.png",
    capacity: "300w",
    price: 145000,
    waranty: "5 yrs",
    type: "Mono-crystalline",
    quantity: 1,
  },
  {
    id: 29,
    name: "Solar panel",
    image: "../images/solar_panel.png",
    capacity: "250w",
    price: 130000,
    waranty: "5 yrs",
    type: "Mono-crystalline",
    quantity: 1,
  },
  {
    id: 30,
    name: "Solar panel",
    image: "../images/solar_panel.png",
    capacity: "200w",
    price: 120000,
    waranty: "5 yrs",
    type: "Mono-crystalline",
    quantity: 1,
  },
];
const battery = [
  {
    id: 31,
    name: "Battery",
    image: "../images/lithium_battery.jpg",
    capacity: "15kWh",
    price: 2700000,
    warranty: "5yrs",
    type: "Lithium-ion",
    voltage: "48v",
    quantity: 1,
  },
  {
    id: 32,
    name: "Battery",
    image: "../images/lithium_battery.jpg",
    capacity: "10kWh",
    price: 2395000,
    warranty: "5yrs",
    type: "Lithium-ion",
    voltage: "48v",
    quantity: 1,
  },
  {
    id: 33,
    name: "Bum battery",
    image: "../images/lithium_battery.jpg",
    capacity: "5kWh",
    price: 1304500,
    warranty: "5yrs",
    type: "Lithium-ion",
    voltage: "24v",
    quantity: 1,
  },
  {
    id: 34,
    name: "Battery",
    image: "../images/lithium_battery_small.jpg",
    capacity: "300AMPS",
    price: 550000,
    warranty: "5yrs",
    type: "Lithium-ion",
    voltage: "12v",
    quantity: 1,
  },
  {
    id: 35,
    name: "Battery",
    image: "../images/wetcell_battery.jpg",
    capacity: "220AMPS",
    price: 185000,
    warranty: "1yrs",
    type: "Wet cell",
    voltage: "12v",
    quantity: 1,
  },
];

const inverter = [
  {
    id: 36,
    name: "Inverter",
    image: "../images/inverter.jpeg",
    capacity: "2.5KVA",
    price: 300000,
    warranty: "1 yr",
    type: "Pure Sine Wave",
    voltage: "12v",
  },
  {
    id: 37,
    name: "Inverter",
    image: "../images/inverter.jpeg",
    capacity: "3.5KVA",
    price: 480000,
    warranty: "1 yr",
    type: "Pure Sine Wave",
    voltage: "24v",
    quantity: 1,
  },
  {
    id: 38,
    name: "Inverter",
    image: "../images/inverter.jpeg",
    capacity: "5KVA",
    price: 580000,
    warranty: "1 yr",
    type: "Pure Sine Wave",
    voltage: "48v",
    quantity: 1,
  },
  {
    id: 39,
    name: "Inverter",
    image: "../images/inverter.jpeg",
    capacity: "10KVA",
    price: 800000,
    warranty: "1yr",
    type: "Pure Sine Wave",
    voltage: "48v",
    quantity: 1,
  },
  {
    id: 40,
    name: "Inverter",
    image: "../images/hybrid_inverter.webp",
    capacity: "2KVA",
    price: 260000,
    warranty: "1yr",
    type: "Hybrid",
    voltage: "24v",
    quantity: 1,
  },
  {
    id: 41,
    name: "Inverter",
    image: "../images/hybrid_inverter.webp",
    capacity: "3.5KVA",
    price: 380000,
    warranty: "1yr",
    type: "Hybrid",
    voltage: "24v",
    quantity: 1,
  },
  {
    id: 42,
    name: "Inverter",
    image: "../images/hybrid_inverter.webp",
    capacity: "4.2KVA",
    price: 680000,
    warranty: "1yr",
    type: "Hybrid",
    voltage: "24v",
    quantity: 1,
  },
  {
    id: 43,
    name: "Inverter",
    image: "../images/hybrid_inverter.webp",
    capacity: "5KVA",
    price: 780000,
    warranty: "1yr",
    type: "Hybrid",
    voltage: "24v",
    quantity: 1,
  },
  {
    id: 44,
    name: "Inverter",
    image: "../images/hybrid_inverter.webp",
    capacity: "6.2KVA",
    price: 820000,
    warranty: "1yr",
    type: "Hybrid",
    voltage: "24v",
    quantity: 1,
  },
  {
    id: 45,
    name: "Inverter",
    image: "../images/hybrid_inverter.webp",
    capacity: "7KVA",
    price: 965000,
    warranty: "1yr",
    type: "Hybrid",
    voltage: "48v",
    quantity: 1,
  },
  {
    id: 46,
    name: "Inverter",
    image: "../images/hybrid_inverter.webp",
    capacity: "8KVA",
    price: 1480000,
    warranty: "1yr",
    type: "Hybrid",
    voltage: "48v",
    quantity: 1,
  },
  {
    id: 47,
    name: "Inverter",
    image: "../images/hybrid_inverter.webp",
    capacity: "10KVA",
    price: 1680000,
    warranty: "1yr",
    type: "Hybrid",
    voltage: "48v",
    quantity: 1,
  },
];

const controller = [
  {
    id: 48,
    name: "Charge controller",
    image: "../images/contoller.jpg",
    capacity: "60A",
    price: 180000,
    warranty: "1yr",
    type: "MPPT with heat sink",
    quantity: 1,
  },
  {
    id: 49,
    name: "Charge controller",
    image: "../images/contoller.jpg",
    capacity: "60A",
    price: 140000,
    warranty: "1yr",
    type: "MPPT with fan",
    quantity: 1,
  },
  {
    id: 50,
    name: "Charge controller",
    image: "../images/contoller.jpg",
    capacity: "80A",
    price: 180000,
    warranty: "1yr",
    type: "MPPT with fan",
    quantity: 1,
  },
  {
    id: 51,
    name: "Charge controller",
    image: "../images/contoller.jpg",
    capacity: "120A",
    price: 220000,
    warranty: "1yr",
    type: "MPPT with fan",
    quantity: 1,
  },
];

const lights = [
  {
    id: 52,
    name: "all in street light",
    image: "../images/street_light.jpeg",
    capacity: "60W",
    price: 165000,
    warranty: "1yr",
    type: "LED",
    quantity: 1,
  },
  {
    id: 53,
    name: "All in one street light",
    image: "../images/street_light.jpeg",
    capacity: "100W",
    price: 235000,
    warranty: "1yr",
    type: "LED",
    quantity: 1,
  },
  {
    id: 54,
    brandName: "All in one street light",
    image: "../images/street_light.jpeg",
    capacity: "160W",
    price: 325000,
    warranty: "1yr",
    type: "LED",
    quantity: 1,
  },
];

const SolarProductsPage = () => {
  const [itemQty, setItemQty] = useState(1);
  const [cart, setCart] = useState<Product[]>(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
        try {
          return JSON.parse(savedCart);
        } catch (e) {
          console.error("Could not parse cart from localStorage", e);
        }
      }
    }
    return [];
  });
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Product | any>([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState<any>("");
  const [option, setOption] = useState("solar");

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  interface Product {
    id: number;
    name?: string;
    wattage?: string;
    inverter_rating?: string;
    inverter?: number;
    solar_panel?: number;
    panel_rating?: number;
    number_of_panel?: number;
    battery?: number;
    battery_rating?: string;
    number_of_battery?: number;
    controller?: number;
    installation_kit?: number;
    installation_cost?: number;
    brandName?: string;
    image?: string;
    capacity?: string;
    warranty?: string;
    voltage?: string;
    quantity?: number;
    [key: string]: any;
  }

  interface CartItem extends Product {}
  // const addToCart = (product: Product) => {
  //   setCart([...cart, product]);
  // };

  const removeFromCart = (index: number) => {
    setCart((prev) => prev?.filter((_, i) => i !== index));
  };

  // const checkout = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   //   http://localhost:5000/api/orders  https://antonaxel-server.onrender.com/api/orders
  //   try {
  //     const response = await fetch(
  //       "https://antonaxel-server.onrender.com/api/orders",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           items: cart,
  //           total_price: calculateCartTotal(),
  //           name,
  //           email,
  //           phone,
  //           address,
  //           location,
  //         }),
  //       }
  //     );

  //     if (!response.ok) {
  //       const error = await response.json();
  //       setAlert("Order failed");
  //       setLoading(false);
  //       throw new Error(error.error || "Order failed");
  //     }
  //     const data = await response.json();
  //     setAlert(data?.message);
  //     setLoading(false);
  //     setCart([]);
  //     return data;
  //   } catch (error) {
  //     console.error("Order Error:", error);
  //     // setAlert("something happened");
  //     setLoading(false);
  //     throw error;
  //   }
  // };

  // ... existing code ...

  const checkout = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Validate cart items before sending
    if (cart.length === 0) {
      setAlert("Cart is empty. Please add items before checkout.");
      setLoading(false);
      return;
    }

    // Validate form fields
    if (!name || !email || !phone || !address || !location) {
      setAlert("Please fill in all required fields.");
      setLoading(false);
      return;
    }

    // Prepare cart items with consistent structure for database
    const formattedCartItems = cart.map((item, index) => ({
      id: item.id,
      name: item.name || `Item ${item.id}`,
      price: Number(item.price) || 0,
      quantity: Number(item.quantity) || 1,
      total_item_price:
        (Number(item.price) || 0) * (Number(item.quantity) || 1),
      // Include additional product details if available
      ...(item.wattage && { wattage: item.wattage }),
      ...(item.type && { type: item.type }),
      ...(item.battery_type && { battery_type: item.battery_type }),
      ...(item.capacity && { capacity: item.capacity }),
      ...(item.voltage && { voltage: item.voltage }),
      ...(item.warranty && { warranty: item.warranty }),
      // Add any other relevant product specifications
      cart_index: index, // For tracking purposes
    }));

    const orderData = {
      items: formattedCartItems,
      total_price: calculateCartTotal(),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      address: address.trim(),
      location: location.trim(),
      order_summary: {
        item_count: cart.length,
        total_quantity: cart.reduce(
          (sum, item) => sum + (Number(item.quantity) || 1),
          0
        ),
      },
    };

    try {
      console.log("Sending order data:", orderData); // For debugging

      const response = await fetch(
        "https://antonaxel-server.onrender.com/api/orders",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(orderData),
        }
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error("Server response error:", errorData);

        setAlert(
          errorData.message ||
            errorData.error ||
            `Order failed with status: ${response.status}`
        );
        setLoading(false);
        throw new Error(
          errorData.error || `HTTP ${response.status}: Order failed`
        );
      }

      const data = await response.json();
      console.log("Order success:", data); // For debugging

      setAlert(data?.message || "Order placed successfully!");
      setLoading(false);

      // Clear cart and form after successful order
      setCart([]);
      setName("");
      setEmail("");
      setPhone("");
      setAddress("");
      setLocation("");

      // Close the modal after successful order
      setTimeout(() => {
        const modal = document.getElementById(
          "my_modal_4"
        ) as HTMLDialogElement;
        if (modal) {
          modal.close();
        }
      }, 2000);

      return data;
    } catch (error) {
      console.error("Order Error:", error);

      // More specific error handling
      if (error instanceof TypeError && error.message.includes("fetch")) {
        setAlert("Network error. Please check your connection and try again.");
      } else if (error instanceof Error) {
        setAlert(error.message || "Order failed. Please try again.");
      } else {
        setAlert("An unexpected error occurred. Please try again.");
      }

      setLoading(false);
      throw error;
    }
  };

  // ... existing code ...

  // Enhanced cart validation function
  const validateCartItem = (item: any): boolean => {
    return (
      item &&
      typeof item.id !== "undefined" &&
      typeof item.price !== "undefined" &&
      typeof item.quantity !== "undefined" &&
      Number(item.quantity) > 0 &&
      Number(item.price) >= 0
    );
  };

  // Enhanced addToCart function with better validation
  const addToCart = (product: any) => {
    if (!product || !product.id) {
      console.error("Invalid product data:", product);
      setAlert("Error adding item to cart. Please try again.");
      return;
    }

    const existingItemIndex = cart.findIndex((item) => item.id === product.id);

    if (existingItemIndex !== -1) {
      // Item already exists, increase quantity
      const currentQuantity = Number(cart[existingItemIndex]?.quantity) || 1;
      updateCartItemQuantity(existingItemIndex, currentQuantity + 1);
    } else {
      // Add new item with quantity 1
      const newItem = {
        ...product,
        quantity: 1,
        price: Number(product.price) || 0,
      };

      if (validateCartItem(newItem)) {
        setCart([...cart, newItem]);
      } else {
        console.error("Invalid cart item:", newItem);
        setAlert("Error adding item to cart. Invalid item data.");
      }
    }
  };

  // Enhanced updateCartItemQuantity with validation
  const updateCartItemQuantity = (index: number, newQuantity: number) => {
    if (index < 0 || index >= cart.length) {
      console.error("Invalid cart index:", index);
      return;
    }

    if (newQuantity < 1) {
      console.error("Invalid quantity:", newQuantity);
      return;
    }

    const updatedCart = [...cart];
    updatedCart[index] = {
      ...updatedCart[index],
      quantity: Number(newQuantity),
    };

    setCart(updatedCart);
  };

  // Enhanced calculateCartTotal with error handling
  const calculateCartTotal = () => {
    try {
      return cart.reduce((total, item) => {
        const price = Number(item.price) || 0;
        const quantity = Number(item.quantity) || 1;
        return total + price * quantity;
      }, 0);
    } catch (error) {
      console.error("Error calculating cart total:", error);
      return 0;
    }
  };

  // ... existing code ...

  const searchTerm = query.toLowerCase();

  const filteredProducts = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(searchTerm) ||
      product.type.toLowerCase().includes(searchTerm) ||
      product.battery_type.toLowerCase().includes(searchTerm)
    );
  });

  const openModal = (product: Product) => {
    setSelected(product);
    (document.getElementById("my_modal_3") as HTMLDialogElement)?.showModal();
  };

  const openModal2 = (product: Product) => {
    setSelected(product);
    (document.getElementById("my_modal_5") as HTMLDialogElement)?.showModal();
  };

  useEffect(() => {
    setTimeout(function () {
      setAlert("");
    }, 4000);
  }, [alert]);

  // Add these functions to your component

  // const updateCartItemQuantity = (index: number, newQuantity: number) => {
  //   const updatedCart = [...cart];
  //   updatedCart[index] = {
  //     ...updatedCart[index],
  //     quantity: newQuantity,
  //   };
  //   setCart(updatedCart);
  // };

  // const calculateCartTotal = () => {
  //   return cart.reduce((total, item) => {
  //     return total + Number(item.price) * item.quantity;
  //   }, 0);
  // };

  // Update the addToCart function to include quantity
  // const addToCart = (product: any) => {
  //   const existingItemIndex = cart.findIndex((item) => item.id === product.id);

  //   if (existingItemIndex !== -1) {
  //     // Item already exists, increase quantity
  //     updateCartItemQuantity(
  //       existingItemIndex,
  //       cart[existingItemIndex]?.quantity + 1
  //     );
  //   } else {
  //     // Add new item with quantity 1
  //     setCart([...cart, { ...product, quantity: 1 }]);
  //   }
  // };

  return (
    <Layout pageTitle="Products Page">
      <div className="px-[2%] md:px-[5%] mt-10 flex flex-col items-center justify-center relative">
        <h1 className="text-2xl font-bold text-center mb-4">
          Solar Energy Products
        </h1>
        <h4 className="text-xs font-semibold text-blue-800">
          Contact us for custom quotation
        </h4>
        <div className="z-20 absolute top-8 md:top-5 right-3 md:right-5">
          <button
            className="btn btn-circle relative"
            onClick={() =>
              (
                document.getElementById("my_modal_4") as HTMLDialogElement
              )?.showModal()
            }
          >
            <svg
              width={20}
              height={20}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
            </svg>
            {cart.length > 0 && (
              <span className="z-30 absolute top-0 text-xs bg-amber-700 py-0 px-1 rounded-2xl -right-1 text-white">
                {cart.length}
              </span>
            )}
          </button>
        </div>
        <label className="input my-5">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            className="grow"
            placeholder="Search"
          />
        </label>
        <div className="join mb-10 max-md:grid max-md:grid-cols-3 max-md:gap-2">
          <input
            className="join-item btn"
            type="radio"
            name="options"
            aria-label="Solar"
            value="solar"
            onChange={(e) => setOption(e.target.value)}
            defaultChecked
          />
          <input
            className="join-item btn"
            type="radio"
            name="options"
            aria-label="Backup"
            value="backup"
            onChange={(e) => setOption(e.target.value)}
          />
          <input
            className="join-item btn"
            type="radio"
            name="options"
            aria-label="Panels"
            value="panels"
            onChange={(e) => setOption(e.target.value)}
          />
          <input
            className="join-item btn"
            type="radio"
            name="options"
            aria-label="Inverters"
            value="inverters"
            onChange={(e) => setOption(e.target.value)}
          />
          <input
            className="join-item btn"
            type="radio"
            name="options"
            aria-label="Batteries"
            value="batteries"
            onChange={(e) => setOption(e.target.value)}
          />
          <input
            className="join-item btn"
            type="radio"
            name="options"
            aria-label="Controllers"
            value="controllers"
            onChange={(e) => setOption(e.target.value)}
          />
        </div>
        <div className="w-full h-full">
          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2 md:gap-4">
            {filteredProducts.map((product) => (
              <>
                <>
                  {product.type === "solar system" && option === "solar" && (
                    <div className="card bg-base-20 image-full w-full shadow-sm rounded-md">
                      <figure>
                        <StaticImage
                          className="w-full h-full"
                          src="../images/solar-system.jpg"
                          alt="product image"
                        />
                      </figure>
                      <div className="card-body max-md:-ml-4">
                        <h2 className="card-title">
                          {product.type.replace(/\b\w/g, (char: string) =>
                            char.toUpperCase()
                          )}
                        </h2>
                        <h4 className="font-semibold text-sm md:text-md">
                          Package: {product.name}
                        </h4>
                        <p className="text-xs">
                          Battery type: {product.battery_type}
                        </p>
                        <p>
                          Price: ₦
                          {(
                            product.battery * product.number_of_battery +
                            product.solar_panel * product.number_of_panel +
                            product.inverter +
                            product.controller +
                            product.installation_kit +
                            product.installation_cost
                          ).toLocaleString()}
                        </p>
                        <div className="card-actions flex flex-row justify-end">
                          <button
                            className="btn btn-accent btn-sm"
                            onClick={() => openModal(product)}
                          >
                            Details
                          </button>
                          <button
                            className={`btn ${
                              cart.some((cat) => cat.id === product.id)
                                ? "btn-primary"
                                : "btn-secondary"
                            } btn-sm ml-2`}
                            onClick={() =>
                              addToCart({
                                ...product,
                                price:
                                  product.battery * product.number_of_battery +
                                  product.solar_panel *
                                    product.number_of_panel +
                                  product.inverter +
                                  product.controller +
                                  product.installation_kit +
                                  product.installation_cost,
                              })
                            }
                          >
                            {cart.some((cat) => cat.id === product.id)
                              ? "Added"
                              : "Add to Cart"}
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </>
                <>
                  {product.type === "backup system" && option === "backup" && (
                    <div className="card bg-base-20 image-full w-full shadow-sm rounded-md">
                      <figure>
                        <StaticImage
                          className="w-full h-full"
                          src="../images/backup.jpg"
                          alt="product image"
                        />
                      </figure>
                      <div className="card-body max-md:-ml-4">
                        <h2 className="card-title">
                          {product.type.replace(/\b\w/g, (char: string) =>
                            char.toUpperCase()
                          )}
                        </h2>
                        <h4 className="font-semibold text-sm md:text-md">
                          Package: {product.name}
                        </h4>
                        <p className="text-xs">
                          Battery type: {product.battery_type}
                        </p>
                        <p>
                          Price: ₦
                          {(
                            product.battery * product.number_of_battery +
                            product.solar_panel * product.number_of_panel +
                            product.inverter +
                            product.controller +
                            product.installation_kit +
                            product.installation_cost
                          ).toLocaleString()}
                        </p>
                        <div className="card-actions flex flex-row justify-end">
                          <button
                            className="btn btn-accent btn-sm"
                            onClick={() => openModal(product)}
                          >
                            Details
                          </button>
                          <button
                            className={`btn ${
                              cart.some((cat) => cat.id === product.id)
                                ? "btn-primary"
                                : "btn-secondary"
                            } btn-sm ml-2`}
                            onClick={() =>
                              addToCart({
                                ...product,
                                price:
                                  product.battery * product.number_of_battery +
                                  product.solar_panel *
                                    product.number_of_panel +
                                  product.inverter +
                                  product.controller +
                                  product.installation_kit +
                                  product.installation_cost,
                              })
                            }
                          >
                            {cart.some((cat) => cat.id === product.id)
                              ? "Added"
                              : "Add to Cart"}
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              </>
            ))}
          </div>

          {option === "panels" && (
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2 md:gap-4">
              {solar.map((item) => (
                <div
                  key={item.id}
                  className="card bg-base-100 w-full shadow-sm"
                >
                  <figure>
                    <StaticImage
                      className="w-full h-[60%] p-0"
                      src="../images/solar_panel.png"
                      alt="product image"
                    />
                  </figure>
                  <div className="card-body max-md:-ml-4">
                    <h2 className="card-title">
                      {item.type.replace(/\b\w/g, (char: string) =>
                        char.toUpperCase()
                      )}
                    </h2>
                    <h4 className="font-semibold text-sm md:text-md">
                      Package: {item.name}
                    </h4>
                    <p className="text-xs">Panel Rating: {item.capacity}</p>
                    <p>Price: ₦{item.price.toLocaleString()} per unit</p>
                    <div className="card-actions flex flex-row justify-end">
                      <button
                        className="btn btn-accent btn-sm"
                        onClick={() => openModal2(item)}
                      >
                        Details
                      </button>
                      <button
                        className={`btn ${
                          cart.some((cat) => cat.id === item.id)
                            ? "btn-primary"
                            : "btn-secondary"
                        } btn-sm ml-2`}
                        onClick={() =>
                          addToCart({
                            ...item,
                            price: item.price,
                          })
                        }
                      >
                        {cart.some((cat) => cat.id === item.id)
                          ? "Added"
                          : "Add to Cart"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {option === "inverters" && (
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2 md:gap-4">
              {inverter.map((item) => (
                <div
                  key={item.id}
                  className="card bg-base-100 w-full shadow-sm"
                >
                  <figure>
                    <StaticImage
                      className="w-full h-[60%] p-0"
                      src={
                        item.type === "Hybrid"
                          ? "../images/hybrid_inverter.webp"
                          : "../images/inverter.jpg"
                      }
                      alt="product image"
                    />
                  </figure>
                  <div className="card-body max-md:-ml-4">
                    <h2 className="card-title">
                      {item.type.replace(/\b\w/g, (char: string) =>
                        char.toUpperCase()
                      )}
                    </h2>
                    <h4 className="font-semibold text-sm md:text-md">
                      Package: {item.name}
                    </h4>
                    <p className="text-xs">Panel Rating: {item.capacity}</p>
                    <p>Price: ₦{item.price.toLocaleString()} per unit</p>
                    <div className="card-actions flex flex-row justify-end">
                      <button
                        className="btn btn-accent btn-sm"
                        onClick={() => openModal2(item)}
                      >
                        Details
                      </button>
                      <button
                        className={`btn ${
                          cart.some((cat) => cat.id === item.id)
                            ? "btn-primary"
                            : "btn-secondary"
                        } btn-sm ml-2`}
                        onClick={() =>
                          addToCart({
                            ...item,
                            price: item.price,
                          })
                        }
                      >
                        {cart.some((cat) => cat.id === item.id)
                          ? "Added"
                          : "Add to Cart"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {option === "batteries" && (
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2 md:gap-4">
              {battery.map((item) => (
                <div
                  key={item.id}
                  className="card bg-base-100 w-full shadow-sm"
                >
                  <figure>
                    <StaticImage
                      className="w-full h-[60%] p-0"
                      src="../images/solar_panel.png"
                      alt="product image"
                    />
                  </figure>
                  <div className="card-body max-md:-ml-4">
                    <h2 className="card-title">
                      {item.type.replace(/\b\w/g, (char: string) =>
                        char.toUpperCase()
                      )}
                    </h2>
                    <h4 className="font-semibold text-sm md:text-md">
                      Package: {item.name}
                    </h4>
                    <p className="text-xs">Panel Rating: {item.capacity}</p>
                    <p>Price: ₦{item.price.toLocaleString()} per unit</p>
                    <div className="card-actions flex flex-row justify-end">
                      <button
                        className="btn btn-accent btn-sm"
                        onClick={() => openModal2(item)}
                      >
                        Details
                      </button>
                      <button
                        className={`btn ${
                          cart.some((cat) => cat.id === item.id)
                            ? "btn-primary"
                            : "btn-secondary"
                        } btn-sm ml-2`}
                        onClick={() =>
                          addToCart({
                            ...item,
                            price: item.price,
                          })
                        }
                      >
                        {cart.some((cat) => cat.id === item.id)
                          ? "Added"
                          : "Add to Cart"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {option === "controllers" && (
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2 md:gap-4">
              {controller.map((item) => (
                <div
                  key={item.id}
                  className="card bg-base-100 w-full shadow-sm"
                >
                  <figure>
                    <StaticImage
                      className="w-full h-[60%] p-0"
                      src="../images/contoller.jpg"
                      alt="product image"
                    />
                  </figure>
                  <div className="card-body max-md:-ml-4">
                    <h2 className="card-title">
                      {item.type.replace(/\b\w/g, (char: string) =>
                        char.toUpperCase()
                      )}
                    </h2>
                    <h4 className="font-semibold text-sm md:text-md">
                      Package: {item.name}
                    </h4>
                    <p className="text-xs">Panel Rating: {item.capacity}</p>
                    <p>Price: ₦{item.price.toLocaleString()} per unit</p>
                    <div className="card-actions flex flex-row justify-end">
                      <button
                        className="btn btn-accent btn-sm"
                        onClick={() => openModal2(item)}
                      >
                        Details
                      </button>
                      <button
                        className={`btn ${
                          cart.some((cat) => cat.id === item.id)
                            ? "btn-primary"
                            : "btn-secondary"
                        } btn-sm ml-2`}
                        onClick={() =>
                          addToCart({
                            ...item,
                            price: item.price,
                          })
                        }
                      >
                        {cart.some((cat) => cat.id === item.id)
                          ? "Added"
                          : "Add to Cart"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* You can open the modal using document.getElementById('ID').showModal() method */}

          <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-lg">
                {selected?.type?.replace(/\b\w/g, (char: string) =>
                  char.toUpperCase()
                )}
              </h3>
              <h5 className="mt-2">{selected?.name}</h5>
              <div className=" gap-4 mt-5 grid grid-cols-1 md:grid-cols-2">
                <p className="text-sm">
                  Inverter: <b>₦{selected?.inverter?.toLocaleString()}</b>
                </p>
                {selected.type === "solar system" && (
                  <p className="text-sm">
                    Solar Panel:{" "}
                    <b>₦{selected?.solar_panel?.toLocaleString()} per unit</b>
                  </p>
                )}
                {selected.type === "solar system" && (
                  <p>
                    panel rating: <b>{selected?.panel_rating} watts</b>
                  </p>
                )}
                {selected.type === "solar system" && (
                  <p>
                    Number of panel: <b>{selected?.number_of_panel}</b>
                  </p>
                )}
                <p className="text-sm">
                  Battery:{" "}
                  <b>₦{selected?.battery?.toLocaleString()} per unit</b>
                </p>
                <p>
                  Battery Rating:{" "}
                  <b>{selected?.battery_rating?.toLowerCase()}</b>
                </p>
                <p>
                  Batter type: <b>{selected?.battery_type}</b>
                </p>
                <p>
                  Number of battery: <b>{selected?.number_of_battery}</b>
                </p>
                {selected.type === "solar system" && (
                  <p className="text-sm">
                    Controller: <b>₦{selected?.controller?.toLocaleString()}</b>
                  </p>
                )}
                {selected.type === "solar system" && (
                  <p>
                    Controller Rating:{" "}
                    <b>{selected?.controller_rating?.toLowerCase()}</b>
                  </p>
                )}
                <p>
                  Installation Kit:{" "}
                  <b>₦{selected?.installation_kit?.toLocaleString()}</b>
                </p>
                <p>
                  Installation Cost:{" "}
                  <b>₦{selected?.installation_cost?.toLocaleString()}</b>
                </p>
              </div>
              <div className="flex mt-6 flex-row justify-between items-center">
                <p className="font-semibold text-2xl ">
                  PRICE: ₦
                  {(
                    selected?.battery * selected?.number_of_battery +
                    selected.solar_panel * selected?.number_of_panel +
                    selected?.inverter +
                    selected?.controller +
                    selected?.installation_kit +
                    selected?.installation_cost
                  )?.toLocaleString()}
                </p>
                <button
                  className={`btn btn-${
                    cart.some((cat) => cat.id === selected?.id)
                      ? "primary"
                      : "secondary"
                  } btn-sm ml-2`}
                  onClick={() =>
                    addToCart({
                      ...selected,
                      price:
                        selected.battery * selected.number_of_battery +
                        selected.solar_panel * selected.number_of_panel +
                        selected.inverter +
                        selected.controller +
                        selected.installation_kit +
                        selected.installation_cost,
                    })
                  }
                >
                  {cart.some((cat) => cat.id === selected?.id)
                    ? "Added"
                    : "Add to Cart"}
                </button>
              </div>
            </div>
          </dialog>

          <dialog id="my_modal_5" className="modal">
            <div className="modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              {/* <h3 className="font-bold text-lg">
                {selected?.type?.replace(/\b\w/g, (char: string) =>
                  char.toUpperCase()
                )}
              </h3> */}
              <h5 className="mt-2">{selected?.name}</h5>
              <div className=" gap-4 mt-5 grid grid-cols-1 md:grid-cols-2">
                <p className="text-sm">
                  Price: <b>₦{selected?.price?.toLocaleString()}</b>
                </p>

                <p>
                  Rating: <b>{selected?.capacity}</b>
                </p>
                <p>
                  Type: <b>{selected?.type}</b>
                </p>
                <p>
                  Warranty: <b>{selected?.waranty}</b>
                </p>

                {selected?.voltage && (
                  <p>
                    Voltage: <b>{selected?.voltage}</b>
                  </p>
                )}
              </div>
              <div className="flex mt-6 flex-row justify-between items-center">
                <button
                  className={`btn btn-${
                    cart.some((cat) => cat.id === selected?.id)
                      ? "primary"
                      : "secondary"
                  } btn-sm ml-2`}
                  onClick={() =>
                    addToCart({
                      ...selected,
                      price: selected?.price,
                    })
                  }
                >
                  {cart.some((cat) => cat.id === selected?.id)
                    ? "Added"
                    : "Add to Cart"}
                </button>
              </div>
            </div>
          </dialog>
        </div>
        {/* <dialog id="my_modal_4" className="modal">
          <div className="modal-box">
            {alert !== "" && (
              <div role="alert" className="alert alert-success">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 shrink-0 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{alert}</span>
              </div>
            )}
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>

            <h3 className="font-bold text-lg mb-5">Complete your purchase</h3>
            {cart.length === 0 ? (
              <p>No items in cart.</p>
            ) : (
              <>
                <ul className="gap-4">
                  {cart.map((item, index) => (
                    <li
                      key={index}
                      style={{ marginBottom: "0.5rem" }}
                      className="flex items-center"
                    >
                      {item?.name}{" "}
                      <CartQtySelector
                        quantity={item.quantity}
                        onQuantityChange={(newQuantity) =>
                          updateCartItemQuantity(index, newQuantity)
                        }
                        minQuantity={1}
                        maxQuantity={1000}
                      />
                      <button
                        className="btn btn-sm btn-error"
                        onClick={() => removeFromCart(index)}
                        style={{ marginLeft: "1rem" }}
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
                <p style={{ fontWeight: "bold" }}>
                  Total: ₦{calculateCartTotal()?.toLocaleString()}
                </p>
                <form className="mt-5" onSubmit={checkout}>
                  <label className="floating-label">
                    <span>Full Name</span>
                    <input
                      type="text"
                      placeholder="full name"
                      className="input input-md"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </label>
                  <br />
                  <label className="floating-label">
                    <span>Your Email</span>
                    <input
                      type="text"
                      placeholder="mail@site.com"
                      className="input input-md"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </label>
                  <br />
                  <label className="floating-label">
                    <span>Phone Number</span>
                    <input
                      type="text"
                      placeholder="phone number"
                      className="input input-md"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </label>
                  <br />
                  <label className="floating-label">
                    <span>Address</span>
                    <input
                      type="text"
                      placeholder="address"
                      className="input input-md"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </label>
                  <br />
                  <label className="floating-label">
                    <span>Location/state</span>
                    <input
                      type="text"
                      placeholder="location/state"
                      className="input input-md"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </label>
                  <input
                    readOnly
                    type="hidden"
                    value={calculateCartTotal()?.toLocaleString()}
                    name="total_price"
                    className="input input-md"
                  />
                  <button type="submit" className="btn btn-sm mt-4 btn-primary">
                    {loading ? (
                      <span className="loading loading-spinner loading-xs"></span>
                    ) : (
                      "Checkout"
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </dialog> */}

        <dialog id="my_modal_4" className="modal">
          <div className="modal-box">
            {alert !== "" && (
              <div role="alert" className="alert alert-success mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 shrink-0 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{alert}</span>
              </div>
            )}
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>

            <h3 className="font-bold text-lg mb-5">Complete your purchase</h3>
            {cart.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-500">No items in cart.</p>
                <p className="text-sm text-gray-400 mt-2">
                  Add some products to get started!
                </p>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Order Summary</h4>
                  <div className="space-y-3 overflow-auto">
                    {cart.map((item, index) => (
                      <div
                        key={`${item.id}-${index}`}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                      >
                        <div className="flex">
                          <h5 className="font-medium text-sm">{item?.name}</h5>
                          <div className="text-xs text-gray-600 mt-1 ml-2">
                            <span>
                              ₦{Number(item.price).toLocaleString()} each
                            </span>
                            {item.type && (
                              <span className="ml-2">• {item.type}</span>
                            )}
                            {item.capacity && (
                              <span className="ml-2">• {item.capacity}</span>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <CartQtySelector
                            quantity={Number(item.quantity) || 1}
                            onQuantityChange={(newQuantity) =>
                              updateCartItemQuantity(index, newQuantity)
                            }
                            minQuantity={1}
                            maxQuantity={1000}
                          />

                          <div className="text-right min-w-[100px]">
                            <div className="font-semibold text-sm">
                              ₦
                              {(
                                (Number(item.price) || 0) *
                                (Number(item.quantity) || 1)
                              ).toLocaleString()}
                            </div>
                          </div>

                          <button
                            className="btn btn-sm btn-error"
                            onClick={() => removeFromCart(index)}
                            title="Remove item"
                          >
                            ×
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-gray-600">
                        Total Items:{" "}
                        {cart.reduce(
                          (sum, item) => sum + (Number(item.quantity) || 1),
                          0
                        )}
                      </div>
                      <div className="text-lg font-bold">
                        Total: ₦{calculateCartTotal().toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>

                <form className="mt-5" onSubmit={checkout}>
                  <label className="floating-label w-full mb-2">
                    <span>Full Name</span>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className="input input-md w-full"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </label>

                  <label className="floating-label w-full mb-2">
                    <span>Email Address</span>

                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="input input-md w-full"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </label>
                  <label className="floating-label w-full mb-2">
                    <span>Phone Number</span>

                    <input
                      type="tel"
                      placeholder="Enter phone number"
                      className="input input-md w-full"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </label>

                  <label className="floating-label w-full mb-2">
                    <span>Location/State </span>

                    <input
                      type="text"
                      placeholder="Enter location or state"
                      className="input input-md w-full"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      required
                    />
                  </label>

                  <label className="floating-label w-full mb-2">
                    <span>Delivery Address</span>

                    <input
                      placeholder="Enter your complete delivery address"
                      className="input input-md w-full"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      required
                    />
                  </label>

                  <button
                    type="submit"
                    className="btn btn-sm mt-4 btn-primary w-full"
                    disabled={loading || cart.length === 0}
                  >
                    {loading ? (
                      <>
                        <span className="loading loading-spinner loading-sm"></span>
                        Processing Order...
                      </>
                    ) : (
                      `Place Order - ₦${calculateCartTotal().toLocaleString()}`
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </dialog>
      </div>
    </Layout>
  );
};

export default SolarProductsPage;
export const Head = () => (
  <>
    <title>
      AntonAxel Solar Panels | High-Efficiency Renewable Energy Solutions
    </title>
  </>
);
