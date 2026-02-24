export type AssetStatus =
  | "Available"
  | "In Use"
  | "Maintenance"
  | "Retired";

export interface Asset {
  id?: string; // Firestore generates this
  name: string;
  category: string;
  serialNumber: string;
  location: string;
  status: AssetStatus;
  purchaseDate: string;
}