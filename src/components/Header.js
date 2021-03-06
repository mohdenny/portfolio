import React from 'react';
import { Grid, Card, Image, Segment } from 'semantic-ui-react';

const Header = () => {
    const items = [
        {
            image: '/ava1.jpeg', 
            name: 'Mohammad Denny', 
            meta: 'Front-End Engineer & Broadcast Engineer',
            desc: 'Curious | Happy to learn | Coding Enthusiast'}
    ]

    const renderedItem = items.map(item => {
        return (
            <div key={item.name}>
                <Image src={item.image} rounded wrapped />
                <Card.Content>
                    <Card.Header>{item.name}</Card.Header>
                    <Card.Meta>{item.meta}</Card.Meta>
                    <Card.Description>{item.desc}</Card.Description>
                </Card.Content>
            </div>
        )
    })

    return (
        <Segment vertical style={{backgroundColor: '#59949B'}}>
            <Grid container centered columns={5} divided>
                <Grid.Row style={{backgroundColor: '#59949B'}}>
                    <Card style={{borderRadius :'0 0 1rem 1rem'}}>{renderedItem}</Card>
                </Grid.Row>
            </Grid>
        </Segment>
    )
        
}

export default Header;