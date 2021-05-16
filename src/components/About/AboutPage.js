import React from 'react';
import { Grid, Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const AboutPage = () => {
    return (
        <Grid padded style={{color: 'white', backgroundColor: '#293233', minHeight: '200px'}}>
            <Grid.Row>
                <Grid.Column>
                    <Divider horizontal inverted>
                        <h2>About me</h2>
                    </Divider>
                </Grid.Column >
            </Grid.Row>
            <Grid.Row style={{textAlign: 'center', padding: '0 50px 20px'}}>
                <Grid.Column> 
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget velit eu turpis tempor pretium quis vitae mi. 
                        Praesent in magna libero. Vivamus enim turpis, suscipit id dui fringilla, imperdiet mollis dui. Sed fringilla elit urna, id maximus lacus maximus quis. 
                        Integer porta, est et molestie commodo, risus elit fermentum mauris, non lacinia neque elit nec ante. Proin vestibulum dapibus consequat. 
                        Vestibulum pulvinar elit turpis, quis feugiat libero luctus et. Aenean tristique quam at tellus imperdiet, quis fermentum nisl facilisis. 
                        In faucibus ut nisl in tempor. Quisque tempor, dui ut fermentum viverra, justo ex eleifend lectus, non molestie neque urna ut enim. Mauris orci massa, ultrices sit amet vulputate ac, tincidunt id mi. 
                        Fusce at porta libero. Pellentesque quis sem in turpis ultrices ullamcorper non in leo. Duis ornare commodo blandit.
                    </p>  
                </Grid.Column>  
            </Grid.Row>
        </Grid>
    )
}

export default AboutPage;