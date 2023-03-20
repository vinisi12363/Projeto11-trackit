import { useContext } from "react";
import {BtnPlusClickContext } from "../Contexts/BtnPlusClickContext";

export function  BtnPlusClickedHook (){
    const context = useContext (BtnPlusClickContext)

    if (context === undefined)
    throw   new Error ('Não está dentro do contexto')

     return context
}