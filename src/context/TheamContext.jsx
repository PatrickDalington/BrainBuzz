"use client"
import { createContext, useEffect, useState } from "react";




const getFromLocalStorage = () =>{

    if (typeof window !== "undefined")
    {
        const value = localStorage.getItem("theme");
        return  value || "light";
    }
    
}


export const TheamContext = createContext()

export const TheamContextProvider = ({children}) =>{

    const [theam, setTheam] = useState(() => {
        return getFromLocalStorage()
    
    });

    const toggle = () => {
        setTheam(theam === "light" ? "dark" : "light")
    }
    
    useEffect(() => {
        localStorage.setItem("theme", theam);
    }
    , [theam])

    
    return <TheamContext.Provider value={{theam, toggle}}>{children}</TheamContext.Provider>
}