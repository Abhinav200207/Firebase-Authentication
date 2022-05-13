import React from "react"
import { Navigate } from "react-router-dom"
import { useAuth } from "../../AuthContext"
import Dashboard from "./Dashboard"

export default function PrivateRouteDashboard() {
    const { currentUser } = useAuth()

    return (currentUser ? <Dashboard /> : <Navigate to="/login" />)
}
