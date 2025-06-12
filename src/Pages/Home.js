import React from 'react'
import Navbar from '../Components/Navbar'

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <h1>Welcome to IdeaBliss</h1>
                <p>Your one-stop solution for managing and sharing ideas.</p>
            </div>
        </div>
    )
}

export default Home;