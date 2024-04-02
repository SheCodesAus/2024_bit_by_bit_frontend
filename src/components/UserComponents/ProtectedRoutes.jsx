// import { Navigate } from 'react-router-dom';

// const ProtectedRoute = ({ children }) => {
//   // Retrieve token from storage (e.g., local storage)
//   const token = localStorage.getItem('authToken');
//   // Decode or parse the token to extract authentication information
//   const decodedToken = decodeToken(token);
//   // Check if the user is authenticated and is an admin based on token information
//   const isAuthenticated = decodedToken && decodedToken.exp > Date.now() / 1000;
//   const isAdmin = decodedToken && decodedToken.is_admin;
//   if (!isAuthenticated) {
//     return <Navigate to="/home" />;
//   }
//   if (!isAdmin) {
//     // Redirect to unauthorized page or handle unauthorized access
//     return <Navigate to="/unauthorized" />;
//   }
//   return children;
// };
// export default ProtectedRoute;