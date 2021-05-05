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
    const [dimmed, setDimmed] = React.useState(false)

    return (
        <Grid columns={1}>
        <Grid.Column>
            <Button
                onClick={() => {
                    setVisible(true)
                    setDimmed(true)
                }}
            >
                Slide Along
            </Button>
        </Grid.Column>

        <Grid.Column>
            <Sidebar.Pushable as={Segment}>
            <Sidebar
                as={Menu}
                animation='overlay'
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

            <Sidebar.Pusher dimmed={dimmed && visible}>
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