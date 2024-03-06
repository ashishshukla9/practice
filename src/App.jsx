import React from 'react'
import Navbar from './Componets/Navbar/Navbar'
import Hero from './Componets/Hero/Hero'
import Program from './Componets/Programs/Program'

const App = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <div className="container">
                <Program />
            </div>

        </div>
    )
}

export default App