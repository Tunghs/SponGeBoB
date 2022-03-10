import { Box, ColorDiv, Container, DesignBox, Form, InfoText, InputBox, UserBackGroundConteiner } from "page/Login/styled";
import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        <UserBackGroundConteiner>
            <ColorDiv blur="200px" top="-250px" right="500px" width="600px" height="700px" background="#2e86de"></ColorDiv>
            <ColorDiv blur="200px" bottom="-150px" left="300px" width="700px" height="700px" background="#0abde3"></ColorDiv>
            <ColorDiv blur="200px" bottom="200px" right="100px" width="400px" height="400px" background="#feca57"></ColorDiv>
            <ColorDiv blur="200px" top="0px" left="100px" width="500px" height="500px" background="#ff6b6b"></ColorDiv>
            <Box>
                <DesignBox top="-50px" right="-60px" width="100px" height="100px"></DesignBox>
                <DesignBox top="150px" left="-110px" width="120px" height="120px" zindex="2"></DesignBox>
                <DesignBox bottom="50px" right="-60px" width="80px" height="80px" zindex="2"></DesignBox>
                <DesignBox bottom="-80px" left="100px" width="50px" height="50px" zindex="2"></DesignBox>
                <Container>
                    <Form>
                        <h2>SignUp</h2>
                        <form>
                            <InputBox>
                                <input type="text" placeholder="Username" />
                            </InputBox>
                            <InputBox>
                                <input type="text" placeholder="NickName" />
                            </InputBox>
                            <InputBox>
                                <input type="password" placeholder="Password" />
                            </InputBox>
                            <InputBox>
                                <input type="password" placeholder="checked Password " />
                            </InputBox>
                            <InputBox>
                                <input type="submit" value="Sign Up" />
                            </InputBox>

                            <InfoText>
                                Don't have an account ? <Link to="/login"> Login</Link>
                            </InfoText>
                        </form>
                    </Form>
                </Container>
            </Box>
        </UserBackGroundConteiner>
    );
};

export default SignUp;
