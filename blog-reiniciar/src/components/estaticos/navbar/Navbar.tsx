import React from "react";
import { AppBar, Toolbar, Typography, Box, Grid } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css"
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { addToken } from "../../../store/tokens/actions";
import {toast} from 'react-toastify';

function Navbar() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    let navigate = useNavigate();
        const dispatch = useDispatch();

    function goLogout() {
        dispatch(addToken(''));
        toast.info('Usuário deslogado', {
            position:'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        navigate('/login')
    }

    var navbarComponent;
    if(token !== ''){
        navbarComponent = <AppBar position="static" style={{ backgroundColor: "#4e2f00" }}>
        <Toolbar variant="dense">

            <Box className="cursor">
                <Typography variant="h5" color="inherit">
                    BlogReiniciar
                </Typography>
            </Box>


            <Box display="flex" justifyContent="center">
                <Link to="/home" className="text-decorator-none">
                    <Box mx={1} className="cursor">
                        <Typography variant="h6" color="inherit">
                            home
                        </Typography>
                    </Box>
                </Link>
                <Link to="/posts" className="text-decorator-none">
                <Box mx={1} className="cursor">
                    <Typography variant="h6" color="inherit">
                        postagens
                    </Typography>
                </Box>
                </Link>
                <Link to="/temas" className="text-decorator-none">
                <Box mx={1} className="cursor">
                    <Typography variant="h6" color="inherit">
                        temas
                    </Typography>
                </Box>
                </Link>
                <Link to="/formulariotema" className="text-decorator-none">
                <Box mx={1} className="cursor">
                    <Typography variant="h6" color="inherit">
                        cadastrar tema
                    </Typography>
                </Box>
                </Link>
                
                    <Box mx={1} className="cursor" onClick = {goLogout}>
                        <Typography variant="h6" color="inherit">
                            logout
                        </Typography>
                    </Box>
                

            </Box>

        </Toolbar>
    </AppBar>
    }

    return (
        <>

         {navbarComponent}   

        </>
    )
}

export default Navbar