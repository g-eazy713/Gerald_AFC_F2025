import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import pizzaBros from "../assets/images/pizza man.jpeg";

const SplashPage = () => {
    return (
        <div
            className="splash-page d-flex flex-column justify-content-center align-items-center text-center"
            style={{
                minHeight: "100vh",
                background: "linear-gradient(to bottom, #ffecd2, #fcb69f)",
                padding: "2rem"
            }}
        >
            <h1 className="display-4 fw-bold mb-4" style={{ color: "#8B0000", textShadow: "2px 2px #ffe" }}>
                Welcome to Pizza Bros
            </h1>

            <div className="mb-4">
                <img
                    src={pizzaBros}
                    alt="Chef preparing fresh pizzas in the kitchen"
                    className="img-fluid rounded-5 shadow-lg"
                    style={{ maxWidth: "600px", border: "5px solid #fff" }}
                />
            </div>

            <p className="lead mb-4 px-3 px-md-5" style={{ maxWidth: "700px", color: "#5a2d0c" }}>
                At our pizzeria, we craft perfect pizzas with fresh, high-quality ingredients, signature sauces, and a golden, crispy crust. Enjoy a cozy dine-in experience or order online to savor the best pizza in town!
            </p>
            <a
                href="/menu"
                className="btn btn-danger btn-lg shadow-sm"
                style={{ borderRadius: "50px", padding: "0.75rem 2rem" }}
            >
                Order Now
            </a>
        </div>
    );
};

export default SplashPage;
