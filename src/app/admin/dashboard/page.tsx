"use client";

import { useEffect, useState } from "react";
import { auth, db } from "@/lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { collection, getDocs, doc, setDoc, serverTimestamp } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { LogOut, Save, RotateCcw, Eye, Loader2, CheckCircle2 } from "lucide-react";
import Link from "next/link";

// Define the keys exactly as requested
const PRICE_KEYS = [
  { key: 'broiler-whole', label: 'Whole Broiler Chicken (₹/kg)' },
  { key: 'broiler-curry-cut', label: 'Broiler Curry Cut (₹/kg)' },
  { key: 'skinless-curry-cut', label: 'Skinless Curry Cut (₹/kg)' },
  { key: 'boneless', label: 'Boneless Chicken (₹/kg)' },
  { key: 'breast', label: 'Chicken Breast (₹/kg)' },
  { key: 'leg-pieces', label: 'Leg Pieces (₹/kg)' },
  { key: 'drumsticks', label: 'Drumsticks (₹/kg)' },
  { key: 'wings', label: 'Wings (₹/kg)' },
  { key: 'liver', label: 'Chicken Liver (₹/kg)' },
  { key: 'gizzard', label: 'Chicken Gizzard (₹/kg)' },
  { key: 'neck', label: 'Chicken Neck (₹/kg)' },
  { key: 'feet', label: 'Chicken Feet (₹/kg)' },
  { key: 'mince-keema', label: 'Chicken Mince / Keema (₹/kg)' },
  { key: 'country-whole', label: 'Country Chicken Whole (₹/kg)' },
  { key: 'country-curry-cut', label: 'Country Chicken Curry Cut (₹/kg)' },
  { key: 'eggs-piece', label: 'Eggs (Price per piece)' },
  { key: 'eggs-tray', label: 'Eggs (Price per tray)' },
];

export default function AdminDashboard() {
  const router = useRouter();
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);
  
  // Store prices as an object mapping key -> price string
  const [prices, setPrices] = useState<Record<string, string>>({});
  const [initialPrices, setInitialPrices] = useState<Record<string, string>>({});

  useEffect(() => {
    checkSession();
    fetchPrices();
  }, []);

  const checkSession = async () => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("/admin/login");
      } else {
        setSession(user);
      }
    });
  };

  const fetchPrices = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "prices"));
      if (!querySnapshot.empty) {
        const pricesObj: Record<string, string> = {};
        let latestUpdate: any = null;
        
        querySnapshot.forEach((doc) => {
          const item = doc.data();
          pricesObj[doc.id] = item.price.toString();
          
          if (item.updated_at) {
            const itemDate = item.updated_at.toDate();
            if (!latestUpdate || itemDate > latestUpdate) {
              latestUpdate = itemDate;
            }
          }
        });
        
        if (latestUpdate) {
          setLastUpdated(latestUpdate.toLocaleString());
        }

        setPrices(pricesObj);
        setInitialPrices(pricesObj);
      }
    } catch (error) {
      console.error("Error fetching prices:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/admin/login");
  };

  const handlePriceChange = (key: string, value: string) => {
    // Only allow numbers
    if (value === '' || /^\d+$/.test(value)) {
      setPrices(prev => ({ ...prev, [key]: value }));
    }
  };

  const handleReset = () => {
    setPrices(initialPrices);
  };

  const handleSave = async () => {
    setSaving(true);
    setShowSuccess(false);

    try {
      // Prepare upsert payload
      const updates = Object.entries(prices).map(([key, price]) => {
        return setDoc(doc(db, "prices", key), {
          item_key: key,
          price: parseInt(price) || 0,
          updated_at: serverTimestamp()
        }, { merge: true });
      });

      if (updates.length > 0) {
        await Promise.all(updates);
          
        setInitialPrices(prices);
        setLastUpdated(new Date().toLocaleString());
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
      }
    } catch (error) {
      console.error("Error saving prices:", error);
      alert("Failed to save prices.");
    } finally {
      setSaving(false);
    }
  };

  if (!session) return null; // Will redirect in useEffect

  return (
    <div className="min-h-screen bg-neutral-900 text-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-neutral-800 p-6 rounded-2xl border border-neutral-700">
          <div>
            <h1 className="text-2xl font-bold text-white">Manage Prices</h1>
            <p className="text-neutral-400 text-sm mt-1">
              Update store prices dynamically across the website
            </p>
            {lastUpdated && (
              <p className="text-red-400 text-xs mt-2 font-medium">
                Last Updated: {lastUpdated}
              </p>
            )}
          </div>
          
          <div className="flex items-center gap-3">
            <Link 
              href="/" 
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 bg-neutral-700 hover:bg-neutral-600 text-white text-sm font-medium rounded-lg transition-colors"
            >
              <Eye className="w-4 h-4" />
              Preview
            </Link>
            <button 
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 border border-neutral-600 hover:bg-neutral-700 text-white text-sm font-medium rounded-lg transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </header>

        {/* Form Container */}
        <div className="bg-neutral-800 rounded-2xl border border-neutral-700 overflow-hidden">
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <Loader2 className="w-8 h-8 animate-spin text-red-500" />
            </div>
          ) : (
            <div className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                {PRICE_KEYS.map((item) => (
                  <div key={item.key} className="space-y-2">
                    <label className="text-sm font-medium text-neutral-300">
                      {item.label}
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-neutral-500 font-medium">₹</span>
                      </div>
                      <input
                        type="text"
                        inputMode="numeric"
                        value={prices[item.key] || ""}
                        onChange={(e) => handlePriceChange(item.key, e.target.value)}
                        className="w-full pl-8 pr-4 py-3 bg-neutral-900 border border-neutral-700 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-colors text-white"
                        placeholder="0"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Bar */}
              <div className="mt-10 pt-6 border-t border-neutral-700 flex flex-col md:flex-row items-center justify-between gap-4">
                {showSuccess ? (
                  <div className="flex items-center gap-2 text-green-500 font-medium">
                    <CheckCircle2 className="w-5 h-5" />
                    Prices updated successfully!
                  </div>
                ) : (
                  <div className="text-neutral-400 text-sm">
                    Changes will appear on the website instantly.
                  </div>
                )}
                
                <div className="flex w-full md:w-auto items-center gap-3">
                  <button
                    onClick={handleReset}
                    disabled={saving}
                    className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 border border-neutral-600 hover:bg-neutral-700 text-white font-medium rounded-xl transition-colors disabled:opacity-50"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Reset
                  </button>
                  <button
                    onClick={handleSave}
                    disabled={saving}
                    className="flex-1 md:flex-none flex items-center justify-center gap-2 px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-xl transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {saving ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <Save className="w-5 h-5" />
                    )}
                    Save Prices
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
