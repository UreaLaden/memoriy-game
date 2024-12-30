import { FC } from "react";
import { iSelectorIconProps } from "../utils/models";
import { SvgContainer } from "./SvgContainer.component";

export const ChurchIcon: FC<iSelectorIconProps> = (props) => (
  <SvgContainer {...props}>
    <g>
      <rect fill="none" height={props.vbHeight} width={props.vbWidth} />
    </g>
    <g>
      <g>
        <path fill={props.primaryFill} transform="scale(2.5)" d="M15,11V8l-4.25-2.55v-1.2h1.75v-1.5h-1.75V1h-1.5v1.75H7.5v1.5h1.75v1.2L5,8v3l-3,1v6h6v-2c0-1.1,0.9-2,2-2s2,0.9,2,2v2h6 v-6L15,11z M10,11.25c-0.69,0-1.25-0.56-1.25-1.25S9.31,8.75,10,8.75s1.25,0.56,1.25,1.25S10.69,11.25,10,11.25z" />
      </g>
    </g>
  </SvgContainer>
);
