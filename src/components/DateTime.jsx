import { useState, useEffect } from 'react'

const DateTime = () => {
  const [dateTime, setDateTime] = useState('')

  useEffect(() => {
    const format = () => {
      const now = new Date()
      const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

      const day = days[now.getDay()]
      const month = months[now.getMonth()]
      const date = now.getDate()
      let hours = now.getHours()
      const minutes = String(now.getMinutes()).padStart(2, '0')
      const ampm = hours >= 12 ? 'pm' : 'am'
      hours = hours % 12 || 12

      setDateTime(`${day} ${month} ${date} ${hours}:${minutes} ${ampm}`)
    }

    format()
    const interval = setInterval(format, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="date-time">{dateTime}</div>
  )
}

export default DateTime