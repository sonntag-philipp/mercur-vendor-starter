import { ReactNode, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAdminGetSession } from 'medusa-react'

import Spinner from '../atoms/spinner'

type PrivateRouteProps = {
  children: ReactNode
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { user, isLoading } = useAdminGetSession()
  const navigate = useNavigate()

  useEffect(() => {
    if (!user && !isLoading) {
      navigate('/login')
    }
  }, [user, isLoading, navigate])

  if (user && !isLoading) {
    return <>{children}</>
  }

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <Spinner variant="secondary" />
    </div>
  )
}

export default PrivateRoute
