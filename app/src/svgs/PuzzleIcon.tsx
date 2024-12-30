import { FC } from "react";
import { iSelectorIconProps } from "../utils/models";
import { SvgContainer } from "./SvgContainer.component";
import Extension from "@mui/icons-material/Extension";

export const PuzzleIcon: FC<iSelectorIconProps> = (props) => (
  <SvgContainer {...props}>
    <Extension
      sx={{
        color: props.primaryFill || "currentColor",
        fontSize: props.vbWidth || 56,
      }}
    />
  </SvgContainer>
);
