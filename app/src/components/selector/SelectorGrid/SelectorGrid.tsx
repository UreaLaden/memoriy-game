import { FC, useMemo } from "react";
import Selector from "../Selector";
import { SelectorMode } from "../../../utils/models";
import { SelectorGridContainer } from "./SelectorGrid.component";

export interface SelectorGridProps {
  gridSize: 4 | 6;
  gridMode: SelectorMode;
}
const SelectorGrid: FC<SelectorGridProps> = ({ gridSize, gridMode }) => {
  const Grid = useMemo(() => {
    const cells = Array.from({ length: gridSize ** 2 }).map((_, i) => i + 1);
    const mid = Math.ceil(cells.length / 2);
    const values = cells.filter((val, idx) => idx < mid && val > 0);
    const grid = values.concat(values);

    return grid.map((val, idx) => {
      return (
        <div key={idx}>
          <Selector
            mode={gridMode}
            gridSize={gridSize}
            state={"hidden"}
            value={val}
            onClick={() => console.log("Clicked " + val)}
          />
        </div>
      );
    });
  }, [gridMode, gridSize]);
  return (
    <SelectorGridContainer gridsize={gridSize}>{Grid}</SelectorGridContainer>
  );
};

export default SelectorGrid;
