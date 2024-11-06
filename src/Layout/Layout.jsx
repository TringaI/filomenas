import React from 'react'
import Navigation from './Navigation/Navigation'
import Footer from './Footer/Footer'
function Layout(props) {
  return (
    <div className="w-full">
        <Navigation/>
        {props.children}
        <Footer/>
    </div>
  )
}

export default Layout