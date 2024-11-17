"use client";
import React from "react";
import "./inputStyles.scss";
interface IInputSearchProps{
    name:string,
    type:string,
    value:string,
    placeholder?:string,
    onChange: (e:React.ChangeEvent<HTMLInputElement>) =>void
}

export default function Input({
    name,
    type,
    value,
    onChange,
    placeholder
}:IInputSearchProps):React.ReactNode{
    return (
        <input 
            type={type} 
            name={name} 
            value={value} 
            onChange={onChange} 
            id={`name-${name}`} 
            placeholder={placeholder}
        />
    )
}