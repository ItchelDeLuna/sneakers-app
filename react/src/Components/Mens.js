import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

import NavBar from './NavBar.js';
import Logo from './Logo.js';
import Search from './Search.js';
import Footer from './Footer.js';

import h1 from './img/h1.png';
import h2 from './img/h2.png';
import h3 from './img/h3.png';
import h4 from './img/h4.png';
import h5 from './img/h5.png';
import h6 from './img/h6.png';
import h7 from './img/h7.png';
import h8 from './img/h8.png';

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

export default function Mens() {
    const classes = useStyles();
    return (
        <div>
            <NavBar></NavBar>
            <Logo></Logo>
            <Search></Search>
            <h4>Hombres</h4>
            <Grid container spacing={4}>
                <Grid item xs={5} sm={4}>
                    <Paper className={classes.paper}>
                        <img src={h1} alt="T1" width='390' height='500' className="img_product"/>
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
                        <img src={h2} alt="T1" width='390' height='500' className="img_product"/>
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
                        <img src={h3} alt="T1" width='390' height='500' className="img_product"/>
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
                        <img src={h4} alt="T1" width='390' height='500' className="img_product"/>
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
                        <img src={h5} alt="T1" width='390' height='500' className="img_product"/>
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
                        <img src={h6} alt="T1" width='390' height='500' className="img_product"/>
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
                        <img src={h7} alt="T1" width='390' height='500' className="img_product"/>
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
                        <img src={h8} alt="T1" width='390' height='500' className="img_product"/>
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
