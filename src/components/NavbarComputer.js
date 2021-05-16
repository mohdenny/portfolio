import React, { useState } from 'react';
import { Grid, Menu, Image } from 'semantic-ui-react';

const items = [
    {name:'aboutMe', text:'About me'},
    {name:'portfolio', text:'Portfolio'},
    {name:'work', text:'Work'},
    {name:'education', text:'Education'},
    {name:'contact', text:'Contact'}
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
                {item.text}
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