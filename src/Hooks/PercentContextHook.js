import {PercentContext } from "../Contexts/PercentContext";
import { useContext } from "react";

export function  PercentContextHook (){
    const context = useContext (PercentContext)

    if (context === undefined)
    throw   new Error ('Não está dentro do contexto')

     return context
}