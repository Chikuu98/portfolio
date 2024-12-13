import React from "react";

interface SuccessAlertProps {
  message: string;
}

export const SuccessAlert: React.FC<SuccessAlertProps> = ({ message }) => {
  return (
    <div className="bg-green-500 text-white p-4 rounded-md shadow-md mb-4">
      <p className="font-semibold">{message}</p>
    </div>
  );
};
