import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

import NavBar from './NavBar.js';
import Logo from './Logo.js';
import Search from './Search.js';
import Footer from './Footer.js';
import T1 from './img/T1.png';


const style = {
    text_term: {
        marginLeft:20,
        marginRight:20,
        textAlign: 'left',
        lineHeight:'35px',
        fontSize:18,
        color:'#000',
    },
    grid_card: {
        marginLeft:20,
    },
    text_card: {
        fontSize:20,
        color:'#000',
        marginTop:10,
    },
    desc_card: {
        fontSize:18,
        color:'#000',
        textAlign:'left',
        marginTop:5,
    },
    img_card: {
        marginLeft:-5,
    },
};

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(0),
        textAlign:'center',
        color: theme.palette.text.secondary,
        border: '1px solid #e0e0e0',
    },
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width:'30ch',
            height:'7ch',
        },
    }
}));

export default function TermCond() {
    const classes = useStyles();
    return (
        <div>
            <NavBar></NavBar>
            <Logo></Logo>
            <Search></Search>
            <Grid container spacing={4}>
                <Grid item xs={5} sm={1}></Grid>
                <Grid item xs={5} sm={10}>
                    <Paper className={classes.paper}>
                    <div style={style.text_term}><br />
                    <div>
      <h1>TÉRMINOS Y CONDICIONES DE SNEAKERS M&V</h1>
    </div>
    <div>
      <h2>LE PEDIMOS LEA CON ATENCIÓN LOS TÉRMINOS Y CONDICIONES ANTES DE USAR NUESTRA PLATAFORMA SNEAKERS M&V:</h2>
      <p>Bienvenido a la lectura de condicones que proporciona nuestra plataforma, enfocada en proporcionar contenido digital para algunos dispositivos como móviles, PC, laptops, entere otros.</p>
      <p>Las condiciones puden cambiar de a cuerdo al país donde se encuentre, recuerde que como la plataforma que somos, podemos establecer cada cierto tiempo nuevas condiciones, así como cambiarlas o quitarlas. Una vez se ha informado sobre esta parte importante, a continuación se le muestran algunos puntos relevantes: </p>
      <h5>I.Restricciones de edad</h5>
      <p>Las compras únicamente se podrán realizar por personas que tengan 18 años de edad cumplidos o mayores a esta, por lo que las personas menores de 18 años de edad no podrán realizar compras, sino a través de su padre o tutor legal, o quien detente el ejercicio de la patria potestad, guarda y custodia.</p>
      <h5>II.Condiciones de compra de los productos Sneakers M&V</h5>
      <ul>
        <li>1. Los consumidores únicamente podrán comprar productos: (a) que estén disponibles para su venta en página en línea; (b)cuyo fin no sea para su comercialización o lucro por parte del consumidor. La enajenación con fines comerciales de los productos adquiridos fuera de los canales autorizados puede constituir un delito.</li>
        <li>2. Los productos enunciados en la tienda en línea de Sneakers M&V, se ofrecen en las cantidades disponibles, con las características de materiales, tallas y los colores visibles al momento que se realizará la compra.</li>
        <li>3. Para realizar una compra, el consumidor deberá ingresar a la tienda en línea, inciar sesión o registrarse si no tiene una cuenta y así, ina vez podrá seleccionar el o los productos que desee comprar.</li>
        <li>4. Los productos seleccionados por el consumidor, serán incluidos en la canasta/carrito de compra. Al finalizar la selección de productos, el consumidor deberá presionar el botón/logo del carrito para tener acceso a la página de resumen del pedido en la que podrá identificar el precio, descripción y cantidad de los productos seleccionados o bien corregir o modificar su pedido. </li>
        <li>5. Una vez realizado y asegurarse que su pedido sea correcto, el consumidor deberá presionar el botón “Continuar” para que pueda realizar el pago del o de los productos seleccionados y se pueda procesar la compra, lo cual lo podrá realizar mediante los sistemas de pago que se le muestren. </li>
        <li>6. Una vez terminado este procedimiento, Sneakers M&V, notificará al consumidor a través de el correo electrónico que se proporcionó al registrarse.</li>
      </ul>
    </div>
                    </div>  
        

              
                    </Paper>
                </Grid>
            </Grid>
            <br /><br />
            <Grid container spacing={4}>
            <Grid item xs={5} sm={1} ></Grid>
            <Grid item xs={5} sm={3} style={style.grid_card}>
                    <Paper className={classes.paper}>
                        <img src={T1} alt="T1" width='300' height='250' className="img_product" style={style.img_card} /><br />
                        <h5 style={style.text_card}>POWER WOMAN</h5>
                        <label style={style.desc_card}>
                            Los mejores productos hechos para la mujer, cómodos y flexibles y de calidad.
                        </label>
                        <br /><br />
                    </Paper><br /><br />  
                </Grid>
                <Grid item xs={5} sm={3} style={style.grid_card}>
                    <Paper className={classes.paper}>
                        <img src={T1} alt="T1" width='300' height='250' className="img_product" style={style.img_card} /><br />
                        <h5 style={style.text_card}>POWER WOMAN</h5>
                        <label style={style.desc_card}>
                            Los mejores productos hechos para la mujer, cómodos y flexibles y de calidad.
                        </label>
                        <br /><br />
                    </Paper><br /><br />  
                </Grid>
                <Grid item xs={5} sm={3} style={style.grid_card}>
                    <Paper className={classes.paper}>
                        <img src={T1} alt="T1" width='300' height='250' className="img_product" style={style.img_card}/><br />
                        <h5 style={style.text_card}>POWER WOMAN</h5>
                        <label style={style.desc_card}>
                            Los mejores productos hechos para la mujer, cómodos y flexibles y de calidad.
                        </label>
                        <br /><br />
                    </Paper><br /><br />  
                </Grid>
            </Grid>
            <Footer></Footer>
        </div>   
    );
}
