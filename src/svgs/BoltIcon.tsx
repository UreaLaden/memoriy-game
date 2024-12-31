import { FC } from "react";
import { iSelectorIconProps } from "../utils/models";
import { SvgContainer } from "./SvgContainer.component";
import Bolt from "@mui/icons-material/Bolt";

export const BoltIcon: FC<iSelectorIconProps> = (props) => (
  <SvgContainer {...props}>
    <Bolt
      sx={{
        color: props.primaryFill || "currentColor",
        fontSize: props.vbWidth || 56,
      }}
    />
  </SvgContainer>
);
