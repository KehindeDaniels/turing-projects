// profile.ts
export interface Profile {
  name: string;
  email: string;
  bio: string;
  notificationPreferences: "email" | "sms";
}
