import { SelectorState } from "./models";

export const ColorMap = new Map<SelectorState,string>([
    ['active','#FDA214'],
    ['inactive','#BCCED9'],
    ['hidden','#304859']
])

export const enum GameState{
    START,
    PAUSE,
    END
}