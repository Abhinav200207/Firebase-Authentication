import React from "react"
import { Navigate } from "react-router-dom"
import { useAuth } from "../../AuthContext"
import Profile from "./Profile"

export default function PrivateRouteProfile() {
    const { currentUser } = useAuth()

    return (currentUser ? <Profile /> : <Navigate to="/login" />)
}
