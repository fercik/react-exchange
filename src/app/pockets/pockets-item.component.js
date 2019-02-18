import React, { Component } from 'react';
import { Button, Card, CardActions, CardContent, Typography, withStyles } from '@material-ui/core';

import { TransactionsContainer } from '../transactions/transactions.container';
import { TopUpComponent } from '../top-up/top-up.component';

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

class PocketItemComponent extends Component {
    
    state = {
        isTopUpDialogOpened: false,
    };
    
    openDialog = () => {
        this.setState({ isTopUpDialogOpened: true });
    };
    
    closeDialog = () => {
        this.setState({ isTopUpDialogOpened: false });
    };
    
    onTopUpConfirm = (topUpValue) => {
        const { pocket, topUpPocket, addTopUpTransaction } = this.props;
        
        topUpPocket(pocket.id, topUpValue);
        addTopUpTransaction(pocket, topUpValue);
        this.closeDialog();
    };
    
    onCancel = () => {
        this.closeDialog();
    };
    
    render = () => {
        const { pocket, classes } = this.props;
        
        return (
            <Card className={classes.card}>
                <div>
                    <Typography variant="h3" className={classes.header}>{pocket.symbol} {pocket.balance}</Typography>
                </div>
                <CardActions>
                    <Button color="inherit" onClick={this.openDialog}>Top Up</Button>
                    <Button color="inherit">Exchange</Button>
                </CardActions>
                <CardContent>
                    <TransactionsContainer pocketId={pocket.id}/>
                </CardContent>
                
                <TopUpComponent
                    isDialogOpened={this.state.isTopUpDialogOpened}
                    onConfirm={this.onTopUpConfirm}
                    onCancel={this.onCancel}
                />
            </Card>
        );
    };
}

export default withStyles(styles)(PocketItemComponent);
