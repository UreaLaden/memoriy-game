import { SelectorState } from "./models";

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
  ACTIVE
}
