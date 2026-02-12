import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase/firebase";

type Asset = {
  id: string;
  assetCode: string;
  name: string;
  category: string;
  condition: string;
  isAssigned: boolean;
};

function App() {
  const [assets, setAssets] = useState<Asset[]>([]);

  useEffect(() => {
    const fetchAssets = async () => {
      const querySnapshot = await getDocs(collection(db, "assets"));

      const assetList: Asset[] = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...(doc.data() as Omit<Asset, "id">)
      }));

      setAssets(assetList);
    };

    fetchAssets();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>School Asset Tracker</h1>

      {assets.length === 0 && <p>No assets found.</p>}

      {assets.map(asset => (
        <div key={asset.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
          <p><strong>Code:</strong> {asset.assetCode}</p>
          <p><strong>Name:</strong> {asset.name}</p>
          <p><strong>Category:</strong> {asset.category}</p>
          <p><strong>Condition:</strong> {asset.condition}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
