import React, { useEffect } from "react";

function UseRef() {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [value, setValue] = React.useState("");

  useEffect(() => {
    console.log("Component mounted or updated");
  });

  const handleClick = () => {
    if (inputRef.current) {
      setValue(inputRef.current.value);
    }
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Get Input Value</button>
      <p>Input Value: {value}</p>
    </div>
  );
}
export default UseRef;
