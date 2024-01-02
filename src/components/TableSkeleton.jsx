import React from 'react';

const TableSkeleton = ({numCoulmns, numRows, cl, cd}) => {
  
  return (
    <div className="py-6">
      <table className={`min-w-full border border-[#6b6b6b] ${cd}`}>
        <tbody>
          {Array.from({ length: numRows }, (_, rowIndex) => (
            <tr key={rowIndex}>
              {Array.from({ length: numCoulmns }, (_, rowIndex) => (
                <td className={`py-[3.5vh] px-[2vw] border border-[#2b2b2b] ${cl}`}></td>
              ))}  
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableSkeleton;
