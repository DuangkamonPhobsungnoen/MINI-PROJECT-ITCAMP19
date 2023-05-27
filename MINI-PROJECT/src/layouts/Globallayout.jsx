import React from 'react'
import MyNavbar from '../components/MyNavbar'

const Globallayout = ({ children }) => {
  return (
    <div>
      <MyNavbar />{children}
    </div>
  )
}

export default Globallayout
