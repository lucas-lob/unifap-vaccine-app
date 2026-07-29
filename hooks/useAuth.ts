import { useState } from "react"
import { USERS_MOCK } from "@/sdk/mocks/user.mock"

type STATUS_CODE = 'NOT_FOUND' | 'SUCESS'

export function useAuth() {
  const [loading, setLoading] = useState<boolean>(false)

  const checkAuth = async (email: string, password: string) => {
    setLoading(true)

    // Requisition simulation
    await new Promise((resolve) => setTimeout(() => resolve(true), 1000))

    const foundUser = USERS_MOCK.find(user =>
      user.email === email &&
      user.password === password
    )

    let status: STATUS_CODE = foundUser ? 'SUCESS' : 'NOT_FOUND'

    setLoading(false)

    return status
  }

  return {
    loading,
    checkAuth
  }
}