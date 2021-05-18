import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import ComputerMenu from './ComputerMenu';

const items = [
    {name:'aboutMe', text:'About me', url: '/'},
    {name:'portfolio', text:'Portfolio', url: '/portofolio'},
    {name:'work', text:'Work', url: '/work'},
    {name:'education', text:'Education', url: '/education'},
    {name:'contact', text:'Contact', url: '/contact'}
];

const Navbar = () => {
    return (
        <Segment inverted vertical size={'mini'}>
            <Grid container >
                <ComputerMenu items={items} />
            </Grid>
        </Segment>
    )
}

export default Navbar;