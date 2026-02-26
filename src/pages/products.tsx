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
    solar_panel: 90000,
    battery_type: "Wet Cell",
    panel_rating: 300,
    number_of_panel: 4,
    battery: 280000,
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
    solar_panel: 115000,
    battery_type: "Wet Cell",
    panel_rating: 400,
    number_of_panel: 6,
    number_of_battery: 2,
    battery: 280000,
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
    solar_panel: 115000,
    panel_rating: 400,
    battery_type: "Wet Cell",
    number_of_panel: 6,
    number_of_battery: 2,
    battery: 280000,
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
    solar_panel: 120000,
    panel_rating: 500,
    number_of_panel: 9,
    battery: 280000,
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
    solar_panel: 120000,
    panel_rating: 500,
    number_of_panel: 9,
    battery: 1150000,
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
    solar_panel: 120000,
    panel_rating: 500,
    number_of_panel: 9,
    battery: 1150000,
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
    solar_panel: 120000,
    panel_rating: 500,
    number_of_panel: 12,
    battery: 1400000,
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
    solar_panel: 120000,
    panel_rating: 500,
    number_of_panel: 12,
    battery: 1800000,
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
    solar_panel: 120000,
    panel_rating: 500,
    number_of_panel: 15,
    battery: 1800000,
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
    solar_panel: 120000,
    panel_rating: 500,
    number_of_panel: 21,
    battery: 2000000,
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
    battery: 280000,
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
    battery: 280000,
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
    battery: 280000,
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
    battery: 280000,
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
    battery: 280000,
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
    battery: 280000,
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
    battery: 280000,
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
    battery: 280000,
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
    battery: 280000,
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
    battery: 1150000,
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
    battery: 1150000,
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
    battery: 1800000,
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
    battery: 1800000,
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
    battery: 1800000,
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
    battery: 2000000,
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
    brand: "WAKATEK",
    image: "../images/solar_panel.png",
    capacity: "550w",
    price: 120000,
    waranty: "5 yrs",
    type: "Mono-crystalline",
    quantity: 1,
  },
  {
    id: 27,
    name: "Solar panel",
    brand: "WAKATEK",
    image: "../images/solar_panel.png",
    capacity: "400w",
    price: 115000,
    waranty: "5 yrs",
    type: "Mono-crystalline",
    quantity: 1,
  },
  {
    id: 28,
    name: "Solar panel",
    brand: "Jinko",
    image: "../images/solar_panel.png",
    capacity: "300w",
    price: 90000,
    waranty: "5 yrs",
    type: "Mono-crystalline",
    quantity: 1,
  },
  {
    id: 29,
    name: "Solar panel",
    brand: "Jinko",
    image: "../images/solar_panel.png",
    capacity: "250w",
    price: 80000,
    waranty: "5 yrs",
    type: "Mono-crystalline",
    quantity: 1,
  },
  {
    id: 30,
    name: "Solar panel",
    brand: "Jinko",
    image: "../images/solar_panel.png",
    capacity: "200w",
    price: 60000,
    waranty: "5 yrs",
    type: "Mono-crystalline",
    quantity: 1,
  },
];

