import React from 'react';
import '../styles/App.css';
import NavbarComputer from './NavbarComputer';
import Header from './Header';
import Footer from './Footer';
import AboutPage from './About/AboutPage';


const App = () => {
    return (
        <div>
            <NavbarComputer/>
            <Header/>
                <AboutPage/>
            <Footer/>
        </div>
    )
}

export default App;