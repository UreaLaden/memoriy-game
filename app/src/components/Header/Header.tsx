import { Typography } from "@mui/material";
import ActionButton from "../ActionButton/ActionButton";
import { ActionButtonContainer, HeaderContainer } from "./Header.component";

const Header = () => {
  return (
    <HeaderContainer>
      <Typography sx={{ fontSize: 40, fontWeight: 700 }}>memory</Typography>
      <ActionButtonContainer>
        <ActionButton
          text={"Menu"}
          onClick={() => console.log("Not Yet Implemented")}
          isPrimary={true}
        />
        <ActionButton
          text={"New Game"}
          onClick={() => console.log("Not Yet Implemented")}
          isPrimary={false}
        />
      </ActionButtonContainer>
    </HeaderContainer>
  );
};
export default Header;
