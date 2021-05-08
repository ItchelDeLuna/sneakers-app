import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

import NavBar from './NavBar.js';
import Logo from './Logo.js';
import Search from './Search.js';
import Footer from './Footer.js';

import d1 from './img/d1.png';
import d2 from './img/d2.png';
import d3 from './img/d3.png';
import d4 from './img/d4.png';
import d5 from './img/d5.png';
import d6 from './img/d6.png';
import d7 from './img/d7.png';
import d8 from './img/d8.png';

const style = {
    desc: {
        fontSize:20,
        marginLeft:-200,
        marginTop:-50,
    },
    col: {
        fontSize:20,
        marginLeft:-300,
        marginTop:-50,
    },
};

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(0),
        textAlign:'center',
        color: theme.palette.text.secondary,
        border: '1px solid #e0e0e0',  
    },
}));

export default function DescProm() {
    const classes = useStyles();
    return (
        <div>
            <NavBar></NavBar>
            <Logo></Logo>
            <Search></Search>
            <h4>Descuentos y Promociones</h4>
            <Grid container spacing={4}>
                <Grid item xs={5} sm={4}>
                    <Paper className={classes.paper}>
                        <img src={d8} alt="T1" width='390' height='500' className="img_product"/><br />
                        <label className="title_product">Nike Air Max 270 React ENG</label><br /><br></br>
                        <label className="description" style={style.desc}>Calzado para mujer</label>
                        <br /><br />
                        <div className="colors"></div>
                        <label className="description" style={style.col}>1 Color</label>
                        <br /><br />
                    </Paper>
                </Grid>
                <Grid item xs={5} sm={4}>
                    <Paper className={classes.paper}>
                        <img src={d2} alt="T1" width='390' height='500' className="img_product"/><br />
                        <label className="title_product">Nike Air Max 270 React ENG</label><br /><br></br>
                        <label className="description" style={style.desc}>Calzado para mujer</label>
                        <br /><br />
                        <div className="colors"></div>
                        <label className="description" style={style.col}>1 Color</label>
                        <br /><br />
                    </Paper>
                </Grid>
                <Grid item xs={5} sm={4}>
                    <Paper className={classes.paper}>
                        <img src={d3} alt="T1" width='390' height='500' className="img_product"/>
                        <br />
                        <label className="title_product">Nike Air Max 270 React ENG</label><br /><br></br>
                        <label className="description" style={style.desc}>Calzado para mujer</label>
                        <br /><br />
                        <div className="colors"></div>
                        <label className="description" style={style.col}>1 Color</label>
                        <br /><br />
                    </Paper>
                </Grid>
                <Grid item xs={5} sm={4}>
                    <Paper className={classes.paper}>
                        <img src={d4} alt="T1" width='390' height='500' className="img_product"/><br />
                        <label className="title_product">Nike Air Max 270 React ENG</label><br /><br></br>
                        <label className="description" style={style.desc}>Calzado para mujer</label>
                        <br /><br />
                        <div className="colors"></div>
                        <label className="description" style={style.col}>1 Color</label>
                        <br /><br />
                    </Paper>
                </Grid>
            </Grid>

            <Grid container spacing={4}>
                <Grid item xs={5} sm={4}>
                    <Paper className={classes.paper}>
                        <img src={d5} alt="T1" width='390' height='500' className="img_product"/>
                        <br />
                        <label className="title_product">Nike Air Max 270 React ENG</label><br /><br></br>
                        <label className="description" style={style.desc}>Calzado para mujer</label>
                        <br /><br />
                        <div className="colors"></div>
                        <label className="description" style={style.col}>1 Color</label>
                        <br /><br />
                    </Paper>
                </Grid>
                <Grid item xs={5} sm={4}>
                    <Paper className={classes.paper}>
                        <img src={d6} alt="T1" width='390' height='500' className="img_product"/>
                        <br />
                        <label className="title_product">Nike Air Max 270 React ENG</label><br /><br></br>
                        <label className="description" style={style.desc}>Calzado para mujer</label>
                        <br /><br />
                        <div className="colors"></div>
                        <label className="description" style={style.col}>1 Color</label>
                        <br /><br />
                    </Paper>
                </Grid>
                <Grid item xs={5} sm={4}>
                    <Paper className={classes.paper}>
                        <img src={d7} alt="T1" width='390' height='500' className="img_product"/>
                        <br />
                        <label className="title_product">Nike Air Max 270 React ENG</label><br /><br></br>
                        <label className="description" style={style.desc}>Calzado para mujer</label>
                        <br /><br />
                        <div className="colors"></div>
                        <label className="description" style={style.col}>1 Color</label>
                        <br /><br />
                    </Paper>
                </Grid>
                <Grid item xs={5} sm={4}>
                    <Paper className={classes.paper}>
                        <img src={d1} alt="T1" width='390' height='500' className="img_product"/>
                        <br />
                        <label className="title_product">Nike Air Max 270 React ENG</label><br /><br></br>
                        <label className="description" style={style.desc}>Calzado para mujer</label>
                        <br /><br />
                        <div className="colors"></div>
                        <label className="description" style={style.col}>1 Color</label>
                        <br /><br />
                    </Paper>
                </Grid>
            </Grid>
            <br /><br />
            <Footer></Footer>
            <br /><br />
        </div>   
    );
}
