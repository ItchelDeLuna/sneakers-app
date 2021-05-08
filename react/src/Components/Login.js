import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

import NavBar from './NavBar.js';
import Logo from './Logo.js';
import Search from './Search.js';
import Footer from './Footer.js';

import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

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

export default function Login() {
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
                        <label className="formu">Iniciar sesión</label><br />
                        <form className={classes.root} noValidate autocomplete="off"><br />
                            <TextField id="outlined-basic" label="Usuario" variant="outlined" className="form_text"/>
                            <TextField id="outlined-basic" label="Contraseña" variant="outlined" className="search" type="password"/><br />
                            <Button variant="outlined" color="primary" >
                                Iniciar sesión
                            </Button><br /><br />
                            <Link>¿Ya tienes cuenta?</Link><br /><br />
                        </form> 
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
