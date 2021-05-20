import React, { useState } from 'react';
import { Grid, Menu, Image, Dropdown } from 'semantic-ui-react';
import Link from '../Link'

const MobileMenu = ({items}) => {
    const [activeItem, setActiveItem] = useState(null);
    const handleItemClick = (e, { name }) => setActiveItem(name)

    const renderedMenuList = items.map(item => {
        return (
            <Link href={item.url} key={item.name}>
                <Dropdown.Item
                    key={item.name}
                    name={item.name}
                    active={activeItem === `${item.name}`}
                    onClick={handleItemClick}
                    style={{backgroundColor: 'black'}}
                    
                >
                    {item.text}
                </Dropdown.Item>
            </Link>
        )
    })

    return (
        <Grid.Row columns={'2'} only={'mobile'}>
            <Grid.Column 
                width={'3'} 
                style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignContent: 'center'
                        }}>
                <Image src='/md_logo.png' rounded/>
            </Grid.Column>
            <Grid.Column width={'13'}>
                <Menu borderless inverted >
                    <Dropdown item icon={'bars'}>
                        <Dropdown.Menu>
                            {renderedMenuList}
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu>
            </Grid.Column>
        </Grid.Row>
    )
}

export default MobileMenu;