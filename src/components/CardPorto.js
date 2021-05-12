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
                    <Image
                        key={item.id}
                        src='https://react.semantic-ui.com/images/wireframe/image-text.png'
                        as='a'
                        href='http://google.com'
                        target='_blank'
                        size='mini'
                    />
                    <p key={item.id}>{item.title}</p>
                </div>
        )
    });

    return (
        <div>
            <Grid.Column style={{border: '3px solid white'}}>
                {renderedItem}
            </Grid.Column>
        </div>
    )
}

export default CardPorto;