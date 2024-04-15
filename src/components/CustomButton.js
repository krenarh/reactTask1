import React from "react";

export default function CustomButton({title, onSelect}){
    return(
    <button onClick={onSelect}>{title}</button>
        )
}