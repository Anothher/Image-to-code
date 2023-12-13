import { useState, useEffect } from "react";

const hookMio = () => {
  const [value, setValue] = useState(false);

  useEffect(() => {
    console.log("Codigo a ejecutar ");
  }, []);
};
