import React from 'react';
import { Button, Card, CardActions, CardContent, Typography, withStyles } from '@material-ui/core';

import { TransactionsContainer } from '../transactions/transactions.container';

const styles = () => ({
    card: {
        margin: '0 16px',
    },
    header: {
        backgroundColor: '#1E88E5',
        color: '#ffffff',
        padding: '32px',
        textAlign: 'center',
    }
});

const PocketItemComponent = ({ pocket, classes }) => (
    <Card className={classes.card}>
        <div>
            <Typography variant="h3" className={classes.header}>{pocket.symbol} {pocket.balance}</Typography>
        </div>
        <CardActions>
            <Button color="inherit">Top Up</Button>
            <Button color="inherit">Exchange</Button>
        </CardActions>
        <CardContent>
            <TransactionsContainer pocketId={pocket.id}/>
        </CardContent>
    </Card>
);

export default withStyles(styles)(PocketItemComponent);
