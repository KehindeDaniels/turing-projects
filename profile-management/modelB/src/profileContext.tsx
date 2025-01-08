// profileContext.ts
import { createContext, useState, useEffect } from "react";
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

interface ProfileContextProps {
  children: React.ReactNode;
}

interface ProfileContextValue {
  profile: Profile;
  updateProfile: (newProfile: Profile) => void;
}

const ProfileContext = createContext<ProfileContextValue | null>(null);

const ProfileProvider = ({ children }: ProfileContextProps) => {
  const [profile, setProfile] = useState<Profile>(getInitialProfile);

  useEffect(() => {
    const storedProfile = localStorage.getItem(PROFILE_KEY);
    if (storedProfile) {
      setProfile(JSON.parse(storedProfile));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
  }, [profile]);

  const updateProfile = (newProfile: Profile) => {
    setProfile(newProfile);
  };

  return (
    <ProfileContext.Provider value={{ profile, updateProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

export { ProfileProvider, ProfileContext };
