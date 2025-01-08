// App.tsx
import React from "react";
import ProfileSettings from "./ProfileSettings";
import ProfileInfo from "./ProfileInfo";
import useProfile from "./useProfile";

const App: React.FC = () => {
  const { profile, updateProfile } = useProfile();

  return (
    <div>
      <ProfileSettings profile={profile} updateProfile={updateProfile} />
      <ProfileInfo profile={profile} />
    </div>
  );
};

export default App;
