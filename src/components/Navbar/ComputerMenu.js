import React, { useState } from 'react';
import { Grid, Menu, Image } from 'semantic-ui-react';
import Link from '../Link'

const ComputerMenu = ({items}) => {
    const [activeItem, setActiveItem] = useState(null);
    const handleItemClick = (e, { name }) => setActiveItem(name)

    const renderedMenuList = items.map(item => {
        return (
            <Link href={item.url} key={item.name}>
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
        <Grid.Row columns={'2'} only={'computer tablet'}>
            <Grid.Column 
                width={'1'} 
                style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignContent: 'center'
                        }}>
                <Image src='/md_logo.png'/>
            </Grid.Column>
            <Grid.Column width={'15'} >
                <Menu borderless inverted>
                    {renderedMenuList}
                </Menu>
            </Grid.Column>
        </Grid.Row>
    )
}

export default ComputerMenu;