import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import '../styles/App.css';
import NavbarComputer from './NavbarComputer';
import Header from './Header';
import CardPorto from './CardPorto';
import Footer from './Footer';

const MainPage = () => {
    return (
        <div>
            <Grid>
                <Grid.Row columns={1}>
                    <Grid.Column mobile={16} computer={16}>
                        <NavbarComputer/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Grid padded centered columns={5} divided>
                <Grid.Row style={{backgroundColor: '#59949B'}}>
                    <Header/>
                </Grid.Row>
            </Grid>
            <Grid padded columns={6} >
                <Grid.Row style={{backgroundColor: '#293233', minHeight: '60vh'}}>
                    <CardPorto/>              
                </Grid.Row>
            </Grid>
            <Grid padded>
                <Grid.Row columns={1} as={Segment} inverted>
                    <Grid.Column mobile={16}>
                        <Footer />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}

export default MainPage;