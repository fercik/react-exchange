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
        isDialogOpened: false,
    };
    
    openDialog = () => {
        this.setState({ isDialogOpened: true });
    };
    
    closeDialog = () => {
        this.setState({ isDialogOpened: false });
    };
    
    onBackdropClick = () => {
        this.closeDialog();
    };
    
    onConfirm = (topUpAmount) => {
        this.closeDialog();
    };
    
    onCancel = () => {
        this.closeDialog();
    };
    
    render() {
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
                    isDialogOpened={this.state.isDialogOpened}
                    onBackdropClick={this.onBackdropClick}
                    onConfirm={this.onConfirm}
                    onCancel={this.onCancel}
                />
            </Card>
        );
    }
}

export default withStyles(styles)(PocketItemComponent);
