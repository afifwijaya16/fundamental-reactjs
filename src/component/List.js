import React from "react";

// const List = () => {
//   const users = ["Albert", "Romy", "Shinta", "Hendra", "Fanny", "Desta"];
//   const displayUser = users.map((user) => user);
//   return <div>{displayUser}</div>;
// };

// index sebagai array dan tidak disarankan
// const List = () => {
//   const users = ["Albert", "Romy", "Shinta", "Hendra", "Fanny", "Desta"];
//   const displayUser = users.map((user, index) => <li key={index}>{user}</li>);
//   return <ul>{displayUser}</ul>;
// };

// const List = () => {
//   const users = [
//     { id: 1, name: "Albert", gender: "male" },
//     { id: 2, name: "Romy", gender: "male" },
//     { id: 3, name: "Shinta", gender: "female" },
//     { id: 4, name: "Hendra", gender: "male" },
//     { id: 5, name: "Fenny", gender: "female" },
//     { id: 6, name: "Desta", gender: "male" },
//   ];
//   const displayUser = users.map((user) => {
//     return (
//       <li key={user.id}>
//         {user.name} ({user.gender})
//       </li>
//     );
//   });
//   return <ul>{displayUser}</ul>;
// };

// tidak melalui props

// const List = () => {
//   const users = [
//     { id: 1, name: "Albert", gender: "male" },
//     { id: 2, name: "Romy", gender: "male" },
//     { id: 3, name: "Shinta", gender: "female" },
//     { id: 4, name: "Hendra", gender: "male" },
//     { id: 5, name: "Fenny", gender: "female" },
//     { id: 6, name: "Desta", gender: "male" },
//   ];
//   return (
//     <ul>
//       {users.length > 0 &&
//         users.map((user) => {
//           return (
//             <li key={user.id}>
//               {user.name} ({user.gender})
//             </li>
//           );
//         })}
//     </ul>
//   );
// };

// melalui props
const List = ({ users }) => {
  return (
    <ul>
      {users.length > 0 &&
        users.map((user) => {
          return (
            <li key={user.id}>
              {user.name} ({user.gender})
            </li>
          );
        })}
    </ul>
  );
};

export default List;
