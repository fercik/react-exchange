import React, { Component } from 'react';
import { Button, Card, CardActions, CardContent, Typography, withStyles } from '@material-ui/core';

import { TransactionsContainer } from '../transactions/transactions.container';
import { TopUpComponent } from '../top-up/top-up.component';

const styles = () => ({
    card: {
        marginTop: '16px',
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
    
    openTopUpDialog = () => {
        this.setState({ isTopUpDialogOpened: true });
    };
    
    closeTopUpDialog = () => {
        this.setState({ isTopUpDialogOpened: false });
    };
    
    onTopUpConfirm = (topUpValue) => {
        const { pocket, topUpPocket, addTopUpTransaction } = this.props;
        
        topUpPocket(pocket.id, topUpValue);
        addTopUpTransaction(pocket, topUpValue);
        this.closeTopUpDialog();
    };
    
    onTopUpCancel = () => {
        this.closeTopUpDialog();
    };
    
    render = () => {
        const { pocket, classes, openExchangeDialog } = this.props;
        
        return (
            <Card className={classes.card}>
                <div>
                    <Typography variant="h3" className={classes.header}>{pocket.symbol} {pocket.balance}</Typography>
                </div>
                <CardActions>
                    <Button color="inherit" onClick={this.openTopUpDialog}>Top Up</Button>
                    <Button color="inherit" onClick={() => {
                        openExchangeDialog();
                    }}>Exchange</Button>
                </CardActions>
                <CardContent>
                    <TransactionsContainer pocketId={pocket.id}/>
                </CardContent>
                
                <TopUpComponent
                    isDialogOpened={this.state.isTopUpDialogOpened}
                    onConfirm={this.onTopUpConfirm}
                    onCancel={this.onTopUpCancel}
                />
            </Card>
        );
    };
}

export default withStyles(styles)(PocketItemComponent);
