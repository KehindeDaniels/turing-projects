// types.ts
export interface UserProfile {
  name: string;
  email: string;
  bio: string;
  notificationPreference: NotificationPreference;
}

export type NotificationPreference = "email" | "sms";
