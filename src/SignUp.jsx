// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";

// import "react-toastify/dist/ReactToastify.css";
// // import "./App.css";
// const SignUp = () => {
//   const [firstName, setFirstname] = useState("");
//   const [lastName, setLastname] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [passwordConf, setPasswordconf] = useState("");
//   const [allError, setallError] = useState(false);
//   const [passError, setpassError] = useState(false);
//   const submit = (event) => {
//     if (
//       firstName == "" ||
//       firstName == undefined ||
//       lastName == "" ||
//       lastName == undefined ||
//       email == undefined ||
//       email == "" ||
//       password == undefined ||
//       password == "" ||
//       passwordConf == undefined ||
//       passwordConf == ""
//     ) {
//       setallError(true);
//       console.log("if");
//     } else if (password != passwordConf) {
//       console.log("else");
//       setpassError(true);
//     }
//     console.log(firstName, lastName, email, password, passwordConf);
//     event.preventDefault();
//   };
//   const notify = (msg) => toast.error(msg);

//   return (
//     <div className="container">
//       <ToastContainer />
//       <div>
//         <img
//           width={180}
//           style={{ marginLeft: "50px" }}
//           src="devzero-logo-2.webp"
//           alt="Logo"
//         />
//       </div>

//       <div>
//         <div className="Hari1">
//           <div style={{ textAlign: "center" }}>
//             <h1>
//               {" "}
//               <span>SignUp</span>
//             </h1>
//             <p>We suggest using the email address you use at work</p>
//           </div>
//           <br />
//           <div>
//             <form
//               onSubmit={submit}
//               style={{
//                 marginLeft: "150px",
//               }}
//             >
//               {allError == true ? (
//                 <p style={{ marginTop: "40px", color: "red" }}>
//                   {notify("Full Name is required")}
//                 </p>
//               ) : (
//                 " "
//               )}
//               {passError == true ? (
//                 <p style={{ marginTop: "40px", color: "red" }}>
//                   Password not Matched{" "}
//                 </p>
//               ) : (
//                 ""
//               )}
//               <span> First Name</span> <br />
//               <input
//                 placeholder="Enter First Name"
//                 onChange={(e) => setFirstname(e.target.value)}
//                 style={{ marginBottom: "10px" }}
//                 size={40}
//               />
//               <br />
//               <span>Last Name</span> <br />
//               <input
//                 placeholder="Enter Last Name"
//                 onChange={(e) => setLastname(e.target.value)}
//                 style={{ marginBottom: "10px" }}
//                 size={40}
//               />
//               <br />
//               <span>E-Mail Address</span> <br />
//               <input
//                 placeholder="Enter Email Address"
//                 onChange={(e) => setEmail(e.target.value)}
//                 style={{ marginBottom: "10px" }}
//                 size={40}
//               />
//               <br />
//               <span> Password</span> <br />
//               <input
//                 placeholder="Enter Password"
//                 onChange={(e) => setPassword(e.target.value)}
//                 style={{ marginBottom: "10px" }}
//                 size={40}
//               />
//               <br />
//               <span> Confirm Password </span>
//               <br />
//               <input
//                 placeholder="Re-enter Password"
//                 onChange={(e) => setPasswordconf(e.target.value)}
//                 style={{ marginBottom: "10px" }}
//                 size={40}
//               />
//               <div>
//                 <button>SignUp</button>
//               </div>
//               <p>
//                 Already have an account?{" "}
//                 <Link to="/" className="ans">
//                   Login
//                 </Link>
//               </p>
//               <h5>
//                 By creating account you agree to our{" "}
//                 <a href="#" className="ans">
//                   {" "}
//                   Term of services{" "}
//                 </a>{" "}
//                 and{" "}
//                 <a href="#" className="ans">
//                   {" "}
//                   Privacy Policy{" "}
//                 </a>{" "}
//               </h5>
//             </form>
//           </div>
//         </div>
//         <div className="Hari2">
//           <img src="login.jpg" alt="" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
