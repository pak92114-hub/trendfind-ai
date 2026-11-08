import React, { useState } from 'react';
import { 
  TrendingUp, Search, DollarSign, Sparkles, ShieldAlert, 
  Layers, ExternalLink, Bookmark, Copy, Check, Filter, 
  BarChart2, ArrowUpRight, Zap, RefreshCw, ShoppingBag, Calculator 
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('trending');
  const [copiedId, setCopiedId] = useState(null);
  const [savedProducts, setSavedProducts] = useState([]);
  
  // Search & Filter State
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Calculator State
  const [costPrice, setCostPrice] = useState(5);
  const [sellPrice, setSellPrice] = useState(30);
  const [adSpend, setAdSpend] = useState(10);

  const netProfit = (sellPrice - costPrice - adSpend).toFixed(2);
  const roi = costPrice > 0 ? (((netProfit / costPrice) * 100)).toFixed(0) : 0;

  const products = [
    {
      id: 1,
      title: "Posture Corrector Smart Belt",
      category: "Health & Fitness",
      margin: "74%",
      aliPrice: "$4.50",
      targetSell: "$29.99",
      rating: 4.8,
      orders: "12,450/mo",
      trendScore: 98,
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=500&auto=format&fit=crop&q=60",
      description: "AI-powered posture reminder device with real-time vibration sensors."
    },
    {
      id: 2,
      title: "Ultrasonic Jewelry & Watch Cleaner",
      category: "Home & Kitchen",
      margin: "68%",
      aliPrice: "$8.20",
      targetSell: "$39.99",
      rating: 4.6,
      orders: "8,920/mo",
      trendScore: 94,
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&auto=format&fit=crop&q=60",
      description: "Compact high-frequency vibration cleaner for glasses, jewelry, and small accessories."
    },
    {
      id: 3,
      title: "Magnetic Wireless Power Bank",
      category: "Tech Gadgets",
      margin: "65%",
      aliPrice: "$11.00",
      targetSell: "$49.99",
      rating: 4.9,
      orders: "21,100/mo",
      trendScore: 92,
      image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500&auto=format&fit=crop&q=60",
      description: "Ultra-slim 10,000mAh magnetic portable charger with fast charging output."
    }
  ];

  // Filter Logic
  const filteredProducts = products.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          p.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const toggleSave = (id) => {
    if (savedProducts.includes(id)) {
      setSavedProducts(savedProducts.filter(item => item !== id));
    } else {
      setSavedProducts([...savedProducts, id]);
    }
  };

  return (
    <div className="min-h-screen bg-[#090D16] text-gray-100 font-sans antialiased selection:bg-indigo-500 selection:text-white">
      {/* Top Header */}
      <header className="border-b border-gray-800 bg-[#0F172A]/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-tr from-indigo-500 to-purple-500 p-2 rounded-xl shadow-lg shadow-indigo-500/20">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-extrabold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              TrendFind AI
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-xs px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full font-medium flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Live Scanner Active
            </span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Metric Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-[#111827] border border-gray-800 rounded-2xl p-5 shadow-sm">
            <p className="text-xs text-gray-400 font-medium">Scanned Today</p>
            <h3 className="text-2xl font-bold mt-1 text-white">1,420 Items</h3>
            <span className="text-xs text-emerald-400 font-medium mt-2 flex items-center gap-1">
              <ArrowUpRight className="h-3.5 w-3.5" /> +14.2% velocity
            </span>
          </div>

          <div className="bg-[#111827] border border-gray-800 rounded-2xl p-5 shadow-sm">
            <p className="text-xs text-gray-400 font-medium">Avg Profit Margin</p>
            <h3 className="text-2xl font-bold mt-1 text-indigo-400">71.4%</h3>
            <span className="text-xs text-gray-400 mt-2 block">High margin range</span>
          </div>

          <div className="bg-[#111827] border border-gray-800 rounded-2xl p-5 shadow-sm">
            <p className="text-xs text-gray-400 font-medium">Saved Products</p>
            <h3 className="text-2xl font-bold mt-1 text-purple-400">{savedProducts.length} Items</h3>
            <span className="text-xs text-gray-400 mt-2 block">Ready for store push</span>
          </div>

          <div className="bg-[#111827] border border-gray-800 rounded-2xl p-5 shadow-sm">
            <p className="text-xs text-gray-400 font-medium">AI Ad Scripts Generated</p>
            <h3 className="text-2xl font-bold mt-1 text-amber-400">388</h3>
            <span className="text-xs text-amber-400 font-medium mt-2 block">TikTok & IG Reels</span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-gray-800 mb-6 space-x-6">
          <button 
            onClick={() => setActiveTab('trending')}
            className={`pb-3 text-sm font-semibold transition border-b-2 ${activeTab === 'trending' ? 'border-indigo-500 text-indigo-400' : 'border-transparent text-gray-400 hover:text-gray-200'}`}
          >
            🔥 Top Trending Products
          </button>
          <button 
            onClick={() => setActiveTab('calculator')}
            className={`pb-3 text-sm font-semibold transition border-b-2 ${activeTab === 'calculator' ? 'border-indigo-500 text-indigo-400' : 'border-transparent text-gray-400 hover:text-gray-200'}`}
          >
            💰 Profit & ROI Calculator
          </button>
          <button 
            onClick={() => setActiveTab('generator')}
            className={`pb-3 text-sm font-semibold transition border-b-2 ${activeTab === 'generator' ? 'border-indigo-500 text-indigo-400' : 'border-transparent text-gray-400 hover:text-gray-200'}`}
          >
            ✨ AI Ad Copy & Hooks
          </button>
        </div>

        {/* Tab Content 1: Products with Search & Filter */}
        {activeTab === 'trending' && (
          <div>
            {/* Search Bar & Filter Controls */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3.5 top-3 h-4 w-4 text-gray-400" />
                <input 
                  type="text"
                  placeholder="Search products by keyword..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-[#111827] border border-gray-800 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="flex gap-2">
                {['All', 'Health & Fitness', 'Home & Kitchen', 'Tech Gadgets'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-2 rounded-xl text-xs font-semibold transition ${selectedCategory === cat ? 'bg-indigo-600 text-white' : 'bg-[#111827] text-gray-400 hover:bg-gray-800 border border-gray-800'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredProducts.map((p) => (
                <div key={p.id} className="bg-[#111827] border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-700 transition flex flex-col justify-between">
                  <div>
                    <div className="relative h-48 w-full bg-gray-900 overflow-hidden">
                      <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                      <span className="absolute top-3 right-3 bg-indigo-600 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow z-10">
                        Score: {p.trendScore}
                      </span>
                      <span className="absolute top-3 left-3 bg-black/60 backdrop-blur text-gray-200 text-xs px-2.5 py-1 rounded-full z-10">
                        {p.category}
                      </span>
                    </div>
                    
                    <div className="p-5">
                      <h4 className="font-semibold text-lg text-white mb-2 leading-snug">{p.title}</h4>
                      <p className="text-xs text-gray-400 mb-4 h-10 overflow-hidden">{p.description}</p>
                      
                      <div className="grid grid-cols-3 gap-2 bg-gray-900/50 p-3 rounded-xl border border-gray-800 text-center mb-4">
                        <div>
                          <span className="text-[10px] text-gray-400 uppercase font-medium block">Cost</span>
                          <span className="text-sm font-bold text-gray-200">{p.aliPrice}</span>
                        </div>
                        <div>
                          <span className="text-[10px] text-gray-400 uppercase font-medium block">Sell Price</span>
                          <span className="text-sm font-bold text-emerald-400">{p.targetSell}</span>
                        </div>
                        <div>
                          <span className="text-[10px] text-gray-400 uppercase font-medium block">Margin</span>
                          <span className="text-sm font-bold text-indigo-400">{p.margin}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 pt-0 flex items-center justify-between gap-2">
                    <button 
                      onClick={() => toggleSave(p.id)}
                      className={`flex-1 py-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition ${savedProducts.includes(p.id) ? 'bg-indigo-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
                    >
                      <Bookmark className="h-3.5 w-3.5" />
                      {savedProducts.includes(p.id) ? 'Saved' : 'Save Product'}
                    </button>

                    <button 
                      onClick={() => handleCopy(`Check out this trending product: ${p.title} - Target Sell: ${p.targetSell}`, p.id)}
                      className="p-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-xl transition"
                      title="Copy Details"
                    >
                      {copiedId === p.id ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12 text-gray-400 text-sm">
                No products found matching your search query.
              </div>
            )}
          </div>
        )}

        {/* Tab Content 2: Profit Calculator */}
        {activeTab === 'calculator' && (
          <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <Calculator className="h-5 w-5 text-indigo-400" /> Dropshipping Profit & ROI Forecaster
            </h3>
            <p className="text-sm text-gray-400 mb-6">Calculate your exact margins after product cost and estimated advertising expenses.</p>

            <div className="space-y-4 mb-6">
              <div>
                <label className="text-xs text-gray-400 block mb-1">Product Cost ($)</label>
                <input 
                  type="number" 
                  value={costPrice} 
                  onChange={(e) => setCostPrice(Number(e.target.value))}
                  className="w-full bg-gray-900 border border-gray-800 rounded-xl p-3 text-white text-sm focus:outline-none focus:border-indigo-500" 
                />
              </div>

              <div>
                <label className="text-xs text-gray-400 block mb-1">Target Selling Price ($)</label>
                <input 
                  type="number" 
                  value={sellPrice} 
                  onChange={(e) => setSellPrice(Number(e.target.value))}
                  className="w-full bg-gray-900 border border-gray-800 rounded-xl p-3 text-white text-sm focus:outline-none focus:border-indigo-500" 
                />
              </div>

              <div>
                <label className="text-xs text-gray-400 block mb-1">Estimated Ad Spend per Sale ($)</label>
                <input 
                  type="number" 
                  value={adSpend} 
                  onChange={(e) => setAdSpend(Number(e.target.value))}
                  className="w-full bg-gray-900 border border-gray-800 rounded-xl p-3 text-white text-sm focus:outline-none focus:border-indigo-500" 
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 bg-gray-900/60 p-4 rounded-xl border border-gray-800">
              <div>
                <span className="text-xs text-gray-400 block">Net Profit / Sale</span>
                <span className={`text-2xl font-bold ${netProfit >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>${netProfit}</span>
              </div>
              <div>
                <span className="text-xs text-gray-400 block">Return on Investment (ROI)</span>
                <span className="text-2xl font-bold text-indigo-400">{roi}%</span>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content 3: Generator */}
        {activeTab === 'generator' && (
          <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-indigo-400" /> AI Ad Hook & Script Generator
            </h3>
            <p className="text-sm text-gray-400 mb-6">Select a product style to instantly generate high-converting TikTok hook scripts.</p>

            <div className="space-y-4">
              <div className="p-4 bg-gray-900 rounded-xl border border-gray-800">
                <span className="text-xs text-indigo-400 font-semibold uppercase">Hook #1 (Problem-Solver)</span>
                <p className="text-sm text-gray-200 mt-1 font-medium">"Stop buying cheap posture belts that slide down within 5 minutes. Here is how this AI smart belt fixes your posture automatically..."</p>
              </div>

              <div className="p-4 bg-gray-900 rounded-xl border border-gray-800">
                <span className="text-xs text-indigo-400 font-semibold uppercase">Hook #2 (Curiosity / Aesthetic)</span>
                <p className="text-sm text-gray-200 mt-1 font-medium">"I tested the viral ultrasonic cleaner pod on my dirtiest jewelry, and the result left me speechless..."</p>
              </div>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
