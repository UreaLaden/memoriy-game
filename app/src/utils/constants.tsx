import { FC } from "react";
import { iSelectorIconProps, SelectorState } from "./models";
import {
  BoltIcon,
  BrainIcon,
  BugIcon,
  FlaskIcon,
  FutbolIcon,
  GamePadIcon,
  LiraIcon,
  MoonIcon,
  SnowflakeIcon,
  SpockIcon,
  SunIcon,
  LinuxIcon,
  PuzzleIcon,
  OtterIcon,
  ChurchIcon,
  ChairIcon,
  CommandIcon,
  DumbellIcon,
} from "../svgs";

export const MOBILE_WIDTH = 576;
export const TABLET_WIDTH = 1024;
export const DESKTOP_WIDTH = 1440;
export const LARGE_DESKTOP_WIDTH = 1920;

export const Colors = {
  "--orange-peal": "#FDA214",
  "--charcoal": "#304859",
  "--columbia-blue": "#BCCED9",
  "--gunmetal": "#152938",
  "--air-force-blue": "#7191A5",
  "--white": "#FCFCFC",
  "--white-smoke": "#F2F2F2",
  "--air-super-blue": "#6395B8",
};

export const ColorMap = new Map<SelectorState, string>([
  ["active", Colors["--orange-peal"]],
  ["inactive", Colors["--columbia-blue"]],
  ["hidden", Colors["--charcoal"]],
]);

export const enum GameState {
  START,
  PAUSE,
  END,
  ACTIVE,
}

export const GraphicMap: Map<number, FC<iSelectorIconProps>> = new Map([
  [1, BugIcon],
  [2, FlaskIcon],
  [3, FutbolIcon],
  [4, LiraIcon],
  [5, MoonIcon],
  [6, SnowflakeIcon],
  [7, SpockIcon],
  [8, SunIcon],
  [9, BoltIcon],
  [10, GamePadIcon],
  [11, BrainIcon],
  [12, LinuxIcon],
  [13, PuzzleIcon],
  [14, OtterIcon],
  [15, ChurchIcon],
  [16, ChairIcon],
  [17, CommandIcon],
  [18, DumbellIcon],
]);
