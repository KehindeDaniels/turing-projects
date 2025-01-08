// ProfileInfo.tsx
import React from "react";
import { Profile } from "./profile";

interface Props {
  profile: Profile;
}

const ProfileInfo: React.FC<Props> = ({ profile }) => {
  return (
    <div>
      <h2>Profile Information</h2>
      <p>Name: {profile.name}</p>
      <p>Email: {profile.email}</p>
      <p>Bio: {profile.bio}</p>
      <p>Notification Preferences: {profile.notificationPreferences}</p>
    </div>
  );
};

export default ProfileInfo;
