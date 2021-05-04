import React from 'react';
import { Grid } from 'semantic-ui-react'; 
import MenuComputer from './navigation_bar/MenuComputer';
import MenuMobile from './navigation_bar/MenuMobile';

const Navbar = () => {
    const list = [
        {key: 1, text: 'About me', name: 'about me'},
        {key: 2, text: 'Portfolio', name: 'portofolio'},
        {key: 3, text: 'Contact', name: 'contact'},
    ]

    const logo = '/logo192.png';

    const GridBar = ({ only, children }) => {
        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column only={only}>
                        {children}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }

    return (
        <div>
            <GridBar only='computer tablet'>
                <MenuComputer listMenu={list} logo={logo} />
            </GridBar>
            <GridBar only='mobile'>
                <MenuMobile>

                </MenuMobile>
            </GridBar>
        </div>
    )
}

export default Navbar;