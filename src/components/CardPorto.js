import React from 'react';
import { Image, Grid } from 'semantic-ui-react';

const CardPorto = () => {
    const itemPorto = [
        {id:'1', title: 'Covid Update'},
        {id:'2', title: 'Junetflix'},
        {id:'3', title: 'Ur Tube'},
        {id:'4', title: 'Collectify'},
        {id:'5', title: 'Cinemy'},
        {id:'6', title: 'Alig Bola'},
    ];

    const renderedItem = itemPorto.map(item => {
        console.log(item.title);
        return (
                <div>
                    <Grid.Column key={item.id} style={{border: '3px solid white'}}>
                        <Image
                            src='https://react.semantic-ui.com/images/wireframe/image-text.png'
                            as='a'
                            href='http://google.com'
                            target='_blank'
                            size='mini'
                            floated='left'
                        />
                        <p floated='right'>{item.title}</p>
                    </Grid.Column>
                </div>
        )
    });

    return {renderedItem}
}

export default CardPorto;