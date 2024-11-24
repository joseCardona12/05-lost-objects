"use client";
import React from "react";
import "./inputStyles.scss";
interface IInputSearchProps extends React.InputHTMLAttributes<HTMLInputElement>{
    error?:string,
    name?:string,
    type?:string,
    value:string,
    placeholder?:string,
    onChange: (e:React.ChangeEvent<HTMLInputElement>) =>void,
    className?:string
}

export default function Input({
    error,
    name,
    type,
    value,
    onChange,
    placeholder,
    className,
    ...props
}:IInputSearchProps):React.ReactNode{
    return (
        <div className={`content-input ${className}`}>
            <input 
                type={type} 
                name={name} 
                value={value} 
                onChange={onChange} 
                id={`name-${name}`} 
                placeholder={placeholder}
                {...props}
            />
            {error && <span className="error">{error}</span>}
        </div>
    )
}