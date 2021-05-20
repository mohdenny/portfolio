import React from 'react';
import { Grid, List, Divider, Segment } from 'semantic-ui-react';

const WorkPage = () => {
    return (
        <Segment vertical style={{backgroundColor: '#293233'}}>
            <Grid divided inverted container style={{color: 'white', backgroundColor: '#293233', minHeight: '200px'}}>
                <Grid.Row>
                    <Grid.Column>
                        <Divider horizontal inverted>
                            <h2>Work Experience</h2>
                        </Divider>
                    </Grid.Column >
                </Grid.Row>
                <Grid.Row columns={'3'} style={{textAlign: 'center', padding: '0 50px 20px'}}>
                    <Grid.Column >
                        <h3>Lorem ipsum</h3>
                        <p>2014-2015</p>
                        <List inverted>
                            <List.Item>
                                <List.Icon name='marker' />
                                <List.Content>
                                    <List.Header as='a'>Krowlewskie Jadlo</List.Header>
                                    <List.Description>
                                    An excellent polish restaurant, quick delivery and hearty, filling
                                    meals.
                                    </List.Description>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name='marker' />
                                <List.Content>
                                    <List.Header as='a'>Xian Famous Foods</List.Header>
                                    <List.Description>
                                    A taste of Shaanxi's delicious culinary traditions, with delights like
                                    spicy cold noodles and lamb burgers.
                                    </List.Description>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name='marker' />
                                <List.Content>
                                    <List.Header as='a'>Sapporo Haru</List.Header>
                                    <List.Description>
                                    Greenpoint's best choice for quick and delicious sushi.
                                    </List.Description>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name='marker' />
                                <List.Content>
                                    <List.Header as='a'>Enid's</List.Header>
                                    <List.Description>
                                    At night a bar, during the day a delicious brunch spot.
                                    </List.Description>
                                </List.Content>
                            </List.Item>
                        </List>
                    </Grid.Column>  
                    <Grid.Column >
                        <h3 style={{textAlign: 'center'}}>Lorem ipsum</h3>
                        <p style={{textAlign: 'center'}}>2015-2016</p>
                        <List inverted>
                            <List.Item>
                                <List.Icon name='marker' />
                                <List.Content>
                                    <List.Header as='a'>Krowlewskie Jadlo</List.Header>
                                    <List.Description>
                                    An excellent polish restaurant, quick delivery and hearty, filling
                                    meals.
                                    </List.Description>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name='marker' />
                                <List.Content>
                                    <List.Header as='a'>Xian Famous Foods</List.Header>
                                    <List.Description>
                                    A taste of Shaanxi's delicious culinary traditions, with delights like
                                    spicy cold noodles and lamb burgers.
                                    </List.Description>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name='marker' />
                                <List.Content>
                                    <List.Header as='a'>Sapporo Haru</List.Header>
                                    <List.Description>
                                    Greenpoint's best choice for quick and delicious sushi.
                                    </List.Description>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name='marker' />
                                <List.Content>
                                    <List.Header as='a'>Enid's</List.Header>
                                    <List.Description>
                                    At night a bar, during the day a delicious brunch spot.
                                    </List.Description>
                                </List.Content>
                            </List.Item>
                        </List>
                    </Grid.Column>  
                    <Grid.Column >
                        <h3 style={{textAlign: 'center'}}>Lorem ipsum</h3>
                        <p style={{textAlign: 'center'}}>2017-Present</p>
                        <List inverted>
                            <List.Item>
                                <List.Icon name='marker' />
                                <List.Content>
                                    <List.Header as='a'>Krowlewskie Jadlo</List.Header>
                                    <List.Description>
                                    An excellent polish restaurant, quick delivery and hearty, filling
                                    meals.
                                    </List.Description>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name='marker' />
                                <List.Content>
                                    <List.Header as='a'>Xian Famous Foods</List.Header>
                                    <List.Description>
                                    A taste of Shaanxi's delicious culinary traditions, with delights like
                                    spicy cold noodles and lamb burgers.
                                    </List.Description>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name='marker' />
                                <List.Content>
                                    <List.Header as='a'>Sapporo Haru</List.Header>
                                    <List.Description>
                                    Greenpoint's best choice for quick and delicious sushi.
                                    </List.Description>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name='marker' />
                                <List.Content>
                                    <List.Header as='a'>Enid's</List.Header>
                                    <List.Description>
                                    At night a bar, during the day a delicious brunch spot.
                                    </List.Description>
                                </List.Content>
                            </List.Item>
                        </List>
                    </Grid.Column>  
                </Grid.Row>
            </Grid>
        </Segment>
    )
}

export default WorkPage