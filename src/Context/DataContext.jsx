import { createContext, useState, useEffect } from "react";

export const dataContext = createContext()

const DataProvider = ({children}) => {

    let [data, setData] = useState()

    useEffect(() => {

        fetch('http://localhost:3000/data')
        .then(res => res.json())
        .then(result => setData(result))
    }, [])


    return (
        <dataContext.Provider value={data}>
            {children}
        </dataContext.Provider>
    )
}

export default DataProvider