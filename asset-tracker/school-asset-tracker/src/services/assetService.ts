import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db }  from "../firebase";
import type { Asset } from "../types/Asset";

const assetCollection = collection(db, "assets");

// Get all assets
export const getAssets = async (): Promise<Asset[]> => {
  const snapshot = await getDocs(assetCollection);

  return snapshot.docs.map((docItem) => ({
    id: docItem.id,
    ...(docItem.data() as Omit<Asset, "id">),
  }));
};

// Add new asset
export const addAsset = async (asset: Asset) => {
  await addDoc(assetCollection, asset);
};

// Delete asset
export const deleteAsset = async (id: string) => {
  const assetDoc = doc(db, "assets", id);
  await deleteDoc(assetDoc);
};