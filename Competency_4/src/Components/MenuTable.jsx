import React from "react";
import {Table} from "reactstrap";

const MenuTable = ({menuItems}) => {
    return (
        <div className="menu-container">
            <h1>
                <i className="fa-solid fa-pizza-slice"></i> Menu Items{" "}
                <i className="fa-solid fa-pizza-slice"></i>
            </h1>

            <Table striped bordered hover responsive>
                <thead>
                <tr>
                    <th>Image</th>
                    <th>Item Name</th>
                    <th>Description</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                {menuItems.map((item, index) => (
                    <tr key={index}>
                        <td>
                            <img
                                src={item.image}
                                alt={item.name}
                                style={{width: "100px", height: "auto"}}
                                className="img-fluid rounded-4"
                            />
                        </td>
                        <td>{item.name}</td>
                        <td>{item.description}</td>
                        <td>${item.price.toFixed(2)}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
    );
};

export default MenuTable;