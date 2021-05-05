import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import SidebarMenu from './components/navbar/SidebarMenu';
import HeaderMain from './components/header/HeaderMain';

const App = () => {
    return (
        <div>
            <SidebarMenu>
                <HeaderMain/>
            </SidebarMenu>
        </div>
    )
}

export default App;