import React, { createContext, useContext, ReactNode } from "react";

// Define the context type
interface AgeContextType {
  age: number;
}

// Create the context with an undefined initial value
const AgeContext = createContext<AgeContextType | undefined>(undefined);

// Function to calculate age
const calculateAge = (birthDate: string): number => {
  const birth = new Date(birthDate);
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
};

// Provider props type
interface AgeProviderProps {
  children: ReactNode;
}

// AgeProvider component
export const AgeProvider: React.FC<AgeProviderProps> = ({ children }) => {
  const age = calculateAge("1998-09-04");

  return (
    <AgeContext.Provider value={{ age }}>
      {children}
    </AgeContext.Provider>
  );
};

// Hook to use AgeContext
export const useAge = (): AgeContextType => {
  const context = useContext(AgeContext);
  if (!context) {
    throw new Error("useAge must be used within an AgeProvider");
  }
  return context;
};
