import React from 'react';
import '../styles/App.css';
import NavbarComputer from './NavbarComputer';
import Header from './Header';
import Footer from './Footer';
import AboutPage from './About/AboutPage';
import PortoPage from './Portofolio/PortoPage';
import WorkPage from './Work/WorkPage';
import EducationPage from './Education/EducationPage';


const App = () => {
    return (
        <div>
            <NavbarComputer/>
            <Header/>
                <AboutPage/>
                {/* <PortoPage/> */}
                {/* <WorkPage/> */}
                {/* <EducationPage/> */} 
            <Footer/>
        </div>
    )
}

export default App;