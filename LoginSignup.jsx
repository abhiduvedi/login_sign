// import React, { useState } from 'react';
// import './loginsignup.css';

// const Loginsignup = () => {
//   const [counter, setCounter] = useState(0);
//   const [error, setError] = useState("");

//   const incrementHandler = () => {
//     if (counter >= 5) {
//       setError(""); 
//     }
//       else {
//         setCounter(counter + 1);
//         setError ("");

//       }
//     }
//   };

//   const decrementHandler = () => {
   
//     if (counter <= -5){
//     setError("show error");
//   } 
//   else{
//     setCounter(counter - 1);
//     setError("");

//   }
// }
    

  
//   return (
//     <div>
//       <div className="container">
//         <h1>Count: {counter}</h1>

//         {error && <div className="text-danger">{error}</div>}

//         <button onClick={incrementHandler}>inc</button>
//         <button onClick={decrementHandler}>dec</button>
//       </div>
//     </div>
//   );
// ;

// export default Loginsignup;
// import React, { useState } from 'react';
// import './loginsignup.css';

// const Loginsignup = () => {
//   const [counter, setCounter] = useState(0);
//   const [error, setError] = useState("");

//   const incrementHandler = () => {
//     if (counter >= 5) {
//       setError("Counter cannot exceed 5");
//     } else {
//       setCounter(counter + 1);
//       setError(""); // Clear error if within valid range
//     }
//   };

//   const decrementHandler = () => {
//     if (counter <= 0) {
//       setError("Counter cannot go below -5");
//     } else {
//       setCounter(counter - 1);
//       setError(""); // Clear error if within valid range
//     }
//   };

//   return (
//     <div>
//       <div className="container">
//         <h1>Count: {counter}</h1>

//         {error && <div className="text-danger">{error}</div>}

//         <button onClick={incrementHandler}>inc</button>
//         <button onClick={decrementHandler}>dec</button>
//       </div>
//     </div>
//   );
// };

// export default Loginsignup;
