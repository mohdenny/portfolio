import React from 'react';
import { Grid, Divider, Icon} from 'semantic-ui-react';

const items = [
    {name: 'linkedin'},
    {name: 'instagram'},
    {name: 'github'},
]

const ContactPage = () => {
    const lenColumn = items.length;

    const renderedContactList = items.map(item => {
        return (
            <Grid.Column key={item.name} textAlign={'center'}> 
                <Icon.Group size='huge'>
                    <Icon name={item.name} />
                </Icon.Group>
            </Grid.Column>
        )
    })

    return (
        <Grid padded centered style={{color: 'white', backgroundColor: '#293233', minHeight: '200px'}}>
            <Grid.Row>
                <Grid.Column>
                    <Divider horizontal inverted>
                        <h2>Contact</h2>
                    </Divider>
                </Grid.Column >
            </Grid.Row>
            <Grid.Row centered columns={lenColumn} style={{padding: '0 50px 20px'}}>
                {renderedContactList}  
            </Grid.Row>
        </Grid> 
    )
}

export default ContactPage;