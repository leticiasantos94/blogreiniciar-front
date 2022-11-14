import React from "react";
import { AppBar, Toolbar, Typography, Box, Grid } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import "./Navbar.css"

function Navbar() {

    const [token, setToken] = useLocalStorage('token');
    let navigate = useNavigate();

    function goLogout() {
        setToken('')
        alert('Usuário deslogado!')
        navigate('/login')
    }

    return (
        <>

            <AppBar position="static" style={{ backgroundColor: "#4e2f00" }}>
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

        </>
    )
}

export default Navbar