import React from 'react';
import { Image, Grid, Divider, Segment } from 'semantic-ui-react';

const PortoPage = () => {
    return (
        <Segment vertical style={{backgroundColor: '#293233'}}>
            <Grid centered container style={{color: 'white', backgroundColor: '#293233', minHeight: '200px'}}>   
                <Grid.Row>
                    <Grid.Column>
                        <Divider horizontal inverted>
                            <h2>Portofolio</h2>
                        </Divider>
                    </Grid.Column >
                </Grid.Row>
                <Grid.Row divided columns={4} only={'computer tablet'} style={{color: 'white', gap: '16px 0', padding: '20px 50px'}}>
                    <Grid.Column >
                        <Image src='https://react.semantic-ui.com/images/wireframe/image-text.png' rounded />
                        <p style={{textAlign: 'center'}}>Project 1</p>
                    </Grid.Column>
                    <Grid.Column >
                        <Image src='https://react.semantic-ui.com/images/wireframe/image-text.png' rounded />
                        <p style={{textAlign: 'center'}}>Project 2</p>
                    </Grid.Column>
                    <Grid.Column >
                        <Image src='https://react.semantic-ui.com/images/wireframe/image-text.png' rounded />
                        <p style={{textAlign: 'center'}}>Project 3</p>
                    </Grid.Column>
                    <Grid.Column >
                        <Image src='https://react.semantic-ui.com/images/wireframe/image-text.png' rounded />
                        <p style={{textAlign: 'center'}}>Project 4</p>
                    </Grid.Column>
                    <Grid.Column >
                        <Image src='https://react.semantic-ui.com/images/wireframe/image-text.png' rounded />
                        <p style={{textAlign: 'center'}}>Project 5</p>
                    </Grid.Column>
                    <Grid.Column >
                        <Image src='https://react.semantic-ui.com/images/wireframe/image-text.png' rounded />
                        <p style={{textAlign: 'center'}}>Project 6</p>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row divided columns={1} only={'mobile'} style={{color: 'white', gap: '16px 0', padding: '20px 50px'}}>
                    <Grid.Column >
                        <Image src='https://react.semantic-ui.com/images/wireframe/image-text.png' rounded />
                        <p style={{textAlign: 'center'}}>Project 1</p>
                    </Grid.Column>
                    <Grid.Column >
                        <Image src='https://react.semantic-ui.com/images/wireframe/image-text.png' rounded />
                        <p style={{textAlign: 'center'}}>Project 2</p>
                    </Grid.Column>
                    <Grid.Column >
                        <Image src='https://react.semantic-ui.com/images/wireframe/image-text.png' rounded />
                        <p style={{textAlign: 'center'}}>Project 3</p>
                    </Grid.Column>
                    <Grid.Column >
                        <Image src='https://react.semantic-ui.com/images/wireframe/image-text.png' rounded />
                        <p style={{textAlign: 'center'}}>Project 4</p>
                    </Grid.Column>
                    <Grid.Column >
                        <Image src='https://react.semantic-ui.com/images/wireframe/image-text.png' rounded />
                        <p style={{textAlign: 'center'}}>Project 5</p>
                    </Grid.Column>
                    <Grid.Column >
                        <Image src='https://react.semantic-ui.com/images/wireframe/image-text.png' rounded />
                        <p style={{textAlign: 'center'}}>Project 6</p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}

export default PortoPage;