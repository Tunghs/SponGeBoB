import styled from "styled-components";

export const DashBoardBackGroundConteiner = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(to bottom, #ee5253, #dff1ff);
    ::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 50%;
        bottom: 0;
        z-index: 10;
        border-top: 1px solid rgba(255, 255, 255, 0.5);
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
    }
`;
