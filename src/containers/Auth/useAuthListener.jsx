import { useEffect, useState } from "react";

const useAuthListener = () => {
  const [user, setUser] = useState(localStorage.getItem("user"));

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === "user") {
        setUser(localStorage.getItem("user"));
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return user;
};

export default useAuthListener;
