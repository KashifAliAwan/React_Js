import React from "react";

export default function Card({ title, description, ImageUrl }) {
    return (
        <>
            <div style={{ border: "1px solid gray", padding: "10px", width: "200px" }}>
                <img src={ImageUrl} alt={title} width="100%" />
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </>
    )
}