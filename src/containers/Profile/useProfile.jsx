import axios from "axios";
import { useState } from "react";

const useProfile = () => {
  const [profile, setProfile] = useState(null);
  const getProfile = async () => {
    try {
      const id = localStorage.getItem("user");
      const { data } = await axios.get(
        `http://localhost:5500/api/v1/profile/${id}`
      );
      console.log(data);
      setProfile(data);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    getProfile,
    profile,
  };
};

export default useProfile;
