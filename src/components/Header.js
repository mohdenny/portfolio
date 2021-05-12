import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const Header = () => {
    return (
        <Card>
            <Image src='/logo192.png' fluid wrapped ui={false} />
            <Card.Content>
                <Card.Header>Daniel</Card.Header>
                <Card.Meta>Joined in 2016</Card.Meta>
                <Card.Description>
                    Daniel is a comedian living in Nashville.
                </Card.Description>
            </Card.Content>
        </Card>
    )
}

export default Header;