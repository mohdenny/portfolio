import React, { useState } from 'react';
import { Container, Grid, Menu, Dropdown } from 'semantic-ui-react';

const menuConfig = [
    {key: 1, text: 'About me', name: 'about me'},
    {key: 2, text: 'Portfolio', name: 'portofolio'},
    {key: 3, text: 'Contact', name: 'contact'},
]

const PortoHeader = () => {
    const [activeItem, setActiveItem] = useState();
    const handleItemClick = (e, { name }) => setActiveItem(name);

    const renderedMenuComputerTable = menuConfig.map(menu => {
        return (
            <Menu.Item
                key={menu.key}
                name={menu.name}
                active={activeItem === `${menu.name}`}
                onClick={handleItemClick}
                >
                {menu.text}
            </Menu.Item>
        )
    }) 

    const renderedDropdown = menuConfig.map(menu => {
        return (
            <Dropdown.Item 
                key={menu.key}
                text={menu.text} 
                active={activeItem === `${menu.name}`}
                onClick={handleItemClick}
            />
        )
    }) 

    const renderedLogo = () => {
        return <img src='/logo192.png' size={'mini'}/>;
    }

    return (
        <div>
            <Grid>
                <Grid.Row only='mobile'>
                    <Grid.Column>
                        <Menu stackable>
                            <Menu.Item>
                                {renderedLogo()}
                                    <Dropdown text='Menu'>
                                        <Dropdown.Menu>
                                            {renderedDropdown}
                                        </Dropdown.Menu>
                                    </Dropdown>
                            </Menu.Item>
                        </Menu>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row only='computer tablet'>
                    <Grid.Column>
                        <Menu stackable>
                            <Container>
                                <Menu.Item>
                                    {renderedLogo()}
                                </Menu.Item>
                                <Menu.Menu position='right'>
                                    {renderedMenuComputerTable}
                                </Menu.Menu> 
                            </Container>
                        </Menu>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}

export default PortoHeader;