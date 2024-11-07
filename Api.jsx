// 
// import React, { useState, useEffect } from "react";

// function Api() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
// //     fetch("https://jsonplaceholder.typicode.com/users")
// //       .then((response) => response.json())
// //       .then((data) => setUsers(data))
// //       .catch((error) => console.error("Error fetching users:", error));
// //   }, []);


// //   console.log(users,'->')
// //   return (
// //     <div>
// //       {users.map((user) => 
// //       (
// //         <div key={user.id}>{user.name}</div>
// //       ))}
// //     </div>
// //   );
// // }

// // export default Api;
// import React, { useState, useEffect } from "react";

// function Api() {
//   const [users, setUsers] = useState([]);
//   const [isSorted, setIsSorted] = useState(false); // State to track sorting

//   useEffect(() => {
//     // Fetch user data from the API
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((data) => setUsers(data))
//       .catch((error) => console.error("Error fetching users:", error));
//   }, []);

//   // Function to sort users by name when button is clicked
//   const sortByName = () => {
//     const sortedUsers = [...users].sort((a, b) => a.name.localeCompare(b.name));
//     setUsers(sortedUsers);
//     setIsSorted(true); // Track sorting state
//   };

//   return (
//     <div>
//       <button onClick={sortByName}>Sort by Name</button> {/* Sort button */}
      
//       {users.map((user) => (
//         <div key={user.id}>{user.name}</div>
//       ))}
//     </div>
//   );
// }

// export default Api;
// import React, { useState, useEffect } from "react";

// function Api() {
//   const [users, setUsers] = useState([]);
//   const [isSorted, setIsSorted] = useState(false); // State to track sorting

//   useEffect(() => {
//     // Fetch user data from the API
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((data) => setUsers(data))
//       .catch((error) => console.error("Error fetching users:", error));
//   }, []);

//   // Function to sort users by name when button is clicked
//   const sortByName = () => {
//     const sortedUsers = [...users].sort((a, b) => a.name.localeCompare(b.name));
//     setUsers(sortedUsers);
//     setIsSorted(true); // Track sorting state
//   };

//   return (
//     <div>
//       <button onClick={sortByName}>Sort by Name</button> {/* Sort button */}
      
//       {users.map((user) => (
//         <div key={user.id}>{user.name}</div>
//       ))}
//     </div>
//   );
// }

// export default Api;

import React, { useState, useEffect } from "react";

function Api() {
  const [users, setUsers] = useState([]);
  const [isSorted, setIsSorted] = useState(false); 

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  
  const sortByName = () => {
    const sortedUsers = [...users].sort((a, b) => a.name.localeCompare(b.name));
    setUsers(sortedUsers);
    setIsSorted(true); 
  };

  return (
    <div>
      <button onClick={sortByName}>Sort by Name</button> 
      
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}

export default Api;
