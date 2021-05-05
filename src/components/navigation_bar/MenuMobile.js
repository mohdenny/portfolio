import React from 'react';
import CardProfile from '../content/CardProfile';
import { 
    Menu, 
    Button,
    Header,
    Icon,
    Image,
    Segment,
    Sidebar,
} from 'semantic-ui-react';

const MenuMobile = ({ content }) => {
    const VerticalSidebar = ({ animation, direction, visible }) => (
        <Sidebar
            as={Menu}
            animation={animation}
            direction={direction}
            icon='labeled'
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
    )
    
    const exampleReducer = (state, action) => {
        switch (action.type) {
            case 'CHANGE_ANIMATION':
            return { ...state, animation: action.animation, visible: !state.visible }
            case 'CHANGE_DIRECTION':
            return { ...state, direction: action.direction, visible: false }
            default:
            throw new Error()
        }
    }
    
    const SidebarMenu = () => {
        const [state, dispatch] = React.useReducer(exampleReducer, {
            animation: 'overlay',
            direction: 'left',
            visible: false,
        })

        const { animation, direction, visible } = state
        const vertical = direction === 'bottom' || direction === 'top'

        return (
            <div>
    
            <Header as='h5'>Vertical-Only Animations</Header>
            <Button
                disabled={vertical}
                onClick={() =>
                dispatch({ type: 'CHANGE_ANIMATION', animation: 'slide along' })
                }
            >
                Slide Along
            </Button>
    
            <Sidebar.Pushable as={Segment} style={{ overflow: 'hidden' }}>
                {!vertical && (
                <VerticalSidebar
                    animation={animation}
                    direction={direction}
                    visible={visible}
                />
                )}
    
                <Sidebar.Pusher>
                    {content}
                </Sidebar.Pusher>
            </Sidebar.Pushable>
            </div>
        )
    }
    
    return SidebarMenu();
}

export default MenuMobile;