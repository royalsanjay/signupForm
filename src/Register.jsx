// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import "./App.css";
// const Register = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   const [passError, setpassError] = useState(false);
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

//     if (data.password !== data.confPass) {
//       setpassError(true);
//     }
//     console.log(data);
//   };

//   return (
//     <div className="container">
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
//             <form onSubmit={handleSubmit(onSubmit)}>
//               {passError === true ? (
//                 <p
//                   style={{
//                     marginLeft: "320px",
//                     color: "red",
//                   }}
//                 >
//                   Password not Matched{" "}
//                 </p>
//               ) : (
//                 ""
//               )}
//               <label htmlFor="firstName">Firstname</label>
//               <input
//                 id="firstName"
//                 {...register("firstName", { required: true, maxLength: 25 })}
//               />
//               {errors.firstName && errors.firstName.type === "required" && (
//                 <span>Firstname is required</span>
//               )}
//               {errors.firstName && errors.firstName.type === "maxLength" && (
//                 <span>Max length exceeded</span>
//               )}
//               <br />
//               <label htmlFor="lastName">Lastname</label>
//               <input
//                 id="lastName"
//                 {...register("lastName", { required: true, maxLength: 25 })}
//               />
//               {errors.lastName && errors.lastName.type === "required" && (
//                 <span>Lastname is required</span>
//               )}
//               {errors.LastName && errors.LastName.type === "maxLength" && (
//                 <span>Max length exceeded</span>
//               )}
//               <br />
//               <label htmlFor="Email">Email</label>
//               <input
//                 style={{ marginLeft: "24px" }}
//                 id="Email"
//                 {...register("Email", { required: true, maxLength: 25 })}
//               />
//               {errors.Email && errors.Email.type === "required" && (
//                 <span>Email is required</span>
//               )}
//               {errors.Email && errors.Email.type === "maxLength" && (
//                 <span>Max length exceeded</span>
//               )}
//               <br />
//               <label htmlFor="password">Password</label>
//               <input
//                 id="password"
//                 {...register("password", { required: true, maxLength: 25 })}
//               />
//               {errors.password && errors.password.type === "required" && (
//                 <span>Password is required</span>
//               )}
//               {errors.password && errors.password.type === "maxLength" && (
//                 <span>Max length exceeded</span>
//               )}
//               <br />
//               <label style={{ marginRight: "41px" }} htmlFor="confPass">
//                 Confirm Password
//               </label>
//               <input
//                 id="confPass"
//                 {...register("confPass", { required: true, maxLength: 25 })}
//               />
//               {errors.confPass && errors.confPass.type === "required" && (
//                 <span>Username is required</span>
//               )}
//               {errors.confPass && errors.confPass.type === "maxLength" && (
//                 <span>Max length exceeded</span>
//               )}
//               <br />
//               <div>
//                 <button className="btnn1"> SignUp</button>
//               </div>
//               <br />
//               <p className="pes">
//                 Already have an account?{" "}
//                 <Link to="/" className="ans">
//                   Login
//                 </Link>
//               </p>
//               <h5 className="pes">
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
//           <img src="coding-freak.gif" alt="" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;
