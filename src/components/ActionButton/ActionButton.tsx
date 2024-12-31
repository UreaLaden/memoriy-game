import { Button } from "@mui/material";
import { FC, useMemo } from "react";
import { toTitleCase } from "../../utils/helpers";
import { Colors } from "../../utils/constants";

export interface ActionButtonProps {
  text: string;
  onClick: () => void;
  isPrimary: boolean;
}
const ActionButton: FC<ActionButtonProps> = ({ text, onClick, isPrimary }) => {
  const buttonText = useMemo(() => toTitleCase(text), [text]);

  return (
    <Button
      variant={"contained"}
      sx={{
        color: isPrimary ? Colors["--white"] : Colors["--gunmetal"],
        backgroundColor: isPrimary
          ? Colors["--orange-peal"]
          : Colors["--white-smoke"],
        width: "100%",
        borderRadius: "25px",
        fontWeight: 700,
        fontSize:'1.2em',
        textDecoration:'none',
        textTransform:'none',
        padding:'.5em',
        transition:'filter .3s ease',
        "&:hover":{
            filter:"brightness(1.05)"
        }
      }}
      onClick={onClick}
    >
      {buttonText}
    </Button>
  );
};
export default ActionButton;