const battery = [
  {
    id: 31,
    name: "Battery",
    brand: "WAKATEK",
    image: "../images/wakatek_lithium_battery.jpeg",
    capacity: "15kWh",
    price: 2000000,
    warranty: "5yrs",
    type: "Lithium-ion",
    voltage: "48v",
    quantity: 1,
  },
  {
    id: 32,
    name: "Battery",
    brand: "Blue carbon",
    image: "../images/lithium_battery.jpeg",
    capacity: "10kWh",
    price: 1800000,
    warranty: "5yrs",
    type: "Lithium-ion",
    voltage: "48v",
    quantity: 1,
  },
  {
    id: 33,
    name: "Battery",
    brand: "WAKATEK",
    image: "../images/wakatek_lithium_battery.jpeg",
    capacity: "7.5kWh",
    price: 1400000,
    warranty: "5yrs",
    type: "Lithium-ion",
    voltage: "24v",
    quantity: 1,
  },
  {
    id: 34,
    name: "Battery",
    brand: "Blue carbon",
    image: "../images/lithium_battery.jpeg",
    capacity: "5kWh",
    price: 1150000,
    warranty: "5yrs",
    type: "Lithium-ion",
    voltage: "24v",
    quantity: 1,
  },
  {
    id: 35,
    name: "Battery",
    brand: "SAKO",
    image: "../images/sako_lithium_battery.jpeg",
    capacity: "2.5kwh",
    price: 550000,
    warranty: "5yrs",
    type: "Lithium",
    voltage: "12v",
    quantity: 1,
  },
  {
    id: 36,
    name: "Battery",
    brand: "SAKO",
    image: "../images/sako_lithium_battery.jpeg",
    capacity: "200AMPS",
    price: 460000,
    warranty: "5yrs",
    type: "Lithium",
    voltage: "12v",
    quantity: 1,
  },
  {
    id: 37,
    name: "Battery",
    brand: "SAKO",
    image: "../images/sako_lithium_battery.jpeg",
    capacity: "100AMPS",
    price: 300000,
    warranty: "5yrs",
    type: "Lithium",
    voltage: "12v",
    quantity: 1,
  },
  {
    id: 38,
    name: "Battery",
    brand: "SAKO",
    image: "../images/sako_lithium_battery.jpeg",
    capacity: "100AMPS",
    price: 560000,
    warranty: "5yrs",
    type: "Lithium",
    voltage: "24v",
    quantity: 1,
  },
  {
    id: 39,
    name: "Battery",
    brand: "CAMPEON",
    image: "../images/wetcell_battery.jpg",
    capacity: "220AMPS",
    price: 280000,
    warranty: "1yrs",
    type: "Wet cell",
    voltage: "12v",
    quantity: 1,
  },
];

