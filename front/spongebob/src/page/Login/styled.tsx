import internal from "stream";
import styled from "styled-components";

export const UserBackGroundConteiner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(to bottom, #f1f4f9, #dff1ff);
`;

export const ColorDiv = styled.div`
    position: absolute;
    filter: blur(150px);

    :nth-child(1) {
        top: -250px;
        left: 100px;
        width: 600px;
        height: 700px;
        background: #2e86de;
    }
    :nth-child(2) {
        bottom: -150px;
        width: 700px;
        height: 700px;
        background: #0abde3;
    }
    :nth-child(3) {
        bottom: 300px;
        right: 100px;
        width: 300px;
        height: 300px;
        background: #feca57;
    }
    :nth-child(4) {
        top: 0px;
        right: 400px;
        width: 300px;
        height: 300px;
        background: #ff6b6b;
    }
`;

export const DesignBox = styled.div<{ top?: string; right?: string; bottom?: string; left?: string; width?: string; height?: string; zindex?: string }>`
    position: absolute;
    backdrop-filter: blur(5px);
    box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-right: 1px solid rgba(255, 255, 255, 0.2);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    top: ${(p) => p.top};
    right: ${(p) => p.right};
    bottom: ${(p) => p.bottom};
    left: ${(p) => p.left};
    width: ${(p) => p.width};
    height: ${(p) => p.height};
    z-index: ${(p) => p.zindex};
`;

export const Box = styled.div`
    position: relative;
`;
export const Container = styled.div`
    position: relative;
    width: 400px;
    min-height: 400px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(5px);
    box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-right: 1px solid rgba(255, 255, 255, 0.2);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;
export const Form = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    padding: 40px;
    h2 {
        margin-left: 10px;
        position: relative;
        color: #fff;
        font-size: 24px;
        font-weight: 600;
        letter-spacing: 1px;
        margin-bottom: 40px;
        /* ::before {
            content: "";
            position: absolute;
            left: 0;
            bottom: -10px;
            width: 90px;
            height: 4px;
            background: #fff;
        } */
    }
`;
export const InputBox = styled.div`
    width: 100%;
    margin-top: 20px;
    input {
        width: 100%;
        background: rgba(255, 255, 255, 0.2);
        border: none;
        outline: none;
        padding: 10px 20px;
        border-radius: 25px;
        border: 1px solid rgba(255, 255, 255, 0.5);
        border-right: 1px solid rgba(255, 255, 255, 0.2);
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        font-size: 14px;
        letter-spacing: 1px;
        color: #fff;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
        ::placeholder {
            font-size: 14px;
            color: #fff;
        }
    }
    input[type="submit"] {
        background: rgba(255, 255, 255, 0.8);
        color: #666;
        max-width: 100px;
        cursor: pointer;
        margin-top: 20px;
        margin-bottom: 20px;
        font-weight: 600;
    }
`;
export const InfoText = styled.p`
    margin-top: 5px;
    color: #fff;
    a {
        color: #fff;
        font-weight: 600;
    }
`;
