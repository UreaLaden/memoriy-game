import { FC, useMemo } from "react";
import { iSelectorIconProps } from "../utils/models";
import { SvgIcon } from "@mui/material";

export interface iSVGContainerProps extends iSelectorIconProps {
  children: React.ReactNode;
}

export const SvgContainer: FC<iSVGContainerProps> = (props) => {
  const viewBox = useMemo(() => {
    const x = props.vbX || 0;
    const y = props.vbY || 0;
    const height = props.vbHeight || 56;
    const width = props.vbWidth || 56;

    return `${x} ${y} ${width} ${height}`;
  }, [props.vbX, props.vbY, props.vbHeight, props.vbWidth]);
  return (
    <SvgIcon
      viewBox={viewBox}
      style={{ width: "60%", height: "60%" }}
      preserveAspectRatio="none"
    >
      {props.children}
    </SvgIcon>
  );
};
