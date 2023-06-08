// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { useForm } from "react-hook-form";

// import "./App.css";
// import axios from "axios";
// const Anmelden = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     console.log(data);
//     axios
//       .post(
//         "https://orgfeeder-backend.onrender.com/orgFeeder/api/user/register",
//         {
//           fullName: data.fullName,
//           username: data.username,
//           email: data.email,
//           password: data.password,
//           phoneNumber: data.phoneNumber,
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

//   return (
//     <div className="container">
//       <img className="logo" width={180} src="devzero-logo-2.webp" alt="Logo" />

//       <div className="haupt">
//         <div className="formen">
//           <>
//             <h1>
//               <span>SignUp</span>
//             </h1>
//             <p>We suggest using the email address you use at work</p>
//           </>
//           <br />
//           <div>
//             <form onSubmit={handleSubmit(onSubmit)}>
//               <div className="formular">
//                 <div className="f1">
//                   <label htmlFor="fullName">Full Name</label>
//                   <input
//                     id="fullName"
//                     {...register("fullName", { required: true, maxLength: 25 })}
//                   />
//                   {errors.fullName && errors.fullName.type === "required" && (
//                     <span>Full Name is required</span>
//                   )}
//                   {errors.fullName && errors.fullName.type === "maxLength" && (
//                     <span>Max length exceeded</span>
//                   )}
//                 </div>
//                 <br />
//                 <div className="f1">
//                   <label htmlFor="username">Username</label>
//                   <input
//                     id="username"
//                     {...register("username", { required: true, maxLength: 25 })}
//                   />
//                   {errors.username && errors.username.type === "required" && (
//                     <span>username is required</span>
//                   )}
//                   {errors.username && errors.username.type === "maxLength" && (
//                     <span>Max length exceeded</span>
//                   )}
//                 </div>
//                 <br />
//                 <div className="f1">
//                   <label htmlFor="email">Email</label>
//                   <input
//                     style={{ marginLeft: "24px" }}
//                     id="email"
//                     {...register("email", { required: true, maxLength: 25 })}
//                   />
//                   {errors.email && errors.email.type === "required" && (
//                     <span>email is required</span>
//                   )}
//                   {errors.email && errors.email.type === "maxLength" && (
//                     <span>Max length exceeded</span>
//                   )}
//                 </div>
//                 <br />
//                 <div className="f1">
//                   <label htmlFor="password">Password</label>
//                   <input
//                     id="password"
//                     {...register("password", { required: true, maxLength: 25 })}
//                   />
//                   {errors.password && errors.password.type === "required" && (
//                     <span>Password is required</span>
//                   )}
//                   {errors.password && errors.password.type === "maxLength" && (
//                     <span>Max length exceeded</span>
//                   )}
//                 </div>
//                 <br />
//                 <div className="f1">
//                   <label htmlFor="phoneNumber">Phone Number</label>
//                   <input
//                     id="phoneNumber"
//                     {...register("phoneNumber", {
//                       required: true,
//                       maxLength: 25,
//                     })}
//                   />
//                   {errors.phoneNumber &&
//                     errors.phoneNumber.type === "required" && (
//                       <span>Phone Number is required</span>
//                     )}
//                   {errors.phoneNumber &&
//                     errors.phoneNumber.type === "maxLength" && (
//                       <span>Max length exceeded</span>
//                     )}
//                 </div>
//               </div>
//               <div className="tastatur">
//                 <button> SignUp</button>
//               </div>
//               <br />
//               <p>
//                 Already have an account? <Link to="/">Login</Link>
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

// export default Anmelden;
