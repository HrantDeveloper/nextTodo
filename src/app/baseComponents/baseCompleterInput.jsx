import React from "react";

const BaseCompleterInput = ({ data, func, date }) => {
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
