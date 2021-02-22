import React from "react";

// const ButtonHandle = () => {
//   const alert = () => window.alert(123);
//   return (
//     <div>
//       {/* <button onClick={() => window.alert(123)}> info </button> */}
//       {/* <button onClick={window.alert(123)}> info </button> */}
//       {/* <button onClick={alert}> info </button> */}
//       {/* <button onClick={() => alert()}> info </button> */}
//     </div>
//   );
// };

// mengubah kata info ke clicked
const ButtonHandle = () => {
  const ubah = (obj) => {
    const btn = obj.target;
    if (btn.innerText === "Info") {
      btn.innerText = "Clicked";
    } else {
      btn.innerText = "Info";
    }
  };
  return (
    <div>
      {/* <button onClick={(e) => ubah(e)}>Info</button> */}
      <button onClick={ubah}>Info</button>
    </div>
  );
};
export default ButtonHandle;
