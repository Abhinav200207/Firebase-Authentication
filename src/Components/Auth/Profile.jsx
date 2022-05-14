import React, { useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../../AuthContext"
import { useNavigate,Link } from "react-router-dom"
import CenterContainer from "./CenterContainer"

export default function Profile() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  // console.log(currentUser)
  const navigate = useNavigate()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      navigate("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <CenterContainer>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <Link to="/" className="btn btn-primary w-100 mt-3">
            Dashboard
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </CenterContainer>
  )
}
