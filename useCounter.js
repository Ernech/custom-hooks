import { useState } from "react"


export const useCounter = (initialValue = 10) =>{

    const [counter, setCounter] = useState(initialValue)

    const incrementar = (value=1)=>{
        setCounter((current)=>current+value)
    }

    const reducir = (value=1) =>{
        setCounter((current)=>current-value)
    }

    const reiniciar = () =>{
        setCounter(initialValue)
    }

    return{counter,incrementar,reducir,reiniciar}
}