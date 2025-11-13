import React from "react";

export default function Person({ name, age, city }) {
    return (
        <>
            <div>
                <h3>My name is {name}. I am {age} years old and I live in {city}.</h3>
            </div>

        </>
    )
}

