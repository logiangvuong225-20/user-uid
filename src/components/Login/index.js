import React from "react";
import GoogleLogin from "react-google-login";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";

// components
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import GoogleIcon from "../image/google_icon.svg";
import BgLogin from "../image/Group_7644.png";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { height } from "@mui/system";
import Container from '@mui/material/Container';
import { makeStyles } from '@mui/styles';

// styles
// import "./Login.scss";
const useStyles = makeStyles({
    root: {
        width: "100%",

    },
    div: {
        margin: "10px 0",
    },
    btn: {
        margin: "10px",
    },
    divB: {
        textAlign: "center",
        width: "100%",
    },
    divCon: {
        padding: "50px",
    },
});

// images

const Login = () => {
    const classes = useStyles();

    const history = useHistory();



    const responseGoogle = async (res) => {
        console.log(res);
        if (res.tokenObj.access_token) {
            localStorage.setItem("token", res.tokenObj.access_token);
            history.replace("/");
        } else {
            return <Redirect to="/login" />;
        }
        console.log(res);
    };

    return (




        <Container className={classes.divCon}>
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <div className="LeftSection" style={{
                            backgroundImage: `url(${BgLogin})`,
                            height: "100%",
                        }
                        }>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className="RightSection">
                            <h1 className={classes.divB}>Đăng nhập trang quản lý user </h1>

                            <div Item className={classes.div} >                            <TextField className={classes.root} label="Username" />
                            </div>
                            <div Item className={classes.div} >                             <TextField type="password" className={classes.root} label="Password" />
                            </div>


                            <div className={classes.divB} >
                                <Button className={classes.btn} variant="outlined" color="primary">
                                    Login
                                </Button>

                            </div>

                            <h5>Or With</h5>


                            <GoogleLogin
                                clientId="738277559607-qmkk4k8rared9tltub646d02oq8bvkuf.apps.googleusercontent.com"
                                buttonText="GOOGLE"
                                render={(renderProps) => (
                                    <button
                                        onClick={renderProps.onClick}
                                        disabled={renderProps.disabled}
                                        className="gg-login-btn"
                                    >
                                        <span
                                            className="icon"
                                            style={{
                                                backgroundImage: `url(${GoogleIcon})`,
                                            }}
                                        ></span>
                                        <span className="text">Google</span>
                                    </button>
                                )}
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                            />
                        </div>                    </Grid>

                </Grid>
            </Box>


        </Container>
    );
};

export default Login;