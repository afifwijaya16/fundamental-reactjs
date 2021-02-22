import React from "react";

// const Conditional = () => {
//   const isLogin = false; // true/false
//   if (isLogin) return <div>Anda Suda Login</div>;
//   else return <div>Silahkan Login</div>;
// };

//
// const Conditional = () => {
//   const isLogin = true; // true/false
//   const message = isLogin && "And Sudah Login";
//   return <div>{message}</div>;
// };

// const Conditional = () => {
//   const isLogin = false; // true/false
//   const message = isLogin ? "Anda Sudah Login" : "Silahkan Login";
//   return <div>{message}</div>;
// };

// const Conditional = () => {
//   const isLogin = true;
//   return <div>{isLogin && "user sudah login"}</div>;
// };

// const Conditional = () => {
//   const isLogin = false;
//   return <div>{isLogin ? "user sudah login" : "silakan login!"}</div>;
// };

const Conditional = () => {
  const isLogin = true;
  const userName = "Alex";
  return (
    <div>
      {isLogin ? <b> user {userName} sudah login </b> : "silakan login!"}
    </div>
  );
};
export default Conditional;
