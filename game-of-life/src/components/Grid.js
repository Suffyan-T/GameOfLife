import React from 'react';
import Cell from './Cell';


const Grid = props => {
    const width = props.cols * 14;
    let cellClass = "";
    const rowsArr = props.gridFull.map((rowArr, rowIdx) =>
      rowArr.map((item, colIdx) => {
        const cellId = `${rowIdx}_${colIdx}`;
  
        cellClass = props.gridFull[rowIdx][colIdx] ? "cell on" : "cell off";
        return (
            <Cell
                cellClass={cellClass}
                key={cellId}
                cellId={cellId}
                row={rowIdx}
                col={colIdx}
                selectCell={props.selectCell}
            />
        );
      })
    );

    return (
        <div className="grid" style={{ width }}>
          {rowsArr}
        </div>
      );
    };

export default Grid;