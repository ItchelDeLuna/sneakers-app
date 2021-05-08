import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

import NavBar from './NavBar.js';
import Logo from './Logo.js';
import Search from './Search.js';
import Footer from './Footer.js';

import m9 from './img/m9.png';
import m2 from './img/m2.png';
import m3 from './img/m3.png';
import m4 from './img/m4.png';
import m5 from './img/m5.png';
import m6 from './img/m6.png';
import m7 from './img/m7.png';
import m8 from './img/m8.png';


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

export default function Women() {
    const classes = useStyles();
    return (
        <div>
            <NavBar></NavBar>
            <Logo></Logo>
            <Search></Search>
            <h4>Mujeres</h4>
            <Grid container spacing={4}>
                <Grid item xs={5} sm={4}>
                    <Paper className={classes.paper}>
                        <img src={m9} alt="T1" width='390' height='500' className="img_product"/>
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
                        <img src={m2} alt="T1" width='390' height='500' className="img_product"/>
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
                        <img src={m3} alt="T1" width='390' height='500' className="img_product"/>
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
                        <img src={m4} alt="T1" width='390' height='500' className="img_product"/>
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

            <Grid container spacing={4}>
                <Grid item xs={5} sm={4}>
                    <Paper className={classes.paper}>
                        <img src={m5} alt="T1" width='390' height='500' className="img_product"/>
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
                        <img src={m6} alt="T1" width='390' height='500' className="img_product"/>
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
                        <img src={m7} alt="T1" width='390' height='500' className="img_product"/>
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
                        <img src={m8} alt="T1" width='390' height='500' className="img_product"/>
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
