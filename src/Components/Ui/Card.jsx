// export function Card({ className = "", children }) {
//   return (
//     <div className={`rounded-2xl shadow-lg ${className}`}>
//       {children}
//     </div>
//   );
// }

// export function CardContent({ className = "", children }) {
//   return (
//     <div className={`p-4 ${className}`}>
//       {children}
//     </div>
//   );
// }


// src/Components/UI/Card.jsx

import React from "react";

export const Card = ({ children, className }) => {
  return (
    <div className={`rounded-xl shadow-lg ${className}`}>
      {children}
    </div>
  );
};

export const CardContent = ({ children, className }) => {
  return (
    <div className={`p-4 ${className}`}>
      {children}
    </div>
  );
};