const inverter = [
  {
    id: 40,
    name: "Inverter",
    brand: "SAKO",
    image: "../images/inverter.jpeg",
    capacity: "2.5KVA",
    price: 300000,
    warranty: "1 yr",
    type: "Pure Sine Wave",
    voltage: "12v",
    quantity: 1,
  },
  {
    id: 41,
    name: "Inverter",
    brand: "SAKO",
    image: "../images/inverter.jpeg",
    capacity: "3.5KVA",
    price: 480000,
    warranty: "1 yr",
    type: "Pure Sine Wave",
    voltage: "24v",
    quantity: 1,
  },
  {
    id: 42,
    name: "Inverter",
    brand: "SAKO",
    image: "../images/inverter.jpeg",
    capacity: "5KVA",
    price: 580000,
    warranty: "1 yr",
    type: "Pure Sine Wave",
    voltage: "48v",
    quantity: 1,
  },
  {
    id: 43,
    name: "Inverter",
    brand: "SAKO",
    image: "../images/inverter.jpeg",
    capacity: "10KVA",
    price: 800000,
    warranty: "1yr",
    type: "Pure Sine Wave",
    voltage: "48v",
    quantity: 1,
  },
  {
    id: 44,
    name: "Inverter",
    brand: "Hexon",
    image: "../images/hybrid_inverter.webp",
    capacity: "2KVA",
    price: 260000,
    warranty: "1yr",
    type: "Hybrid",
    voltage: "24v",
    quantity: 1,
  },
  {
    id: 45,
    name: "Inverter",
    brand: "Hexon",
    image: "../images/hybrid_inverter.webp",
    capacity: "3.5KVA",
    price: 380000,
    warranty: "1yr",
    type: "Hybrid",
    voltage: "24v",
    quantity: 1,
  },
  {
    id: 46,
    name: "Inverter",
    brand: "Hexon",
    image: "../images/hybrid_inverter.webp",
    capacity: "4.2KVA",
    price: 680000,
    warranty: "1yr",
    type: "Hybrid",
    voltage: "24v",
    quantity: 1,
  },
  {
    id: 47,
    name: "Inverter",
    brand: "WAKATEK",
    image: "../images/hybrid_inverter.webp",
    capacity: "5KVA",
    price: 780000,
    warranty: "1yr",
    type: "Hybrid",
    voltage: "24v",
    quantity: 1,
  },
  {
    id: 48,
    name: "Inverter",
    brand: "WAKATEK",
    image: "../images/hybrid_inverter.webp",
    capacity: "6.2KVA",
    price: 820000,
    warranty: "1yr",
    type: "Hybrid",
    voltage: "24v",
    quantity: 1,
  },
  {
    id: 49,
    name: "Inverter",
    brand: "WAKATEK",
    image: "../images/hybrid_inverter.webp",
    capacity: "7KVA",
    price: 965000,
    warranty: "1yr",
    type: "Hybrid",
    voltage: "48v",
    quantity: 1,
  },
  {
    id: 50,
    name: "Inverter",
    brand: "WAKATEK",
    image: "../images/hybrid_inverter.webp",
    capacity: "8KVA",
    price: 1480000,
    warranty: "1yr",
    type: "Hybrid",
    voltage: "48v",
    quantity: 1,
  },
  {
    id: 51,
    name: "Inverter",
    brand: "WAKATEK",
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
    id: 52,
    name: "Charge controller",
    brand: "WAKATEK",
    image: "../images/wakatek_charge_controller.jpeg",
    capacity: "60A",
    price: 160000,
    warranty: "1yr",
    type: "MPPT with heat sink",
    quantity: 1,
  },
  {
    id: 53,
    name: "Charge controller",
    brand: "Blue carbon",
    image: "../images/wakatek_charge_controller.jpeg",
    capacity: "60A",
    price: 130000,
    warranty: "1yr",
    type: "MPPT with fan",
    quantity: 1,
  },
  {
    id: 54,
    name: "Charge controller",
    brand: "Blue carbon",
    image: "../images/contoller.jpg",
    capacity: "80A",
    price: 180000,
    warranty: "1yr",
    type: "MPPT with fan",
    quantity: 1,
  },
  {
    id: 55,
    name: "Charge controller",
    brand: "Blue carbon",
    image: "../images/controller.jpg",
    capacity: "100A",
    price: 190000,
    warranty: "1yr",
    type: "MPPT with fan",
    quantity: 1,
  },
  {
    id: 56,
    name: "Charge controller",
    brand: "WAKATEK",
    image: "../images/wakatek_charge_controller.jpeg",
    capacity: "120A",
    price: 200000,
    warranty: "1yr",
    type: "MPPT with fan",
    quantity: 1,
  },
];

