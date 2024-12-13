import { useState, useCallback } from "react";

export const useAlert = () => {
  const [alert, setAlert] = useState<{ type: string; message: string } | null>(null);

  const showAlert = useCallback((type: string, message: string) => {
    setAlert({ type, message });

    setTimeout(() => {
      setAlert(null);
    }, 5000);
  }, []);

  return { alert, showAlert };
};
