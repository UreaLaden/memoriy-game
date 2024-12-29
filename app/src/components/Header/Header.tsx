import { Typography } from "@mui/material";
import ActionButton from "../ActionButton/ActionButton";
import { ActionButtonContainer, HeaderContainer } from "./Header.component";
import { useGetDimensions } from "../../utils/hooks/useGetDimensions";
import { useMemo } from "react";
import { MOBILE_WIDTH } from "../../utils/constants";
import { useGameContext } from "../../utils/hooks/useGameContext";

const Header = () => {
  const dimensions = useGetDimensions();
  const context = useGameContext();

  const onMenuSelected = () => {
    context.pause();
  };

  const Actions = useMemo(() => {
    if (dimensions.width <= MOBILE_WIDTH) {
      return (
        <ActionButton text={"Menu"} onClick={onMenuSelected} isPrimary={true} />
      );
    }
    return (
      <>
        <ActionButton
          text={"Restart"}
          onClick={() => console.log("Not Yet Implemented")}
          isPrimary={true}
        />
        <ActionButton
          text={"New Game"}
          onClick={() => console.log("Not Yet Implemented")}
          isPrimary={false}
        />
      </>
    );
  }, [dimensions.width]);

  return (
    <HeaderContainer>
      <Typography sx={{ fontSize: 40, fontWeight: 700 }}>memory</Typography>
      <ActionButtonContainer>{Actions}</ActionButtonContainer>
    </HeaderContainer>
  );
};
export default Header;
