import { useContext } from "react";
import {BtnPlusClickedContext } from "../Contexts/BtnPlusClickedContext";

export function  BtnPlusClickedHook (){
    const context = useContext (BtnPlusClickedContext)
    if (context === undefined)
    throw   new Error ('Não está dentro do contexto')

     return context
}