// import axios from "axios";
// import { useForm } from "react-hook-form";
// import "./App.css";
// import { Link } from "react-router-dom";
// const Login = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   const onSubmit = (data) => {
//     axios
//       .post(
//         "https://orgfeeder-backend.onrender.com/orgFeeder/api/user/login",
//         {
//           email: data.userName,
//           password: data.password,
//         },
//         { headers: { "Content-Type": "application/json" } }
//       )
//       .then((response) => {
//         console.log(response);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   // };

//   return (
//     <div className="container">
//       <div className="navbar">
//         <div className="logo">
//           <img width={150} src="devzero-logo-2.webp" alt="Logo" />
//         </div>
//         <div>
//           <ul className="menu">
//             <li>
//               {" "}
//               <a href="/home"> Home</a>
//             </li>
//             <li>
//               {" "}
//               <a href="/services"> Services</a>
//             </li>
//             <li>
//               {" "}
//               <a href="/gallery"> Gallery</a>
//             </li>
//             <li>
//               {" "}
//               <a href="/contact us"> Contact Us</a>
//             </li>
//           </ul>
//         </div>
//         <div>
//           <ul className="menu">
//             {" "}
//             <li>
//               <a href="#"> Login</a>
//             </li>
//             <li>
//               <a href="#"> Sign Up</a>
//             </li>{" "}
//           </ul>
//         </div>
//       </div>

//       <div className="haupt">
//         <div className="formen">
//           <>
//             <h1>
//               <span>Login</span>
//             </h1>
//             <p>We suggest using the email address you use at work</p>
//           </>
//           <br />

//           <div>
//             <form onSubmit={handleSubmit(onSubmit)}>
//               <div className="formular">
//                 <div className="f1">
//                   <label htmlFor="userName">Enter Username</label>
//                   <input
//                     id="userName"
//                     {...register("userName", { required: true, maxLength: 25 })}
//                   />
//                   {errors.userName && errors.userName.type === "required" && (
//                     <span>Username is required</span>
//                   )}
//                 </div>
//                 <br />
//                 <div className="f1">
//                   <label htmlFor="password">Password</label>
//                   <input
//                     id="password"
//                     style={{ marginLeft: "42px" }}
//                     {...register("password", { required: true, minLength: 5 })}
//                   />
//                   {errors.password && errors.password.type === "required" && (
//                     <span>Password is required</span>
//                   )}
//                 </div>
//                 <br />
//               </div>
//               <div className="tastatur">
//                 <button>Login</button>
//               </div>

//               <br />
//               <p>
//                 Already have an account? <Link to="/anmelden">Sign Up</Link>
//                 <br />
//                 By creating account you agree to our{" "}
//                 <a href="#">Term of services</a> and
//                 <a href="#"> Privacy Policy</a>
//               </p>
//             </form>
//           </div>
//         </div>
//         <div className="bild">
//           <img style={{ width: "100%" }} src="coding-freak.gif" alt="" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
