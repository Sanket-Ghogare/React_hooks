import React, { useState, useCallback } from "react";
import Title from "./Title";
import Count from "./Count";
import BUtton from "./BUtton";

const Parentcomponents = () => {
  const [age, setAge] = useState(24);
  const [salary, setSalary] = useState(50000);

  const incrementage = useCallback(() => {
    setAge(age + 4);
  }, [age]);

  const incrementsalary = useCallback(() => {
    setSalary(salary + 400);
  }, [salary]);
  return (
    <>
      <div>
        <Title />
        <Count text="age" count={age} />
        <BUtton handleCLick={incrementage}>increment age</BUtton>

        <Count text="salary" count={salary} />
        <BUtton handleCLick={incrementsalary}>increment Salary</BUtton>
      </div>
    </>
  );
};

export default Parentcomponents;
