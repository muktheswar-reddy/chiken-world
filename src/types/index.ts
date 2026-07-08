export interface WeightOption {
  weight: string;
  price: number;
}

export interface Product {
  id: string;
  nameEn: string;
  nameKn: string;
  category: string;
  weightOptions: WeightOption[];
  image: string;
  isFresh: boolean;
  isPremium: boolean;
  description?: string;
}

export interface Category {
  id: string;
  nameEn: string;
  nameKn: string;
  icon: string;
  image: string;
  count: number;
}

export interface Offer {
  id: string;
  title: string;
  description: string;
  discount: string;
  validUntil?: string;
  type: 'weekly' | 'festival' | 'family' | 'bulk' | 'visit';
  badge: string;
  color: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  avatar: string;
}

export interface BookingFormData {
  productName: string;
  weight: string;
  quantity: number;
  customerName: string;
  phoneNumber: string;
}