const lights = [
  {
    id: 57,
    name: "all in street light",
    brand: "WAKATEK",
    image: "../images/street_light.jpeg",
    capacity: "60W",
    price: 165000,
    warranty: "1yr",
    type: "LED",
    quantity: 1,
  },
  {
    id: 58,
    name: "All in one street light",
    brand: "WAKATEK",
    image: "../images/street_light.jpeg",
    capacity: "100W",
    price: 235000,
    warranty: "1yr",
    type: "LED",
    quantity: 1,
  },
  {
    id: 59,
    name: "All in one street light",
    brand: "WAKATEK",
    image: "../images/street_light.jpeg",
    capacity: "160W",
    price: 325000,
    warranty: "1yr",
    type: "LED",
    quantity: 1,
  },
];
const Generator = [
  {
    id: 60,
    name: "Solar Generator",
    brand: "WAKATEK",
    image: "../images/wakatek_solar_generator.jpeg",
    capacity: "3.5kva",
    price: 1400000,
    warranty: "1yr",
    type: "Portable",
    quantity: 1,
  },
  {
    id: 61,
    name: "Solar Generator",
    brand: "SAKO",
    image: "../images/solar_generator.jpeg",
    capacity: "1.5kva",
    price: 1050000,
    warranty: "1yr",
    type: "Portable",
    quantity: 1,
  },
  {
    id: 62,
    name: "Solar Generator",
    brand: "SAKO",
    image: "../images/solar_generator.jpeg",
    capacity: "1.2kva",
    price: 750000,
    warranty: "1yr",
    type: "Portable",
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
            <input
              className="join-item btn checked:bg-[#705c53] checked:text-white checked:border-[#705c53]"
              type="radio"
              name="options"
              aria-label="Generators"
              value="generators"
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
                        src="../images/solar-system.jpeg"
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
                        src="../images/backup.jpeg"
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
                    {item.brand && (
                      <p className="text-sm font-semibold text-[#705c53] mb-1">
                        Brand: {item.brand}
                      </p>
                    )}
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
                    {item.brand === "SAKO" ? (
                      <StaticImage
                        className="w-full h-full object-contain"
                        src="../images/sako_inverter.jpeg"
                        alt="SAKO Inverter"
                      />
                    ) : item.brand === "WAKATEK" ? (
                      <StaticImage
                        className="w-full h-full object-contain"
                        src="../images/wakatek_inverter.jpeg"
                        alt="WAKATEK Inverter"
                      />
                    ) : item.type === "Hybrid" ? (
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
                    {item.brand && (
                      <p className="text-sm font-semibold text-[#705c53] mb-1">
                        Brand: {item.brand}
                      </p>
                    )}
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
                    {item.brand === "WAKATEK" ? (
                      <StaticImage
                        className="w-full h-full object-contain"
                        src="../images/wakatek_lithium_battery.jpeg"
                        alt="WAKATEK Lithium Battery"
                      />
                    ) : item.brand === "SAKO" ? (
                      <StaticImage
                        className="w-full h-full object-contain"
                        src="../images/sako_lithium_battery.jpeg"
                        alt="SAKO Lithium Battery"
                      />
                    ) : item.brand === "Blue carbon" ? (
                      <StaticImage
                        className="w-full h-full object-contain"
                        src="../images/lithium_battery.jpeg"
                        alt="Lithium-ion Battery"
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
                    {item.brand && (
                      <p className="text-sm font-semibold text-[#705c53] mb-1">
                        Brand: {item.brand}
                      </p>
                    )}
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
                    {item.brand === "WAKATEK" ? (
                      <StaticImage
                        className="w-full h-full object-contain"
                        src="../images/wakatek_charge_controller.jpeg"
                        alt="WAKATEK Charge Controller"
                      />
                    ) : (
                      <StaticImage
                        className="w-full h-full object-contain"
                        src="../images/controller.jpg"
                        alt="Charge Controller"
                      />
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {item.type}
                    </h3>
                    {item.brand && (
                      <p className="text-sm font-semibold text-[#705c53] mb-1">
                        Brand: {item.brand}
                      </p>
                    )}
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
                    {item.brand && (
                      <p className="text-sm font-semibold text-[#705c53] mb-1">
                        Brand: {item.brand}
                      </p>
                    )}
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

            {option === "generators" &&
              Generator.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden"
                >
                  <div className="h-48 p-4">
                    {item.capacity === "3.5kva" ? (
                      <StaticImage
                        className="w-full h-full object-contain"
                        src="../images/wakatek_solar_generator.jpeg"
                        alt="3.5KVA Solar Generator"
                      />
                    ) : (
                      <StaticImage
                        className="w-full h-full object-contain"
                        src="../images/solar_generator.jpeg"
                        alt="Portable Solar Generator"
                      />
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {item.type} Solar Generator
                    </h3>
                    {item.brand && (
                      <p className="text-sm font-semibold text-[#705c53] mb-1">
                        Brand: {item.brand}
                      </p>
                    )}
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
          </div>

          {/* Modals */}
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box max-w-4xl max-h-[90vh] overflow-y-auto">
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <div className="mb-6">
                <h3 className="font-bold text-3xl text-[#705c53] mb-2">
                  {selected?.name}
                </h3>
                <p className="text-lg text-gray-600 capitalize">
                  {selected?.type} • {selected?.wattage}
                </p>
              </div>

              {/* System Overview */}
              <div className="bg-gradient-to-r from-[#705c53] to-[#8b6f47] text-white p-6 rounded-xl mb-6">
                <h4 className="text-xl font-bold mb-4">System Overview</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold">{selected?.wattage}</p>
                    <p className="text-sm opacity-90">Power Rating</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold">
                      {selected?.battery_type}
                    </p>
                    <p className="text-sm opacity-90">Battery Type</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold">
                      {selected?.number_of_battery}
                    </p>
                    <p className="text-sm opacity-90">Batteries</p>
                  </div>
                  {selected?.type === "solar system" && (
                    <div className="text-center">
                      <p className="text-2xl font-bold">
                        {selected?.number_of_panel}
                      </p>
                      <p className="text-sm opacity-90">Solar Panels</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Component Details */}
              <div className="mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  Component Specifications
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Inverter */}
                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#705c53]">
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="font-semibold text-gray-800">Inverter</h5>
                      <span className="text-lg font-bold text-[#705c53]">
                        ₦{selected?.inverter?.toLocaleString()}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Rating: {selected?.inverter_rating}
                    </p>
                    <p className="text-sm text-gray-600">Quantity: 1 unit</p>
                  </div>

                  {/* Solar Panels */}
                  {selected?.type === "solar system" &&
                    selected?.number_of_panel > 0 && (
                      <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#705c53]">
                        <div className="flex justify-between items-start mb-2">
                          <h5 className="font-semibold text-gray-800">
                            Solar Panels
                          </h5>
                          <span className="text-lg font-bold text-[#705c53]">
                            ₦
                            {(
                              selected?.solar_panel * selected?.number_of_panel
                            )?.toLocaleString()}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">
                          Rating: {selected?.panel_rating}W each
                        </p>
                        <p className="text-sm text-gray-600">
                          Quantity: {selected?.number_of_panel} units
                        </p>
                        <p className="text-sm text-gray-600">
                          Unit Price: ₦{selected?.solar_panel?.toLocaleString()}
                        </p>
                      </div>
                    )}

                  {/* Battery */}
                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#705c53]">
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="font-semibold text-gray-800">Battery</h5>
                      <span className="text-lg font-bold text-[#705c53]">
                        ₦
                        {(
                          selected?.battery * selected?.number_of_battery
                        )?.toLocaleString()}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Type: {selected?.battery_type}
                    </p>
                    <p className="text-sm text-gray-600">
                      Rating: {selected?.battery_rating}
                    </p>
                    <p className="text-sm text-gray-600">
                      Quantity: {selected?.number_of_battery} units
                    </p>
                    <p className="text-sm text-gray-600">
                      Unit Price: ₦{selected?.battery?.toLocaleString()}
                    </p>
                  </div>

                  {/* Controller */}
                  {selected?.controller > 0 && (
                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#705c53]">
                      <div className="flex justify-between items-start mb-2">
                        <h5 className="font-semibold text-gray-800">
                          Charge Controller
                        </h5>
                        <span className="text-lg font-bold text-[#705c53]">
                          ₦{selected?.controller?.toLocaleString()}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Rating: {selected?.controller_rating}
                      </p>
                      <p className="text-sm text-gray-600">Quantity: 1 unit</p>
                    </div>
                  )}

                  {/* Installation Kit */}
                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#705c53]">
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="font-semibold text-gray-800">
                        Installation Kit
                      </h5>
                      <span className="text-lg font-bold text-[#705c53]">
                        ₦{selected?.installation_kit?.toLocaleString()}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Includes: Cables, breakers, fuses, mounting hardware
                    </p>
                  </div>

                  {/* Installation Service */}
                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#705c53]">
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="font-semibold text-gray-800">
                        Installation Service
                      </h5>
                      <span className="text-lg font-bold text-[#705c53]">
                        ₦{selected?.installation_cost?.toLocaleString()}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Professional installation and setup
                    </p>
                  </div>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="bg-white border-2 border-[#705c53] rounded-xl p-6 mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  Price Breakdown
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">
                      Inverter ({selected?.inverter_rating})
                    </span>
                    <span className="font-semibold">
                      ₦{selected?.inverter?.toLocaleString()}
                    </span>
                  </div>
                  {selected?.type === "solar system" &&
                    selected?.number_of_panel > 0 && (
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">
                          Solar Panels ({selected?.number_of_panel} ×{" "}
                          {selected?.panel_rating}W)
                        </span>
                        <span className="font-semibold">
                          ₦
                          {(
                            selected?.solar_panel * selected?.number_of_panel
                          )?.toLocaleString()}
                        </span>
                      </div>
                    )}
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">
                      Battery ({selected?.number_of_battery} ×{" "}
                      {selected?.battery_rating})
                    </span>
                    <span className="font-semibold">
                      ₦
                      {(
                        selected?.battery * selected?.number_of_battery
                      )?.toLocaleString()}
                    </span>
                  </div>
                  {selected?.controller > 0 && (
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">
                        Charge Controller ({selected?.controller_rating})
                      </span>
                      <span className="font-semibold">
                        ₦{selected?.controller?.toLocaleString()}
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Installation Kit</span>
                    <span className="font-semibold">
                      ₦{selected?.installation_kit?.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Installation Service</span>
                    <span className="font-semibold">
                      ₦{selected?.installation_cost?.toLocaleString()}
                    </span>
                  </div>
                  <div className="border-t-2 border-gray-200 pt-3 mt-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-gray-900">
                        Total Price
                      </span>
                      <span className="text-2xl font-bold text-[#705c53]">
                        ₦
                        {(
                          selected?.battery * selected?.number_of_battery +
                          selected?.solar_panel * selected?.number_of_panel +
                          selected?.inverter +
                          selected?.controller +
                          selected?.installation_kit +
                          selected?.installation_cost
                        )?.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="flex justify-center">
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
                  className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                    cart.some((cat) => cat.id === selected?.id)
                      ? "bg-green-600 text-white shadow-lg"
                      : "bg-[#705c53] text-white hover:bg-[#8b6f47] shadow-lg"
                  }`}
                >
                  {cart.some((cat) => cat.id === selected?.id)
                    ? "✓ Added to Cart"
                    : "Add to Cart"}
                </button>
              </div>
            </div>
          </dialog>

          <dialog id="my_modal_5" className="modal">
            <div className="modal-box max-w-2xl">
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>

              {/* Product Header */}
              <div className="mb-6">
                <h3 className="font-bold text-3xl text-[#705c53] mb-2">
                  {selected?.name || selected?.brandName}
                </h3>
                <p className="text-lg text-gray-600 capitalize">
                  {selected?.type}{" "}
                  {selected?.name?.includes("Panel")
                    ? "Panel"
                    : selected?.name?.includes("Inverter")
                      ? "Inverter"
                      : selected?.name?.includes("Battery")
                        ? "Battery"
                        : selected?.name?.includes("controller")
                          ? "Controller"
                          : selected?.name?.includes("light")
                            ? "Light"
                            : ""}
                </p>
              </div>

              {/* Product Overview */}
              <div className="bg-gradient-to-r from-[#705c53] to-[#8b6f47] text-white p-6 rounded-xl mb-6">
                <h4 className="text-xl font-bold mb-4">Product Overview</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold">{selected?.capacity}</p>
                    <p className="text-sm opacity-90">Capacity/Power</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold">
                      ₦{selected?.price?.toLocaleString()}
                    </p>
                    <p className="text-sm opacity-90">Price</p>
                  </div>
                </div>
              </div>

              {/* Detailed Specifications */}
              <div className="mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  Detailed Specifications
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#705c53]">
                    <h5 className="font-semibold text-gray-800 mb-2">
                      Capacity/Power
                    </h5>
                    <p className="text-lg font-bold text-[#705c53]">
                      {selected?.capacity}
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#705c53]">
                    <h5 className="font-semibold text-gray-800 mb-2">Type</h5>
                    <p className="text-lg font-bold text-gray-900">
                      {selected?.type}
                    </p>
                  </div>

                  {selected?.voltage && (
                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#705c53]">
                      <h5 className="font-semibold text-gray-800 mb-2">
                        Voltage
                      </h5>
                      <p className="text-lg font-bold text-gray-900">
                        {selected?.voltage}
                      </p>
                    </div>
                  )}

                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#705c53]">
                    <h5 className="font-semibold text-gray-800 mb-2">
                      Warranty
                    </h5>
                    <p className="text-lg font-bold text-gray-900">
                      {selected?.waranty || selected?.warranty}
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#705c53]">
                    <h5 className="font-semibold text-gray-800 mb-2">
                      Quantity
                    </h5>
                    <p className="text-lg font-bold text-gray-900">
                      {selected?.quantity || 1} unit(s)
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#705c53]">
                    <h5 className="font-semibold text-gray-800 mb-2">Price</h5>
                    <p className="text-lg font-bold text-[#705c53]">
                      ₦{selected?.price?.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>

              {/* Product Features */}
              <div className="mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  Key Features
                </h4>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <ul className="space-y-2 text-gray-700">
                    {selected?.name?.includes("Panel") && (
                      <>
                        <li className="flex items-center">
                          <span className="text-green-600 mr-2">✓</span>{" "}
                          High-efficiency mono-crystalline technology
                        </li>
                        <li className="flex items-center">
                          <span className="text-green-600 mr-2">✓</span>{" "}
                          Weather-resistant aluminum frame
                        </li>
                        <li className="flex items-center">
                          <span className="text-green-600 mr-2">✓</span> 25-year
                          performance warranty
                        </li>
                        <li className="flex items-center">
                          <span className="text-green-600 mr-2">✓</span>{" "}
                          Anti-reflective tempered glass
                        </li>
                      </>
                    )}
                    {selected?.name?.includes("Inverter") && (
                      <>
                        <li className="flex items-center">
                          <span className="text-green-600 mr-2">✓</span>{" "}
                          {selected?.type === "Hybrid"
                            ? "Built-in MPPT charge controller"
                            : "Pure sine wave output"}
                        </li>
                        <li className="flex items-center">
                          <span className="text-green-600 mr-2">✓</span>{" "}
                          Overload and short circuit protection
                        </li>
                        <li className="flex items-center">
                          <span className="text-green-600 mr-2">✓</span> LCD
                          display with system monitoring
                        </li>
                        <li className="flex items-center">
                          <span className="text-green-600 mr-2">✓</span> High
                          conversion efficiency ({">"}90%)
                        </li>
                      </>
                    )}
                    {selected?.name?.includes("Battery") && (
                      <>
                        <li className="flex items-center">
                          <span className="text-green-600 mr-2">✓</span>{" "}
                          {selected?.type?.includes("Lithium")
                            ? "Long cycle life (>6000 cycles)"
                            : "Deep cycle design"}
                        </li>
                        <li className="flex items-center">
                          <span className="text-green-600 mr-2">✓</span>{" "}
                          {selected?.type?.includes("Lithium")
                            ? "Built-in BMS protection"
                            : "Maintenance-free operation"}
                        </li>
                        <li className="flex items-center">
                          <span className="text-green-600 mr-2">✓</span> Wide
                          operating temperature range
                        </li>
                        <li className="flex items-center">
                          <span className="text-green-600 mr-2">✓</span> High
                          energy density
                        </li>
                      </>
                    )}
                    {selected?.name?.includes("controller") && (
                      <>
                        <li className="flex items-center">
                          <span className="text-green-600 mr-2">✓</span> Maximum
                          Power Point Tracking (MPPT)
                        </li>
                        <li className="flex items-center">
                          <span className="text-green-600 mr-2">✓</span>{" "}
                          Multiple load control modes
                        </li>
                        <li className="flex items-center">
                          <span className="text-green-600 mr-2">✓</span> LCD
                          display with real-time data
                        </li>
                        <li className="flex items-center">
                          <span className="text-green-600 mr-2">✓</span>{" "}
                          Comprehensive electronic protections
                        </li>
                      </>
                    )}
                    {selected?.name?.includes("light") && (
                      <>
                        <li className="flex items-center">
                          <span className="text-green-600 mr-2">✓</span>{" "}
                          All-in-one integrated design
                        </li>
                        <li className="flex items-center">
                          <span className="text-green-600 mr-2">✓</span> Motion
                          sensor and remote control
                        </li>
                        <li className="flex items-center">
                          <span className="text-green-600 mr-2">✓</span> IP65
                          waterproof rating
                        </li>
                        <li className="flex items-center">
                          <span className="text-green-600 mr-2">✓</span> Auto
                          on/off with dusk-to-dawn operation
                        </li>
                      </>
                    )}
                    {selected?.name?.includes("Generator") && (
                      <>
                        <li className="flex items-center">
                          <span className="text-green-600 mr-2">✓</span>{" "}
                          Portable all-in-one design
                        </li>
                        <li className="flex items-center">
                          <span className="text-green-600 mr-2">✓</span>{" "}
                          Built-in solar panels and battery storage
                        </li>
                        <li className="flex items-center">
                          <span className="text-green-600 mr-2">✓</span>{" "}
                          Multiple output ports (AC/DC/USB)
                        </li>
                        <li className="flex items-center">
                          <span className="text-green-600 mr-2">✓</span> LCD
                          display with power monitoring
                        </li>
                        <li className="flex items-center">
                          <span className="text-green-600 mr-2">✓</span> Silent
                          operation with no fuel required
                        </li>
                        <li className="flex items-center">
                          <span className="text-green-600 mr-2">✓</span> Ideal
                          for camping, emergencies, and off-grid use
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="flex justify-center">
                <button
                  onClick={() =>
                    addToCart({ ...selected, price: selected?.price })
                  }
                  className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                    cart.some((cat) => cat.id === selected?.id)
                      ? "bg-green-600 text-white shadow-lg"
                      : "bg-[#705c53] text-white hover:bg-[#8b6f47] shadow-lg"
                  }`}
                >
                  {cart.some((cat) => cat.id === selected?.id)
                    ? "✓ Added to Cart"
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
    <meta
      name="keywords"
      content="solar products Nigeria, solar panels, inverters, batteries, backup systems, solar energy systems, renewable energy, AntonAxel products, solar installation Nigeria"
    />
    <meta name="author" content="AntonAxel Nigeria Company Limited" />
    <meta
      property="og:title"
      content="AntonAxel Solar Products | High-Efficiency Renewable Energy Solutions"
    />
    <meta
      property="og:description"
      content="Comprehensive range of solar energy products including complete systems, panels, inverters, batteries, and LED lights. Quality renewable energy solutions for Nigeria."
    />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://antonaxel.com/products" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:title"
      content="AntonAxel Solar Products | High-Efficiency Renewable Energy Solutions"
    />
    <meta
      name="twitter:description"
      content="Comprehensive range of solar energy products including complete systems, panels, inverters, batteries, and LED lights."
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="canonical" href="https://antonaxel.com/products" />
  </>
);
