// useProfile.ts
import { useState, useEffect } from "react";
import { Profile } from "./profile";

const PROFILE_KEY = "profile";

const getInitialProfile = (): Profile => {
  const storedProfile = localStorage.getItem(PROFILE_KEY);
  return storedProfile
    ? JSON.parse(storedProfile)
    : {
        name: "",
        email: "",
        bio: "",
        notificationPreferences: "email",
      };
};

const useProfile = () => {
  const [profile, setProfile] = useState<Profile>(getInitialProfile);

  useEffect(() => {
    localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
  }, [profile]);

  const updateProfile = (newProfile: Profile) => {
    setProfile(newProfile);
  };

  return { profile, updateProfile };
};

export default useProfile;
