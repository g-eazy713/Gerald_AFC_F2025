import React from "react";
import MenuTable from "../Components/MenuTable";
import cheese from "../assets/images/cheese.jpeg";
import pepperoni from "../assets/images/pepperoni.jpeg";
import meatlover from "../assets/images/meatlover.jpeg";
import meatball from "../assets/images/meatball.jpeg";
import calzone from "../assets/images/calzone.jpeg";

const menuItems = [
    { image: cheese, name: "Cheese Pizza", description: "Traditional Cheese Pizza", price: 12.99 },
    { image: pepperoni, name: "Pepperoni Pizza", description: "Traditional Pepperoni Pizza Spicy and Delicious", price: 14.99 },
    { image: meatlover, name: "Meat Lover's Pizza", description: "Pizza Loaded with Meats", price: 16.99 },
    { image: meatball, name: "Meatball Sub", description: "Italian-Style Meatballs Smothered in Marinara and Mozzarella Cheese on a Toasted Sub Roll.", price: 9.99 },
    { image: calzone, name: "Calzone", description: "A Folded Pizza Pocket Stuffed with Ricotta, Mozzarella, and Your Choice of Topping", price: 10.99 },
];

const MenuPage = () => {
    return <MenuTable menuItems={menuItems} />;
};
export default MenuPage;
