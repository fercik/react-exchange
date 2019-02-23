import React, { Component } from 'react';
import { Button, Card, CardActions, CardContent, Typography, withStyles } from '@material-ui/core';

import { TransactionsContainer } from '../transactions/transactions.container';
import { TopUpComponent } from '../top-up/top-up.component';
import { ExchangeComponent } from '../exchange/exchange.component';

const styles = () => ({
    card: {
        marginTop: '16px',
    },
    header: {
        backgroundColor: '#1E88E5',
        color: '#ffffff',
        padding: '64px',
        textAlign: 'center',
    }
});

class PocketItemComponent extends Component {
    
    state = {
        isTopUpDialogOpened: false,
        isExchangeDialogOpened: false,
    };
    
    openTopUpDialog = () => {
        this.setState({ isTopUpDialogOpened: true });
    };
    
    closeTopUpDialog = () => {
        this.setState({ isTopUpDialogOpened: false });
    };
    
    onTopUpConfirm = (topUpValue) => {
        const { pocket, addTransaction, updatePocket } = this.props;
        
        addTransaction(pocket, topUpValue, 'TOP_UP');
        updatePocket(
            pocket.id,
            {
                balance: parseFloat(pocket.balance) + parseFloat(topUpValue),
            }
        );
        this.closeTopUpDialog();
    };
    
    onTopUpCancel = () => {
        this.closeTopUpDialog();
    };
    
    openExchangeDialog = () => {
        this.setState({ isExchangeDialogOpened: true });
    };
    
    closeExchangeDialog = () => {
        this.setState({ isExchangeDialogOpened: false });
    };
    
    onExchangeConfirm = (baseValue, destinationValue, toPocket) => {
        const { pocket, addTransaction, updatePocket } = this.props;
        
        addTransaction(pocket, -baseValue, 'EXCHANGE');
        addTransaction(toPocket, destinationValue, 'EXCHANGE');
        updatePocket(pocket.id, { balance: Number(pocket.balance - baseValue) });
        updatePocket(toPocket.id, { balance: Number(toPocket.balance + destinationValue) });
    };
    
    displayPocketBalance = (symbol, balance) => {
        return `${symbol} ${Number(balance).toFixed(2)}`;
    };
    
    render = () => {
        const { pocket, pocketsList, classes } = this.props;
        
        return (
            <Card className={classes.card}>
                <div>
                    <Typography
                        variant="h3"
                        className={classes.header}
                    >
                        {this.displayPocketBalance(pocket.symbol, pocket.balance)}
                    </Typography>
                </div>
                <CardActions>
                    <Button color="inherit" onClick={this.openTopUpDialog}>Top Up</Button>
                    <Button color="inherit" onClick={this.openExchangeDialog}>Exchange</Button>
                </CardActions>
                <CardContent>
                    <TransactionsContainer pocketId={pocket.id}/>
                </CardContent>
                
                <TopUpComponent
                    isDialogOpened={this.state.isTopUpDialogOpened}
                    onConfirm={this.onTopUpConfirm}
                    onCancel={this.onTopUpCancel}
                />
                
                <ExchangeComponent
                    isDialogOpened={this.state.isExchangeDialogOpened}
                    fromPocket={pocket}
                    pocketsList={pocketsList}
                    closeExchangeDialog={this.closeExchangeDialog}
                    onConfirm={this.onExchangeConfirm}
                />
            </Card>
        );
    };
}

export default withStyles(styles)(PocketItemComponent);
