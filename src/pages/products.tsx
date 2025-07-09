// src/pages/solar-products.js
import Layout from "@/components/layout";
import { StaticImage } from "gatsby-plugin-image";
import { Battery } from "lucide-react";
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
    inverter: 1680000,
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
    inverter: 920000,
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
    battery: 3255000,
    battery_rating: "10kWTH",
    battery_type: "Lithium-ion",
    number_of_battery: 1,
    controller: 0,
    controller_rating: "",
    installation_kit: 300000,
    installation_cost: 250000,
  },
];

const SolarProductsPage = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Product | any>([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState<any>("");

  interface Product {
    id: number;
    name: string;
    wattage: string;
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
    [key: string]: any;
  }

  interface CartItem extends Product {}

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index: number) => {
    setCart((prev) => prev?.filter((_, i) => i !== index));
  };

  const checkout = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    //   http://localhost:5000/api/orders  https://antonaxel-server.onrender.com/api/orders
    try {
      const response = await fetch(
        "https://antonaxel-server.onrender.com/api/orders",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            items: cart,
            email,
            total_price: cart.reduce((sum, item) => sum + item.price, 0),
            name,
            phone,
            address,
            location,
          }),
        }
      );

      if (!response.ok) {
        const error = await response.json();
        setAlert("Order failed");
        setLoading(false);
        throw new Error(error.error || "Order failed");
      }
      const data = await response.json();
      setAlert(data?.message);
      setLoading(false);
      setCart([]);
      return data;
    } catch (error) {
      console.error("Order Error:", error);
      // setAlert("something happened");
      setLoading(false);
      throw error;
    }
  };

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

  useEffect(() => {
    setTimeout(function () {
      setAlert("");
    }, 4000);
  }, [alert]);

  // console.log(cart);

  return (
    <Layout pageTitle="Products Page">
      <div className="px-[2%] md:px-[5%] mt-10 flex flex-col items-center justify-center relative">
        <h1 className="text-2xl font-bold text-center mb-4">
          Solar Energy Products
        </h1>
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
        <label className="input my-10">
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
        <div className="w-full h-full">
          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2 md:gap-4">
            {filteredProducts.map((product) => (
              <div className="card bg-base-20 image-full w-full shadow-sm rounded-md">
                <figure>
                  {product.type === "solar system" ? (
                    <StaticImage
                      className="w-full h-full"
                      src="../images/solar-system.jpg"
                      alt="product image"
                    />
                  ) : (
                    <StaticImage
                      className="w-full h-full"
                      src="../images/backup.jpg"
                      alt="product image"
                    />
                  )}
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
                            product.solar_panel * product.number_of_panel +
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
            ))}
          </div>

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
        </div>

        <dialog id="my_modal_4" className="modal">
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
              {/* if there is a button in form, it will close the modal */}
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
                    <li key={index} style={{ marginBottom: "0.5rem" }}>
                      {item.name} – ₦{item.price.toLocaleString()}{" "}
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
                  Total: ₦
                  {cart
                    .reduce((sum, item) => sum + item.price, 0)
                    .toLocaleString()}
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
                    value={cart
                      .reduce((sum, item) => sum + item.price, 0)
                      .toLocaleString()}
                    placeholder="location/state"
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
    <meta
      name="description"
      content="Upgrade to AntonAxel premium solar panels for unmatched energy efficiency and durability. Our advanced photovoltaic technology delivers 22-24% efficiency ratings, weather-resistant designs, and 25-year performance warranties. Ideal for residential, commercial, or industrial use. Get a free quote for customized solar solutions today!"
    />
  </>
);
