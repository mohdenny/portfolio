import React, { useState } from 'react';
import { 
    Container, 
    Menu
} from 'semantic-ui-react';

const MenuComputer = ({ listMenu, logo }) => {
    const [activeItem, setActiveItem] = useState();
    const handleItemClick = (e, { name }) => setActiveItem(name);

    const renderedMenuComputer = listMenu.map(list => {
        return (
            <Menu.Item
                key={list.key}
                name={list.name}
                active={activeItem === `${list.name}`}
                onClick={handleItemClick}
                >
                {list.text}
            </Menu.Item>
        )
    })

    return (
        <div>
            <Menu stackable borderless>
                <Container>
                    <Menu.Item>
                        <img src={logo} size={'mini'}/>
                    </Menu.Item>

                    <Menu.Menu position='right'>
                        {renderedMenuComputer}
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}

export default MenuComputer;