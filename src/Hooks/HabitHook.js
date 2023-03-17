import { useContext } from "react";
import { HabitContext } from "../Contexts/HabitContext";

export function  HabitHook (){
    const context = useContext(HabitContext)

    if (context === undefined)
    throw   new Error ('Não está dentro do contexto')

     return context
}