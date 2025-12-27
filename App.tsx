
import React, { useState } from 'react';
import { convertToClassicEmo } from './utils/emoConverter';

const App: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [copied, setCopied] = useState(false);

  const handleConvert = () => {
    const result = convertToClassicEmo(inputText);
    setOutputText(result);
  };

  const copyToClipboard = () => {
    if (!outputText) return;
    navigator.clipboard.writeText(outputText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 select-none">
      {/* Başlık Bölümü */}
      <div className="text-center mb-12 relative">
        <h1 className="text-6xl sm:text-8xl font-bold mb-4 neon-text tracking-tighter" style={{ fontFamily: 'Pacifico' }}>
          Emo Converter
        </h1>
        <div className="bg-white text-black px-4 py-1 rotate-[-2deg] font-black text-xs sm:text-sm inline-block">
          yh0ğun ßir şéqhildhé mshn qhullananLarın vhazqéçilmézi!
        </div>
      </div>

      {/* Dönüştürücü Kutusu */}
      <div className="w-full max-w-xl neon-box bg-black/80 p-8 rounded-none flex flex-col gap-6">
        
        {/* Giriş */}
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center text-[10px] uppercase font-bold tracking-widest text-pink-500">
            <span>[ input_text ]</span>
            <span>v1.0_stable</span>
          </div>
          <textarea
            className="w-full h-32 bg-zinc-900 border border-pink-900 focus:border-pink-400 p-4 text-pink-100 outline-none transition-all resize-none font-bold"
            placeholder="Buraya düzgünce bir şeyler yaz..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
        </div>

        {/* Buton */}
        <button
          onClick={handleConvert}
          className="msn-button w-full py-4 text-white text-2xl font-black uppercase tracking-[0.2em] hover:brightness-110 active:brightness-90 transition-all flex items-center justify-center gap-4"
        >
          <i className="fas fa-random text-sm opacity-50"></i>
          DöNüŞthüR!
          <i className="fas fa-random text-sm opacity-50"></i>
        </button>

        {/* Çıkış */}
        <div className="flex flex-col gap-2 relative">
          <div className="flex justify-between items-center text-[10px] uppercase font-bold tracking-widest text-cyan-400">
            <span>[ emo_output ]</span>
            {copied && <span className="animate-pulse text-white bg-green-600 px-2">qh0phyhaLhaNdhı!</span>}
          </div>
          <div className="relative">
            <textarea
              readOnly
              className="w-full h-32 bg-zinc-900/50 border border-cyan-900 p-4 text-cyan-300 outline-none cursor-default font-bold text-lg"
              placeholder="..."
              value={outputText}
            />
            {outputText && (
              <button 
                onClick={copyToClipboard}
                className="absolute bottom-4 right-4 bg-cyan-500 hover:bg-white text-black font-bold py-2 px-4 text-xs transition-all uppercase"
              >
                Kopyala
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Alt Bilgi */}
      <div className="mt-12 text-center text-[10px] opacity-40 uppercase tracking-[0.3em]">
        <p className="mb-2">© 2005 - ∞ mshn ghénçLhiğhi h0thMhiL.ch0M</p>
        <div className="flex justify-center gap-4 text-sm">
          <i className="fas fa-heart text-pink-600"></i>
          <i className="fas fa-star text-yellow-600"></i>
          <i className="fas fa-bolt text-blue-600"></i>
        </div>
      </div>
    </div>
  );
};

export default App;
