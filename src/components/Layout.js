import React from 'react'
import Navbar from './Navbar'
import '../styles/global.css'
export default function Layout({ children }) { // children represents anything nested within layout 
    return (
        <div className="layout">
            <Navbar />
            <div className="content">
                {children}
            </div>
            <footer>
                <p>Copyright 2021 Tanvi Wagle</p>
            </footer>
        </div>
    )
}
