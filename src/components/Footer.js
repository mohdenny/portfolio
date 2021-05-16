import React from 'react';
import { Header, Grid, Segment } from 'semantic-ui-react';

const Footer = () => {
    return (
        <Grid padded>
            <Grid.Row columns={1} as={Segment} inverted>
                <Grid.Column mobile={16}>
                    <Header as={'h6'} style={{color: 'gray', textAlign: 'center', bottom: '0'}} inverted>
                        Copyright © Mohammad Denny 2021
                    </Header>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default Footer;