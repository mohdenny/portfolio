import React from 'react';
import { Header, Grid, Segment } from 'semantic-ui-react';

const Footer = () => {
    return (
        <Segment vertical inverted>
            <Grid padded>
                <Grid.Row>
                    <Grid.Column mobile={16} verticalAlign='bottom'>
                        <Header as={'h6'} style={{color: 'gray', textAlign: 'center'}} inverted>
                            Copyright © Mohammad Denny 2021
                        </Header>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}

export default Footer;