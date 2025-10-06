export interface IBusiness {
  id: string;
  businessId: string;
  name: string;
  description?: string | null;
  category: string;
  categoryId: string | null;
  country: string;
  state: string;
  city: string;
  address: string | null;
  phone: string;
  email: string | null;
  isRegistered: boolean;
  regNumber: string | null;
  yearFounded: string | null;
  profileImage?: string | null;
  coverImage?: string | null;
  customLink: null | string;
  owner: string;
  createdAt: string;
  updatedAt: string;
  User?: {
    firstName: string;
    lastName: string;
    phone: string;
    email: string | null;
  };
}
