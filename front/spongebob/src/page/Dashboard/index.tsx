import { UserBackGroundConteiner, ColorDiv, DesignBox, Box } from "page/Login/styled";
import { DashBoardBackGroundConteiner } from "./styled";
import { BiArea, BiBeenHere, BiCategory, BiCrown } from "react-icons/bi";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Ul = styled.ul`
    position: relative;
    display: flex;
    top: -20px;
`;
const Li = styled.li`
    position: relative;
    list-style: none;
    margin: 10px;
    a {
        position: relative;
        top: 0;
        width: 80px;
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-size: 2em;
        border: 1px solid rgba(255, 255, 255, 0.4);
        border-right: 1px solid rgba(255, 255, 255, 0.2);
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 10px;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(4px);
        z-index: 1;
        box-shadow: 0 5px 45px rgba(0, 0, 0, 0.1);
        text-decoration: none;
        overflow: hidden;
        transition: top 0.5s, z-index 0.3s, transform 0.5s;
        transition-delay: 0.5s, 0.3s, 0s;
        span {
            position: absolute;
            bottom: 5px;
            font-size: 14px;
        }
        :hover {
            transition-delay: 0s, 0.3s, 0.5s;
            top: -30px;
            z-index: 11;
            transform: translateY(30px);

            ::before {
                transform: skewX(45deg) translateX(-150px);
            }
        }
        ::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 50px;
            height: 100%;
            background: rgba(255, 255, 255, 0.5);
            transform: skewX(45deg) translateX(150px);
            transition: 0.5s;
        }
    }
`;

const Dashboard = () => {
    return (
        <DashBoardBackGroundConteiner>
            <ColorDiv blur="250px" left="-100px" top="-350px" width="600px" height="600px" background="#f368e0"></ColorDiv>
            <ColorDiv blur="250px" bottom="100px" left="400px" width="1200px" height="500px" background="#feca57"></ColorDiv>
            <ColorDiv blur="250px" bottom="150px" right="-50px" width="400px" height="400px" background="#00d2d3"></ColorDiv>
            <ColorDiv blur="250px" bottom="-50px" left="0px" width="300px" height="300px" background="#00d2d3"></ColorDiv>
            <Ul>
                <Li>
                    <Link to="/">
                        <BiArea />
                        <span>unknown</span>
                    </Link>
                </Li>
                <Li>
                    <Link to="/">
                        <BiBeenHere />
                        <span>popular</span>
                    </Link>
                </Li>
                <Li>
                    <Link to="/">
                        <BiCrown />
                        <span>rank</span>
                    </Link>
                </Li>
                <Li>
                    <Link to="/">
                        <BiCategory />
                        <span>widget</span>
                    </Link>
                </Li>
                <Li>
                    <Link to="/">
                        <MdOutlineAdminPanelSettings />
                        <span>admin</span>
                    </Link>
                </Li>
            </Ul>
        </DashBoardBackGroundConteiner>
    );
};

export default Dashboard;
