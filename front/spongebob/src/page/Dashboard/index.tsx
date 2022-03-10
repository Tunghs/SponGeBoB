import { UserBackGroundConteiner, ColorDiv, DesignBox, Box } from "page/Login/styled";

const Dashboard = () => {
    return (
        <div>
            <ColorDiv blur="340px" top="-250px" right="500px" width="600px" height="700px" background="#2e86de"></ColorDiv>
            <ColorDiv blur="330px" bottom="-150px" left="300px" width="700px" height="700px" background="#0abde3"></ColorDiv>
            <ColorDiv blur="300px" bottom="200px" right="100px" width="400px" height="400px" background="#feca57"></ColorDiv>
            <ColorDiv blur="300px" top="0px" left="100px" width="500px" height="500px" background="#ff6b6b"></ColorDiv>
            <Box>
                <DesignBox top="140px" left="10px" width="300px" height="400px"></DesignBox>
                <DesignBox top="30px" left="330px" width="100px" height="100px"></DesignBox>
                <DesignBox top="30px" left="450px" width="100px" height="100px"></DesignBox>
                <DesignBox top="140px" left="330px" width="700px" height="400px"></DesignBox>
                <DesignBox top="30px" left="1050px" width="300px" height="700px"></DesignBox>
            </Box>
        </div>
    );
};

export default Dashboard;
