import React from "react";

export default function ProductCard({ name, price, inStock }) {
    return (
        <div>
            <h3>{name}</h3>
            <p>Price: {price} PKR</p>
            <p style={{ color: inStock ? "green" : "red" }}>
                {inStock ? "Available" : "Out of Stock"}
            </p>
        </div>
    );
}
