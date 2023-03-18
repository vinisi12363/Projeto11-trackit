import { useContext } from "react";
import {FormCardContext } from "../Contexts/FormCardContext";

export function  FormCardHook (){
    const context = useContext (FormCardContext)

    if (context === undefined)
    throw   new Error ('Não está dentro do contexto')

     return context
}