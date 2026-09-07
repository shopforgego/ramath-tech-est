import { StoreConfig } from '../types/store';

export const storeConfig: StoreConfig = {
  storeNameAr: import.meta.env.VITE_STORE_NAME_AR || "متجر رمث التقني",
  storeNameEn: import.meta.env.VITE_STORE_NAME_EN || "Ramath Tech Store",
  companyNameAr: import.meta.env.VITE_COMPANY_NAME_AR || "شركة رمث التقنية",
  companyNameEn: import.meta.env.VITE_COMPANY_NAME_EN || "Ramath Technology Company",
  taglineAr: import.meta.env.VITE_TAGLINE_AR || "وجهتك الأولى للإلكترونيات الذكية والملحقات التقنية الحديثة",
  taglineEn: import.meta.env.VITE_TAGLINE_EN || "Your Premier Destination for Smart Tech & Gadgets",
  cr: import.meta.env.VITE_COMMERCIAL_REGISTRATION || "7054264481",
  taxNumber: import.meta.env.VITE_TAX_NUMBER || "310542644810003",
  shortAddress: import.meta.env.VITE_NATIONAL_ADDRESS_SHORT || "RKHJ7681",
  city: import.meta.env.VITE_CITY || "الرياض",
  district: import.meta.env.VITE_DISTRICT || "حي الحزم",
  fullAddress: import.meta.env.VITE_FULL_ADDRESS || "المملكة العربية السعودية - الرياض - حي الحزم - الرمز البريدي RKHJ7681",
  phone: import.meta.env.VITE_CONTACT_PHONE || "0559554567",
  whatsapp: import.meta.env.VITE_CONTACT_WHATSAPP || "966559554567",
  email: import.meta.env.VITE_CONTACT_EMAIL || "Sultandabhan@gmail.com",
  supportHours: import.meta.env.VITE_SUPPORT_HOURS || "السبت - الخميس: 9:00 ص - 10:00 م",
  currency: import.meta.env.VITE_CURRENCY || "SAR",
  currencySymbol: import.meta.env.VITE_CURRENCY_SYMBOL || "ر.س",
  freeShippingThreshold: Number(import.meta.env.VITE_FREE_SHIPPING_THRESHOLD) || 200,
  shippingCost: Number(import.meta.env.VITE_SHIPPING_COST) || 25,
};
