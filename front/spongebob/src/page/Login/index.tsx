import { Box, ColorDiv, Container, DesignBox, Form, InfoText, InputBox, UserBackGroundConteiner } from "./styled";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <UserBackGroundConteiner>
            <ColorDiv></ColorDiv>
            <ColorDiv></ColorDiv>
            <ColorDiv></ColorDiv>
            <ColorDiv></ColorDiv>
            <Box>
                <DesignBox top="-50px" right="-60px" width="100px" height="100px"></DesignBox>
                <DesignBox bottom="-80px" left="100px" width="50px" height="50px" zindex="2"></DesignBox>
                <Container>
                    <Form>
                        <h2>Login</h2>
                        <form>
                            <InputBox>
                                <input type="text" placeholder="Username" />
                            </InputBox>
                            <InputBox>
                                <input type="password" placeholder="Password" />
                            </InputBox>
                            <InputBox>
                                <input type="submit" value="Login" />
                            </InputBox>

                            <InfoText>
                                Don't have an account ? <Link to="/signup"> Sign up</Link>
                            </InfoText>
                        </form>
                    </Form>
                </Container>
            </Box>
        </UserBackGroundConteiner>
    );
};

export default Login;
