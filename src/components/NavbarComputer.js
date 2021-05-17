import React, { useState } from 'react';
import { Grid, Menu, Image, Segment } from 'semantic-ui-react';
import Link from './Link';

const items = [
    {name:'aboutMe', text:'About me', url: '/'},
    {name:'portfolio', text:'Portfolio', url: '/portofolio'},
    {name:'work', text:'Work', url: '/work'},
    {name:'education', text:'Education', url: '/education'},
    {name:'contact', text:'Contact', url: '/contact'}
];

const NavbarComputer = () => {
    const [activeItem, setActiveItem] = useState(null);
    const handleItemClick = (e, { name }) => setActiveItem(name)
    const renderedMenuList = items.map(item => {
        return (
            <Link href={item.url}>
                <Menu.Item
                    key={item.name}
                    name={item.name}
                    active={activeItem === `${item.name}`}
                    onClick={handleItemClick}
                >
                    {item.text}
                </Menu.Item>
            </Link>
        )
    })

    return (
        <Grid>
            <Grid.Row columns={1}>
                <Grid.Column mobile={16} computer={16}>
                    <Menu borderless inverted style={{padding: '0 20px'}}>
                        <Menu.Item>
                            <Image src='/md_logo.png' size={'mini'} wrapped />
                        </Menu.Item>
                        {renderedMenuList}
                    </Menu>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default NavbarComputer;