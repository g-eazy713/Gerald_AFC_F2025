import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { useState } from "react";
import pizzaBros from "../assets/images/pizza man.jpeg";

const SplashPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="splash-page">
            {/* Generic Title */}
            <h1 className="text-center my-4">
                Welcome to Pizza Bros
            </h1>
            {/* Main Image */}
            <div className="text-center mb-4">
                <img
                    src={pizzaBros}
                    alt="Chef preparing fresh pizzas in the kitchen"
                    className="img-fluid rounded-4"
                    style={{ maxWidth: "600px" }}
                />
            </div>
            <p className="text-center mx-3">
                At our pizzeria, we craft perfect pizzas with fresh ingredients, signature sauces, and a golden, crispy crust.
                Enjoy a cozy dine-in experience or order online to savor the best pizza in town!
            </p>
        </div>
    );
};

export default SplashPage;
