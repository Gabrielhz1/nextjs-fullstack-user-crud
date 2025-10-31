'use client'
import { InputHTMLAttributes } from "react";
import { Usuario } from "../core/model/Usuario";

export interface InputTextoProps extends InputHTMLAttributes<HTMLInputElement> {
    label:string
    
    
}


export default function InputTexto(props:InputTextoProps) {
    return (
        <div className="flex flex-col gap-1" >
            <label >{props.label}</label>
            <input className="bg-zinc-500 px-4 py-2 rounded-md text-black outline-none" {...props}/>
        </div>
    )
}