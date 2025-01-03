import { FC } from "react";
import { iSelectorIconProps } from "../utils/models";
import { SvgContainer } from "./SvgContainer.component";

export const GamePadIcon: FC<iSelectorIconProps> = (props) => (
  <SvgContainer {...props}>
    <g>
      <rect fill="none" height={props.vbHeight} width={props.vbWidth} />
    </g>
    <g>
      <path fill={props.primaryFill} transform="scale(2.75)" d="M7.98,16c-0.1-0.24-1.23-3.01-1.23-5.5c0-5.46,2.49-7.52,3.25-8c0.76,0.48,3.25,2.54,3.25,8c0,2.49-1.13,5.26-1.23,5.5 H7.98z M11.5,9c0-0.82-0.67-1.5-1.5-1.5C9.18,7.5,8.5,8.18,8.5,9c0,0.83,0.68,1.5,1.5,1.5C10.83,10.5,11.5,9.83,11.5,9z M4.58,11.8 C4.21,12.08,4,12.52,4,12.98V18l3.09-1.54c-0.5-1.18-1.24-3.4-1.33-5.57L4.58,11.8z M15.42,11.8c0.37,0.28,0.58,0.72,0.58,1.18V18 l-3.09-1.54c0.5-1.18,1.24-3.4,1.33-5.57L15.42,11.8z" />
    </g>
  </SvgContainer>
);
