import { createContext, useState } from "react";

export const isAuth = createContext(false)

export default function AuthProvider({children}){

    let [auth, setAuth] = useState(false)

    return (
        <isAuth.Provider value={{auth, setAuth}} >
            {children}
        </isAuth.Provider>
    )
}