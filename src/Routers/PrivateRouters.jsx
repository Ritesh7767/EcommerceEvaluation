import { useContext } from "react"
import { isAuth } from "../Context/AuthContext"
import { Navigate } from "react-router-dom"

export default function PrivateRouters({children}){

    let {auth} = useContext(isAuth)
    console.log(auth)

    return (
        auth ? children : <Navigate to={'/login'}/>
    )
}