import React, { useState } from 'react';
import { 
  LayoutDashboard, Search, Calculator, Bookmark, 
  TrendingUp, Send, Sparkles, Columns, Settings, 
  ArrowUpRight, DollarSign, Package, CheckCircle2, Copy, Check
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [apiKey, setApiKey] = useState('');
  const [copied, setCopied] = useState(false);

  // States for Calculator
  const [cost, setCost] = useState(8.50);
  const [shipping, setShipping] = useState(3.00);
  const [adSpend, setAdSpend] = useState(12.00);
  const [sellPrice, setSellPrice] = useState(39.99);

  const totalCost = Number(cost) + Number(shipping) + Number(adSpend);
  const netProfit = (sellPrice - totalCost).toFixed(2);
  const profitMargin = ((netProfit / sellPrice) * 100).toFixed(1);

  // States for AI Generator
  const [productPrompt, setProductPrompt] = useState('Mini Portable Jet Fan');
  const [generatedScript, setGeneratedScript] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateAI = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setGeneratedScript(`🔥 TikTok Viral Hook for "${productPrompt}":\n"Stop wasting time cooling down slowly! This pocket-sized beast drops temperatures instantly..."\n\n📌 30-Second Script:\n1. [0-3s] Show someone sweating heavily outdoors, looking exhausted.\n2. [3-10s] Cut to unboxing/turning on the ${productPrompt} with satisfying airflow sound.\n3. [10-25s] Demonstrate power blowing away papers or cooling instantly. "Fits in your palm, packs a hurricane!"\n4. [25-30s] Call to Action: "Click shop now to grab yours with 50% off today!"\n\n🎯 Target Audience: Summer travelers, office workers, outdoor enthusiasts.`);
      setIsGenerating(false);
    }, 1000);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex h-screen bg-[#090D16] text-slate-100 font-sans overflow-hidden">
      
      {/* SIDEBAR NAVIGATION */}
      <div className="w-64 bg-[#0F1523] border-r border-slate-800 flex flex-col justify-between p-4">
        <div>
          <div className="flex items-center gap-3 px-2 py-3 mb-6">
            <div className="bg-gradient-to-tr from-indigo-500 to-cyan-400 p-2 rounded-xl text-white shadow-lg shadow-indigo-500/30">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h1 className="font-bold text-lg tracking-wide bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">TrendFind AI</h1>
              <p className="text-xs text-slate-500">Dropship & Affiliate Suite</p>
            </div>
          </div>

          <nav className="space-y-1.5">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
              { id: 'research', label: 'Product Research', icon: Search },
              { id: 'calculator', label: 'Profit Calculator', icon: Calculator },
              { id: 'watchlist', label: 'Watchlist', icon: Bookmark },
              { id: 'scanner', label: 'Trending Scanner', icon: TrendingUp },
              { id: 'telegram', label: 'Telegram Alerts', icon: Send },
              { id: 'ai-content', label: 'AI Content Gen', icon: Sparkles },
              { id: 'comparison', label: 'Product Compare', icon: Columns },
            ].map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive 
                      ? 'bg-indigo-600/10 text-indigo-400 border border-indigo-500/20 shadow-sm' 
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-indigo-400' : 'text-slate-500'}`} />
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* API Settings Section */}
        <div className="pt-4 border-t border-slate-800">
          <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800">
            <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-slate-300">
              <Settings className="w-3.5 h-3.5 text-indigo-400" />
              OpenAI API Config
            </div>
            <input 
              type="password" 
              placeholder="sk-..." 
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
            />
            <p className="text-[10px] text-slate-500 mt-1">Key secured locally for AI generator.</p>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        
        {/* Top Header */}
        <header className="h-16 bg-[#0F1523]/80 backdrop-blur-md border-b border-slate-800 px-8 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-indigo-400 font-semibold bg-indigo-500/10 px-2.5 py-1 rounded-full border border-indigo-500/20">
              Active Module: {activeTab.replace('-', ' ').toUpperCase()}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-xs font-medium text-slate-300">Welcome Back</p>
              <p className="text-[10px] text-emerald-400 font-semibold flex items-center justify-end gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                System Operational
              </p>
            </div>
          </div>
        </header>

        {/* Dynamic Workspace Content */}
        <main className="p-8 max-w-7xl mx-auto w-full">

          {/* 1. DASHBOARD OVERVIEW */}
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold tracking-tight">Command Center</h2>
                <p className="text-sm text-slate-400">Overview of your product research metrics and automated performance.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {[
                  { title: 'Total Analyzed', value: '1,428', change: '+12.3%', icon: Package, color: 'text-indigo-400' },
                  { title: 'Watchlist Saved', value: '42 Items', change: '8 Winning', icon: Bookmark, color: 'text-cyan-400' },
                  { title: 'Avg. Profit Margin', value: '44.8%', change: '+4.2%', icon: DollarSign, color: 'text-emerald-400' },
                  { title: 'Active Telegram Alerts', value: '5 Channels', change: 'Live', icon: Send, color: 'text-amber-400' }
                ].map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <div key={i} className="bg-[#0F1523] border border-slate-800/80 p-5 rounded-2xl shadow-sm hover:border-slate-700 transition-all">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-medium text-slate-400">{stat.title}</span>
                        <Icon className={`w-4 h-4 ${stat.color}`} />
                      </div>
                      <div className="text-2xl font-bold mb-1">{stat.value}</div>
                      <span className="text-xs text-emerald-400 font-medium bg-emerald-500/10 px-2 py-0.5 rounded">
                        {stat.change}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="bg-[#0F1523] border border-slate-800/80 rounded-2xl p-6">
                <h3 className="text-lg font-semibold mb-4">Recent Trending Winners</h3>
                <div className="space-y-3">
                  {[
                    { name: 'Magnetic Wireless Power Bank', source: 'TikTok Shop', margin: '62%', price: '$24.99' },
                    { name: 'Posture Correction Back Stretcher', source: 'AliExpress', margin: '58%', price: '$18.50' },
                    { name: 'LED Sunset Projection Lamp', source: 'Meta Ads', margin: '71%', price: '$14.99' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3.5 bg-slate-900/50 rounded-xl border border-slate-800/50">
                      <div>
                        <p className="font-medium text-sm text-slate-200">{item.name}</p>
                        <p className="text-xs text-slate-500">Source: {item.source}</p>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="text-right">
                          <p className="text-xs font-semibold text-emerald-400">Margin: {item.margin}</p>
                          <p className="text-xs text-slate-400">Sell: {item.price}</p>
                        </div>
                        <button className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs px-3 py-1.5 rounded-lg transition">
                          Analyze
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 2. PROFIT CALCULATOR */}
          {activeTab === 'calculator' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold tracking-tight">Profit & Margin Forecaster</h2>
                <p className="text-sm text-slate-400">Calculate net returns accounting for COGS, shipping, and ad spend.</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-[#0F1523] border border-slate-800/80 p-6 rounded-2xl space-y-4">
                  <h3 className="text-md font-semibold text-slate-200">Cost Parameters</h3>
                  
                  <div>
                    <label className="text-xs text-slate-400 block mb-1">Supplier Cost ($)</label>
                    <input type="number" value={cost} onChange={(e) => setCost(e.target.value)} className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500" />
                  </div>

                  <div>
                    <label className="text-xs text-slate-400 block mb-1">Shipping Fee ($)</label>
                    <input type="number" value={shipping} onChange={(e) => setShipping(e.target.value)} className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500" />
                  </div>

                  <div>
                    <label className="text-xs text-slate-400 block mb-1">Estimated Ad Spend / CAC ($)</label>
                    <input type="number" value={adSpend} onChange={(e) => setAdSpend(e.target.value)} className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500" />
                  </div>

                  <div>
                    <label className="text-xs text-slate-400 block mb-1">Target Selling Price ($)</label>
                    <input type="number" value={sellPrice} onChange={(e) => setSellPrice(e.target.value)} className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500" />
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#0F1523] to-indigo-950/30 border border-indigo-500/20 p-6 rounded-2xl flex flex-col justify-between">
                  <div>
                    <h3 className="text-md font-semibold text-indigo-300 mb-4">Financial Summary</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center pb-3 border-b border-slate-800">
                        <span className="text-sm text-slate-400">Total Expenses:</span>
                        <span className="text-lg font-bold">${totalCost.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between items-center pb-3 border-b border-slate-800">
                        <span className="text-sm text-slate-400">Net Profit per Unit:</span>
                        <span className="text-lg font-bold text-emerald-400">${netProfit}</span>
                      </div>
                      <div className="flex justify-between items-center pb-3 border-b border-slate-800">
                        <span className="text-sm text-slate-400">Profit Margin:</span>
                        <span className="text-lg font-bold text-cyan-400">{profitMargin}%</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-slate-900/60 rounded-xl border border-slate-800">
                    <p className="text-xs text-slate-300">
                      {profitMargin >= 40 ? '🟢 High Potential Product: Excellent margin for scaling paid ads.' : '🟡 Moderate Margin: Recommended for organic affiliate marketing.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 3. AI CONTENT GENERATOR */}
          {activeTab === 'ai-content' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold tracking-tight">AI Content & Ad Copywriter</h2>
                <p className="text-sm text-slate-400">Generate viral hooks and scripts instantly using OpenAI.</p>
              </div>

              <div className="bg-[#0F1523] border border-slate-800/80 p-6 rounded-2xl space-y-4">
                <div>
                  <label className="text-xs text-slate-400 block mb-1">Product Title / Niche</label>
                  <input 
                    type="text" 
                    value={productPrompt} 
                    onChange={(e) => setProductPrompt(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500"
                    placeholder="Enter product..."
                  />
                </div>

                <button 
                  onClick={handleGenerateAI}
                  disabled={isGenerating}
                  className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-4 py-2 rounded-xl text-sm transition flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  {isGenerating ? 'Generating with AI...' : 'Generate Viral Content'}
                </button>

                {generatedScript && (
                  <div className="mt-6 p-4 bg-slate-900/80 rounded-xl border border-slate-800 relative">
                    <button 
                      onClick={() => copyToClipboard(generatedScript)}
                      className="absolute top-4 right-4 text-slate-400 hover:text-white bg-slate-800 p-1.5 rounded-lg"
                    >
                      {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">Generated Output</h4>
                    <pre className="text-xs text-slate-300 whitespace-pre-wrap font-sans leading-relaxed">{generatedScript}</pre>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* OTHER TABS PLACEHOLDER */}
          {['research', 'watchlist', 'scanner', 'telegram', 'comparison'].includes(activeTab) && (
            <div className="bg-[#0F1523] border border-slate-800/80 p-12 rounded-2xl text-center space-y-4">
              <div className="w-12 h-12 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl flex items-center justify-center mx-auto text-indigo-400">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold capitalize">{activeTab.replace('-', ' ')} Module</h3>
              <p className="text-sm text-slate-400 max-w-md mx-auto">This module is configured and ready. Data integration scripts and connectors will populate live streams here.</p>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}
