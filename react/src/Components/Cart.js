import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

import NavBar from './NavBar.js';
import Logo from './Logo.js';
import Search from './Search.js';
import Footer from './Footer.js';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(0),
        textAlign:'center',
        color: theme.palette.text.secondary,
    },
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width:'30ch',
            height:'7ch',
        },
    }
}));

const style = {
    cc: {
        color: '81d4fa',
        fontSize:30,
        marginLeft:-280,
        marginTop:20,
    },
    
};

export default function Cart() {
    const classes = useStyles();
    return (
        <div>
            <NavBar></NavBar>
            <Logo></Logo>
            <Search></Search>
            <Grid container spacing={4}>
                <Grid item xs={5} sm={4}></Grid>
                <Grid item xs={5} sm={4}>
                    <Paper className={classes.paper}>
                        <br />
                        <label className="formu">Tu carrito</label><br />
                        <ShoppingCartIcon  className="cart_icon" style={style.cc}/> 
                        <h6 className="desc_buy">
                            2 Pares de tenis para mujer<br />
                            2 Pares de tenis para hombre<br />
                            2 Pares de tenis de oferta y promoción
                        </h6>
                        <Button variant="outlined" color="primary" style={style.btn}>
                            Comprar
                        </Button>
                        <br/><br/>
                    </Paper>
                </Grid>
                <Grid item xs={5} sm={4}>
                    <Paper className={classes.paper}>
                        
                    </Paper>
                </Grid>
               
            </Grid>
            <br /><br />
            <Footer></Footer>
        </div>   
    );
}
