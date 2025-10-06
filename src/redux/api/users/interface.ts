export interface User {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  country: string;
  email: string | null;
  phoneValidity: boolean;
  emailValidity: boolean;
  fcmToken: string | null;
  createdAt: string;
  updatedAt: string;
}
