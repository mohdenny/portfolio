import React, { useState } from 'react';
import { Grid, Menu, Image } from 'semantic-ui-react';
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
            <Menu.Item
                key={item.name}
                name={item.name}
                active={activeItem === `${item.name}`}
                onClick={handleItemClick}
            >
                <Link href={item.url}>
                    {item.text}
                </Link>
            </Menu.Item>
        )
    })

    return (
        <Grid>
            <Grid.Row columns={1}>
                <Grid.Column mobile={16} computer={16}>
                    <Menu borderless inverted style={{padding: '3px 20px'}}>
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