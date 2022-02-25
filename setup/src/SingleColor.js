import React, { useState, useEffect } from 'react'

const SingleColor = ({ rgb, weight, index, hex }) => {

  const [alert, setAlert] = useState(false)

  const bcg = rgb.join(",")

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 1500)

    return () => clearTimeout(timeout)
  }, [alert])

  const handleClick = (e) => {
    setAlert(true)
    navigator.clipboard.writeText(hex)
  }

  return (
    <article
      className={`color ${index > 10 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={handleClick}
    >
      <p className="precent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
      {alert && <p className='alert'>copied to clipboard!</p>}
    </article>
  )
}

export default SingleColor;
