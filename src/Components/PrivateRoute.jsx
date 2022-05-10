import React from "react"
import { Route, Navigate } from "react-router-dom"
import { useAuth } from "../AuthContext"
import Dashboard from "./Dashboard"

export default function PrivateRoute() {
    const { currentUser } = useAuth()

    return (currentUser ? <Dashboard /> : <Navigate to="/login" />)
}
