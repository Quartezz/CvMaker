import React, {Component, useState} from "react";

export default function PersonalInfo(
    {
        FirstName,
        LastName,
        Address,
        Email,
        Description,
        Title,
        PhoneNumber,
    }
) {
    return (
        <>
        <div id="personal-info">
            <input type="text" placeholder="First Name" onChange={FirstName} />
            <input type="text" placeholder="Last Name" onChange={LastName} />
            <input type="text" placeholder="Title" onChange={Title} />
            <input type="text" placeholder="Adress" onChange={Address} />
            <input type="text" placeholder="Phone Number" onChange={PhoneNumber} />
            <input type="text" placeholder="Email" onChange={Email} />
            <textarea placeholder="Description" className="description" onChange={Description}></textarea>
        </div>
        </>
    )
}