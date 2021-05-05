import React from 'react';
import {
    Button,
    Grid,
    Icon,
    Menu,
    Segment,
    Sidebar,
  } from 'semantic-ui-react'
  
const SidebarMenu = ({ children }) => {
    const [visible, setVisible] = React.useState(false)

    return (
        <Grid columns={1} inverted>
            <Grid.Column>
                <Button
                    onClick={() => {
                        setVisible(true)
                    }}
                >
                    Slide Along
                </Button>
            </Grid.Column>

        <Grid.Column>
            <Sidebar.Pushable as={Segment}>
            <Sidebar
                as={Menu}
                animation='scale down'
                icon='labeled'
                inverted
                onHide={() => setVisible(false)}
                vertical
                visible={visible}
                width='thin'
            >
                <Menu.Item as='a'>
                <Icon name='home' />
                Home
                </Menu.Item>
                <Menu.Item as='a'>
                <Icon name='gamepad' />
                Games
                </Menu.Item>
                <Menu.Item as='a'>
                <Icon name='camera' />
                Channels
                </Menu.Item>
            </Sidebar>

            <Sidebar.Pusher style={{minHeight: '100vh', display: 'flex', flexFlow: 'column nowrap'}}>
                <Segment basic>
                    {children}
                </Segment>
            </Sidebar.Pusher>
            </Sidebar.Pushable>
        </Grid.Column>
        </Grid>
    )
}

export default SidebarMenu;