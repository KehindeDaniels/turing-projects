// ProfileSettingsComponent.tsx
import React, { useState } from "react";
import { ProfileSettings, initialProfileSettings } from "./ProfileSettings";

const ProfileSettingsComponent: React.FC = () => {
  const [profileSettings, setProfileSettings] = useState<ProfileSettings>(
    initialProfileSettings
  );

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProfileSettings({
      ...profileSettings,
      name: event.target.value,
    });
  };

  const handleBioChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setProfileSettings({
      ...profileSettings,
      bio: event.target.value,
    });
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProfileSettings({
      ...profileSettings,
      email: event.target.value,
    });
  };

  const handleEmailNotificationsChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setProfileSettings({
      ...profileSettings,
      notifications: {
        ...profileSettings.notifications,
        email: event.target.checked,
      },
    });
  };

  const handlePushNotificationsChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setProfileSettings({
      ...profileSettings,
      notifications: {
        ...profileSettings.notifications,
        push: event.target.checked,
      },
    });
  };

  const handleUpdateProfile = () => {
    // Perform update profile logic (e.g., API call)
    console.log("Updating profile:", profileSettings);
    // Replace the console.log with actual API call to update the user's profile
    // Example: fetch('/api/updateProfile', { method: 'PUT', body: JSON.stringify(profileSettings) });

    // For demonstration, reset form after updating
    setProfileSettings(initialProfileSettings);
  };

  return (
    <div>
      <h2>Profile Settings</h2>
      <form>
        <label>Name:</label>
        <input
          type="text"
          value={profileSettings.name}
          onChange={handleNameChange}
        />

        <label>Bio:</label>
        <textarea value={profileSettings.bio} onChange={handleBioChange} />

        <label>Email:</label>
        <input
          type="email"
          value={profileSettings.email}
          onChange={handleEmailChange}
        />

        <label>Notifications:</label>
        <div>
          <label>
            <input
              type="checkbox"
              checked={profileSettings.notifications.email}
              onChange={handleEmailNotificationsChange}
            />
            Email
          </label>
          <label>
            <input
              type="checkbox"
              checked={profileSettings.notifications.push}
              onChange={handlePushNotificationsChange}
            />
            Push
          </label>
        </div>
      </form>

      <button type="button" onClick={handleUpdateProfile}>
        Update Profile
      </button>

      {/* Display Updated Profile Information */}
      <div>
        <h3>Updated Profile Information:</h3>
        <p>
          <strong>Name:</strong> {profileSettings.name}
        </p>
        <p>
          <strong>Bio:</strong> {profileSettings.bio}
        </p>
        <p>
          <strong>Email:</strong> {profileSettings.email}
        </p>
        <p>
          <strong>Notifications:</strong>
          <br />
          Email: {profileSettings.notifications.email ? "Enabled" : "Disabled"}
          <br />
          Push: {profileSettings.notifications.push ? "Enabled" : "Disabled"}
        </p>
      </div>
    </div>
  );
};

export default ProfileSettingsComponent;
