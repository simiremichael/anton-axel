import CartQtySelector from "@/components/CartQtySelector";
import Layout from "@/components/layout";
import { StaticImage } from "gatsby-plugin-image";
import { Battery, FolderInput } from "lucide-react";
import React, { useEffect, useState } from "react";
import { navigate } from "gatsby";

const products = [
  {
    id: 1,
    type: "solar system",
    name: "Eco Solar System",
    wattage: "1.1KVA",
    inverter_rating: "1.1KVA",
    inverter: 130000,
    solar_panel: 135000,
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
    type: "Lithium",
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
    image: "../images/controller.jpg",
    capacity: "60A",
    price: 180000,
    warranty: "1yr",
    type: "MPPT with heat sink",
    quantity: 1,
  },
  {
    id: 49,
    name: "Charge controller",
    image: "../images/controller.jpg",
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
    image: "../images/controller.jpg",
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
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Product | any>([]);
  const [alert, setAlert] = useState<any>("");
  const [option, setOption] = useState("solar");

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(cart));
      window.dispatchEvent(new Event("cartUpdated"));
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

  const addToCart = (product: any) => {
    if (!product || !product.id) {
      console.error("Invalid product data:", product);
      setAlert("Error adding item to cart. Please try again.");
      return;
    }

    const existingItemIndex = cart.findIndex((item) => item.id === product.id);

    if (existingItemIndex !== -1) {
      const currentQuantity = Number(cart[existingItemIndex]?.quantity) || 1;
      updateCartItemQuantity(existingItemIndex, currentQuantity + 1);
    } else {
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

  return (
    <Layout pageTitle="Products Page">
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="px-4 md:px-8 py-20">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-orange-100 text-[#705c53] rounded-full text-sm font-medium mb-4">
              Our Products
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Solar Energy Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-2">
              Discover our comprehensive range of solar products and energy
              solutions
            </p>
            <p className="text-sm font-semibold text-[#705c53]">
              Contact us for custom quotation
            </p>
          </div>

          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
              <input
                type="search"
                onChange={(e) => setQuery(e.target.value)}
                value={query}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#705c53] focus:border-transparent"
                placeholder="Search products..."
              />
            </div>
          </div>

          <div className="join mb-12 max-md:grid max-md:grid-cols-3 max-md:gap-2 justify-center">
            <input
              className="join-item btn checked:bg-[#705c53] checked:text-white checked:border-[#705c53]"
              type="radio"
              name="options"
              aria-label="Solar"
              value="solar"
              onChange={(e) => setOption(e.target.value)}
              defaultChecked
            />
            <input
              className="join-item btn checked:bg-[#705c53] checked:text-white checked:border-[#705c53]"
              type="radio"
              name="options"
              aria-label="Backup"
              value="backup"
              onChange={(e) => setOption(e.target.value)}
            />
            <input
              className="join-item btn checked:bg-[#705c53] checked:text-white checked:border-[#705c53]"
              type="radio"
              name="options"
              aria-label="Panels"
              value="panels"
              onChange={(e) => setOption(e.target.value)}
            />
            <input
              className="join-item btn checked:bg-[#705c53] checked:text-white checked:border-[#705c53]"
              type="radio"
              name="options"
              aria-label="Inverters"
              value="inverters"
              onChange={(e) => setOption(e.target.value)}
            />
            <input
              className="join-item btn checked:bg-[#705c53] checked:text-white checked:border-[#705c53]"
              type="radio"
              name="options"
              aria-label="Batteries"
              value="batteries"
              onChange={(e) => setOption(e.target.value)}
            />
            <input
              className="join-item btn checked:bg-[#705c53] checked:text-white checked:border-[#705c53]"
              type="radio"
              name="options"
              aria-label="Controllers"
              value="controllers"
              onChange={(e) => setOption(e.target.value)}
            />
            <input
              className="join-item btn checked:bg-[#705c53] checked:text-white checked:border-[#705c53]"
              type="radio"
              name="options"
              aria-label="Lights"
              value="lights"
              onChange={(e) => setOption(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {option === "solar" &&
              filteredProducts
                .filter((product) => product.type === "solar system")
                .map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden"
                  >
                    <div className="relative h-48">
                      <StaticImage
                        className="w-full h-full object-cover"
                        src="../images/solar-system.jpg"
                        alt="Solar System"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-lg font-bold">Solar System</h3>
                        <p className="text-sm opacity-90">{product.name}</p>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="mb-4">
                        <p className="text-sm text-gray-600 mb-1">
                          Battery: {product.battery_type}
                        </p>
                        <p className="text-2xl font-bold text-[#705c53]">
                          ₦
                          {(
                            product.battery * product.number_of_battery +
                            product.solar_panel * product.number_of_panel +
                            product.inverter +
                            product.controller +
                            product.installation_kit +
                            product.installation_cost
                          ).toLocaleString()}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => openModal(product)}
                          className="flex-1 px-4 py-2 border border-[#705c53] text-[#705c53] rounded-lg hover:bg-[#705c53] hover:text-white transition-colors duration-300"
                        >
                          Details
                        </button>
                        <button
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
                          className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${
                            cart.some((cat) => cat.id === product.id)
                              ? "bg-green-600 text-white"
                              : "bg-[#705c53] text-white hover:bg-[#8b6f47]"
                          }`}
                        >
                          {cart.some((cat) => cat.id === product.id)
                            ? "Added"
                            : "Add to Cart"}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

            {option === "backup" &&
              filteredProducts
                .filter((product) => product.type === "backup system")
                .map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden"
                  >
                    <div className="relative h-48">
                      <StaticImage
                        className="w-full h-full object-cover"
                        src="../images/backup.jpg"
                        alt="Backup System"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-lg font-bold">Backup System</h3>
                        <p className="text-sm opacity-90">{product.name}</p>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="mb-4">
                        <p className="text-sm text-gray-600 mb-1">
                          Battery: {product.battery_type}
                        </p>
                        <p className="text-2xl font-bold text-[#705c53]">
                          ₦
                          {(
                            product.battery * product.number_of_battery +
                            product.solar_panel * product.number_of_panel +
                            product.inverter +
                            product.controller +
                            product.installation_kit +
                            product.installation_cost
                          ).toLocaleString()}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => openModal(product)}
                          className="flex-1 px-3 py-2 border border-[#705c53] text-[#705c53] rounded-lg hover:bg-[#705c53] hover:text-white transition-colors duration-300"
                        >
                          Details
                        </button>
                        <button
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
                          className={`flex-1 px-3 py-2 rounded-lg font-medium transition-colors duration-300 ${
                            cart.some((cat) => cat.id === product.id)
                              ? "bg-green-600 text-white"
                              : "bg-[#705c53] text-white hover:bg-[#8b6f47]"
                          }`}
                        >
                          {cart.some((cat) => cat.id === product.id)
                            ? "Added"
                            : "Add to Cart"}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

            {option === "panels" &&
              solar.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden"
                >
                  <div className="h-48 p-4">
                    <StaticImage
                      className="w-full h-full object-contain"
                      src="../images/solar_panel.png"
                      alt="Solar Panel"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {item.type} Panel
                    </h3>
                    <p className="text-sm text-gray-600 mb-1">
                      Capacity: {item.capacity}
                    </p>
                    <p className="text-2xl font-bold text-[#705c53] mb-4">
                      ₦{item.price.toLocaleString()}
                    </p>
                    <div className="flex gap-2">
                      <button
                        onClick={() => openModal2(item)}
                        className="flex-1 px-3 py-2 border border-[#705c53] text-[#705c53] rounded-lg hover:bg-[#705c53] hover:text-white transition-colors duration-300"
                      >
                        Details
                      </button>
                      <button
                        onClick={() =>
                          addToCart({ ...item, price: item.price })
                        }
                        className={`flex-1 px-3 py-2 rounded-lg font-medium transition-colors duration-300 ${
                          cart.some((cat) => cat.id === item.id)
                            ? "bg-green-600 text-white"
                            : "bg-[#705c53] text-white hover:bg-[#8b6f47]"
                        }`}
                      >
                        {cart.some((cat) => cat.id === item.id)
                          ? "Added"
                          : "Add to Cart"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}

            {option === "inverters" &&
              inverter.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden"
                >
                  <div className="h-48 p-4">
                    {item.type === "Hybrid" ? (
                      <StaticImage
                        className="w-full h-full object-contain"
                        src="../images/hybrid_inverter.webp"
                        alt="Hybrid Inverter"
                      />
                    ) : (
                      <StaticImage
                        className="w-full h-full object-contain"
                        src="../images/inverter.jpeg"
                        alt="Pure Sine Wave Inverter"
                      />
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {item.type} Inverter
                    </h3>
                    <p className="text-sm text-gray-600 mb-1">
                      Capacity: {item.capacity}
                    </p>
                    <p className="text-2xl font-bold text-[#705c53] mb-4">
                      ₦{item.price.toLocaleString()}
                    </p>
                    <div className="flex gap-2">
                      <button
                        onClick={() => openModal2(item)}
                        className="flex-1 px-4 py-2 border border-[#705c53] text-[#705c53] rounded-lg hover:bg-[#705c53] hover:text-white transition-colors duration-300"
                      >
                        Details
                      </button>
                      <button
                        onClick={() =>
                          addToCart({ ...item, price: item.price })
                        }
                        className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${
                          cart.some((cat) => cat.id === item.id)
                            ? "bg-green-600 text-white"
                            : "bg-[#705c53] text-white hover:bg-[#8b6f47]"
                        }`}
                      >
                        {cart.some((cat) => cat.id === item.id)
                          ? "Added"
                          : "Add to Cart"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}

            {option === "batteries" &&
              battery.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden"
                >
                  <div className="h-48 p-4">
                    {item.type === "Lithium-ion" ? (
                      <StaticImage
                        className="w-full h-full object-contain"
                        src="../images/lithium_battery.jpg"
                        alt="Lithium-ion Battery"
                      />
                    ) : item.type === "Lithium" ? (
                      <StaticImage
                        className="w-full h-full object-contain"
                        src="../images/lithium_battery_small.jpg"
                        alt="Lithium Battery"
                      />
                    ) : (
                      <StaticImage
                        className="w-full h-full object-contain"
                        src="../images/wetcell_battery.jpg"
                        alt="Wet Cell Battery"
                      />
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {item.type} Battery
                    </h3>
                    <p className="text-sm text-gray-600 mb-1">
                      Capacity: {item.capacity}
                    </p>
                    <p className="text-2xl font-bold text-[#705c53] mb-4">
                      ₦{item.price.toLocaleString()}
                    </p>
                    <div className="flex gap-2">
                      <button
                        onClick={() => openModal2(item)}
                        className="flex-1 px-4 py-2 border border-[#705c53] text-[#705c53] rounded-lg hover:bg-[#705c53] hover:text-white transition-colors duration-300"
                      >
                        Details
                      </button>
                      <button
                        onClick={() =>
                          addToCart({ ...item, price: item.price })
                        }
                        className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${
                          cart.some((cat) => cat.id === item.id)
                            ? "bg-green-600 text-white"
                            : "bg-[#705c53] text-white hover:bg-[#8b6f47]"
                        }`}
                      >
                        {cart.some((cat) => cat.id === item.id)
                          ? "Added"
                          : "Add to Cart"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}

            {option === "controllers" &&
              controller.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden"
                >
                  <div className="h-48 p-4">
                    <StaticImage
                      className="w-full h-full object-contain"
                      src="../images/controller.jpg"
                      alt="Charge Controller"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {item.type}
                    </h3>
                    <p className="text-sm text-gray-600 mb-1">
                      Capacity: {item.capacity}
                    </p>
                    <p className="text-2xl font-bold text-[#705c53] mb-4">
                      ₦{item.price.toLocaleString()}
                    </p>
                    <div className="flex gap-2">
                      <button
                        onClick={() => openModal2(item)}
                        className="flex-1 px-4 py-2 border border-[#705c53] text-[#705c53] rounded-lg hover:bg-[#705c53] hover:text-white transition-colors duration-300"
                      >
                        Details
                      </button>
                      <button
                        onClick={() =>
                          addToCart({ ...item, price: item.price })
                        }
                        className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${
                          cart.some((cat) => cat.id === item.id)
                            ? "bg-green-600 text-white"
                            : "bg-[#705c53] text-white hover:bg-[#8b6f47]"
                        }`}
                      >
                        {cart.some((cat) => cat.id === item.id)
                          ? "Added"
                          : "Add to Cart"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}

            {option === "lights" &&
              lights.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden"
                >
                  <div className="h-48 p-4">
                    <StaticImage
                      className="w-full h-full object-contain"
                      src="../images/street_light.jpeg"
                      alt="LED Street Light"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {item.type} Street Light
                    </h3>
                    <p className="text-sm text-gray-600 mb-1">
                      Power: {item.capacity}
                    </p>
                    <p className="text-2xl font-bold text-[#705c53] mb-4">
                      ₦{item.price.toLocaleString()}
                    </p>
                    <div className="flex gap-2">
                      <button
                        onClick={() => openModal2(item)}
                        className="flex-1 px-4 py-2 border border-[#705c53] text-[#705c53] rounded-lg hover:bg-[#705c53] hover:text-white transition-colors duration-300"
                      >
                        Details
                      </button>
                      <button
                        onClick={() =>
                          addToCart({ ...item, price: item.price })
                        }
                        className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${
                          cart.some((cat) => cat.id === item.id)
                            ? "bg-green-600 text-white"
                            : "bg-[#705c53] text-white hover:bg-[#8b6f47]"
                        }`}
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

          {/* Modals */}
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box max-w-2xl">
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-2xl text-[#705c53] mb-4">
                {selected?.type?.replace(/\b\w/g, (char: string) =>
                  char.toUpperCase()
                )}
              </h3>
              <h5 className="text-lg mb-6">{selected?.name}</h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm font-semibold text-gray-700">
                    Inverter
                  </p>
                  <p className="text-lg font-bold text-[#705c53]">
                    ₦{selected?.inverter?.toLocaleString()}
                  </p>
                </div>
                {selected.type === "solar system" && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-gray-700">
                      Solar Panel
                    </p>
                    <p className="text-lg font-bold text-[#705c53]">
                      ₦{selected?.solar_panel?.toLocaleString()} per unit
                    </p>
                  </div>
                )}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm font-semibold text-gray-700">Battery</p>
                  <p className="text-lg font-bold text-[#705c53]">
                    ₦{selected?.battery?.toLocaleString()} per unit
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm font-semibold text-gray-700">
                    Installation
                  </p>
                  <p className="text-lg font-bold text-[#705c53]">
                    ₦{selected?.installation_cost?.toLocaleString()}
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center pt-4 border-t">
                <div>
                  <p className="text-sm text-gray-600">Total Price</p>
                  <p className="text-3xl font-bold text-[#705c53]">
                    ₦
                    {(
                      selected?.battery * selected?.number_of_battery +
                      selected.solar_panel * selected?.number_of_panel +
                      selected?.inverter +
                      selected?.controller +
                      selected?.installation_kit +
                      selected?.installation_cost
                    )?.toLocaleString()}
                  </p>
                </div>
                <button
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
                  className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-300 ${
                    cart.some((cat) => cat.id === selected?.id)
                      ? "bg-green-600 text-white"
                      : "bg-[#705c53] text-white hover:bg-[#8b6f47]"
                  }`}
                >
                  {cart.some((cat) => cat.id === selected?.id)
                    ? "Added to Cart"
                    : "Add to Cart"}
                </button>
              </div>
            </div>
          </dialog>

          <dialog id="my_modal_5" className="modal">
            <div className="modal-box">
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-2xl text-[#705c53] mb-4">
                {selected?.name}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm font-semibold text-gray-700">Price</p>
                  <p className="text-lg font-bold text-[#705c53]">
                    ₦{selected?.price?.toLocaleString()}
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm font-semibold text-gray-700">
                    Capacity
                  </p>
                  <p className="text-lg font-bold text-gray-900">
                    {selected?.capacity}
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm font-semibold text-gray-700">Type</p>
                  <p className="text-lg font-bold text-gray-900">
                    {selected?.type}
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm font-semibold text-gray-700">
                    Warranty
                  </p>
                  <p className="text-lg font-bold text-gray-900">
                    {selected?.waranty || selected?.warranty}
                  </p>
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  onClick={() =>
                    addToCart({ ...selected, price: selected?.price })
                  }
                  className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-300 ${
                    cart.some((cat) => cat.id === selected?.id)
                      ? "bg-green-600 text-white"
                      : "bg-[#705c53] text-white hover:bg-[#8b6f47]"
                  }`}
                >
                  {cart.some((cat) => cat.id === selected?.id)
                    ? "Added to Cart"
                    : "Add to Cart"}
                </button>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </Layout>
  );
};

export default SolarProductsPage;
export const Head = () => (
  <>
    <title>
      AntonAxel Solar Products | High-Efficiency Renewable Energy Solutions
    </title>
    <meta
      name="description"
      content="Explore AntonAxel's comprehensive range of solar energy products including solar systems, backup systems, panels, inverters, batteries, and LED lights. Quality renewable energy solutions for Nigeria."
    />
  </>
);
