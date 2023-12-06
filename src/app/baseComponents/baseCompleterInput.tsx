import React from "react";

const BaseCompleterInput :React.FC<{data:itemDataType,func:any,date:string}>= ({ data, func, date }) => {
  return (
    <input
      type="checkbox"
      id="completed"
      name="completed"
      checked={data.completed.boolean ? true : false}
      onChange={(e) => {
        func(data.id, {
          ...data,
          completed: {
            boolean: !data.completed.boolean,
            date: date,
          },
        });
      }}
    />
  );
};

export default BaseCompleterInput;
