import { FC } from "react";
import { iSelectorIconProps } from "../utils/models";
import { SvgContainer } from "./SvgContainer.component";

export const CommandIcon: FC<iSelectorIconProps> = (props) => (
  <SvgContainer {...props}>
    <g>
      <rect fill="none" height={props.vbHeight} width={props.vbWidth} />
    </g>
    <g>
      <path
        transform="scale(2.75)"
        fill={props.primaryFill}
        d="M14.25,11.5H13v-3h1.25C15.77,8.5,17,7.27,17,5.75S15.77,3,14.25,3S11.5,4.23,11.5,5.75V7h-3V5.75C8.5,4.23,7.27,3,5.75,3 S3,4.23,3,5.75S4.23,8.5,5.75,8.5H7v3H5.75C4.23,11.5,3,12.73,3,14.25S4.23,17,5.75,17s2.75-1.23,2.75-2.75V13h3v1.25 c0,1.52,1.23,2.75,2.75,2.75S17,15.77,17,14.25S15.77,11.5,14.25,11.5z M13,5.75c0-0.69,0.56-1.25,1.25-1.25s1.25,0.56,1.25,1.25 S14.94,7,14.25,7H13V5.75z M5.75,7C5.06,7,4.5,6.44,4.5,5.75S5.06,4.5,5.75,4.5S7,5.06,7,5.75V7H5.75z M7,14.25 c0,0.69-0.56,1.25-1.25,1.25c-0.69,0-1.25-0.56-1.25-1.25S5.06,13,5.75,13H7h0V14.25z M8.5,11.5L8.5,11.5l0-3h3v3H8.5z M14.25,15.5 c-0.69,0-1.25-0.56-1.25-1.25V13h1.25c0.69,0,1.25,0.56,1.25,1.25S14.94,15.5,14.25,15.5z"
      />
    </g>
  </SvgContainer>
);
