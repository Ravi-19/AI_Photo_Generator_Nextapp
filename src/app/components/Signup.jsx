

// "use client";
// import { useRouter } from 'next/navigation';
// import { useState } from "react";
// import { auth } from "../firebase";
// import {
//   createUserWithEmailAndPassword,
  
// } from "firebase/auth";

// const SignUp = () => {
//   const [username, setUsername] = useState(""); // New state for Username
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const router = useRouter(); // Initialize the router

//   const handleSignUpEmail = async (e) => {
//     e.preventDefault();
//     try {
//       //   console.log("Input Username:", username);
//       // console.log("Input Email:", email);
//       // console.log("Input Password:", password);
//       const userCredential = await createUserWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//       console.log("User signed up:", userCredential.user);
//       // save the username in your database or user profile

//       if (userCredential) {
//         // Redirect to the desired page when the button is clicked
//         router.push("/login");
//       } else {
//         router.push("/signup");
//       }
//     } catch (error) {
//       // console.error("Error signing up:", error.message);
//     }
//   };

//   return (
//     <div className="w-full h-full p-[50%] bg-gray">
//       <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
//         <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//           <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
//             Sign up
//           </h2>
//           <form onSubmit={handleSignUpEmail} className="space-y-4">
//             <input
//               type="text"
//               placeholder="Username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//             <button onClick={handleSignUpEmail}
//               type="submit"
//               className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
//             >
//               Register
//             </button>
//           </form>

//   {/* <p>Already have account click  click me button</p>
//           <button
//             onClick={router.push('/login')}
//             className="text-blue-600 hover:underline focus:outline-none"
//           >
//             click me 
//           </button> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
