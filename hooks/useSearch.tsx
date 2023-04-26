import React, { useState } from "react";

const useSearch = () => {
  const [isFocus, setIsFocus] = useState(false)
  return {
    isFocus,
    setIsFocus
  };
};

export default useSearch;
