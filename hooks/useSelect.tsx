import React from "react";

export const useSelect = (options: any[]) => {
  const [value, setValue] = React.useState(null);

  const filterOptions = (inputValue: string) => {
    return options.filter((i) =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const loadOptions = (
    inputValue: string,
    callback: (options: any[]) => void
  ) => {
    setTimeout(() => {
      callback(filterOptions(inputValue));
    }, 1000);
  };

  return { loadOptions, value, setValue };
};
