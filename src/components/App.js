import React from 'react';
import '../styles/App.css';
import 'semantic-ui-css/semantic.min.css';
import NavbarComputer from './NavbarComputer';
import Header from './Header';
import Footer from './Footer';
import AboutPage from './About/AboutPage';
import PortoPage from './Portofolio/PortoPage';
import WorkPage from './Work/WorkPage';
import EducationPage from './Education/EducationPage';
import ContactPage from './Contact/ContactPage';
import Route from './Route';

const App = () => {
    return (
        <div>
            <NavbarComputer/>
            <Header/>
                <Route path="/">
                    <AboutPage/>
                </Route>
                <Route path="/portofolio">
                    <PortoPage/>
                </Route>
                <Route path="/work">
                    <WorkPage/>
                </Route>
                <Route path="/education">
                    <EducationPage/>
                </Route>
                <Route path="/contact">
                    <ContactPage/>
                </Route>
            <Footer/>
        </div>
    )
}

export default App;