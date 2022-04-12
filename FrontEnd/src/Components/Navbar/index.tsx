import { AppBar, Box, Container, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";


const NavBar: React.FC = () => {
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        LOCADORA
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Link to={"/"} style={{ textDecoration: "none" }}>
                            <Button
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Filmes
                            </Button>
                        </Link>
                        <Link to={"/clientes"} style={{ textDecoration: "none" }}>
                            <Button
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Clientes
                            </Button>
                        </Link>
                        <Link to={"/alugueis"} style={{ textDecoration: "none" }}>
                            <Button
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Locações
                            </Button>
                        </Link>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default NavBar;