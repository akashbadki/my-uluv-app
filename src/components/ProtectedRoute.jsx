'use client'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.user)
  const router = useRouter()

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login')
    }
  }, [isAuthenticated])

  return isAuthenticated ? children : null
}

export default ProtectedRoute
