import React, { useState } from 'react';
import { Menu, Image, Segment } from 'semantic-ui-react';

const NavbarComputer = () => {
    const items = [
        {name:'portfolio', text:'Portfolio'},
        {name:'contact', text:'Contact'},
        {name:'aboutMe', text:'About me'}
    ];

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
        <Menu as={Segment} borderless inverted>
            <Menu.Item>
                <Image src='/logo192.png' size={'mini'} wrapped />
            </Menu.Item>
            {renderedMenuList}
        </Menu>
    )
}

export default NavbarComputer;