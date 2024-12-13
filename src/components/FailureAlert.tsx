import React from "react";

interface FailureAlertProps {
  message: string;
}

export const FailureAlert: React.FC<FailureAlertProps> = ({ message }) => {
  return (
    <div className="bg-red-500 text-white p-4 rounded-md shadow-md mb-4">
      <p className="font-semibold">{message}</p>
    </div>
  );
};
