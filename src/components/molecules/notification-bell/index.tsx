import React from 'react'

import Button, { ButtonProps } from '../../fundamentals/button'
import BellIcon from '../../fundamentals/icons/bell-icon'
import BellNotiIcon from '../../fundamentals/icons/bell-noti-icon'

type NotificationBellProps = ButtonProps & {
  hasNotifications?: boolean
}

const NotificationBell: React.FC<NotificationBellProps> = ({
  hasNotifications = false,
  ...attributes
}) => {
  return (
    <Button className="h-8 w-8" size="small" {...attributes}>
      {hasNotifications ? <BellNotiIcon /> : <BellIcon />}
    </Button>
  )
}

export default NotificationBell
