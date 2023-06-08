// import React, { useState } from "react";
// import axios from "axios";

// const Sonntag = () => {
//   const [Data, setData] = useState([]);

//   async function apiGet() {
//     const response = await axios.get(
//       "https://api.github.com/users/royalsanjay"
//     );
//     // console.log(response.data);
//     if (response) {
//       setData(response.data);
//     }
//   }

//   return (
//     <div className="container">
//       <form>
//         {" "}
//         <label htmlFor="Name ">Full Name</label>
//         <input type="text" value={Data.name} />
//         <label htmlFor="username">Select Username</label>
//         <input type="text" value={Data.login} />
//       </form>

//       <button
//         onClick={apiGet}
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           marginLeft: "300px",
//         }}
//       >
//         Fetch API
//       </button>
//       {/* <pre>{JSON.stringify(Data, null, 2)}</pre> */}
//       {/* <pre> */}
//       {/* {Data.name} */}
//       {/* {Data
//           ? Data.map((d) => {
//               <p>{d.name}</p>;
//             })
//           : "no data"} */}
//       {/* </pre> */}
//     </div>
//   );
// };

// export default Sonntag;
