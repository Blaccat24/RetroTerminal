import { Link } from 'wouter';
import { useEffect, useState } from 'react';

export default function MatrixCore() {
  const [revealedKey, setRevealedKey] = useState(false);
  const [glitchText, setGlitchText] = useState('MATRIX_CORE');

  useEffect(() => {
    // Glitch effect for title
    const glitchInterval = setInterval(() => {
      const glitchedText = 'MATRIX_CORE'.split('').map(char => 
        Math.random() > 0.8 ? String.fromCharCode(33 + Math.floor(Math.random() * 94)) : char
      ).join('');
      setGlitchText(glitchedText);
      
      setTimeout(() => setGlitchText('MATRIX_CORE'), 100);
    }, 2000);

    // Auto-reveal key after 3 seconds
    const revealTimer = setTimeout(() => {
      setRevealedKey(true);
    }, 3000);

    return () => {
      clearInterval(glitchInterval);
      clearTimeout(revealTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-green-400 font-courier relative overflow-hidden">
      
      {/* Intense Matrix Rain */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({length: 50}).map((_, i) => (
          <div
            key={i}
            className="absolute text-green-400 text-sm animate-matrix"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 3}s`
            }}
          >
            {['ア', 'ハ', '日', '本', '語', 'カ', 'タ', 'カ', 'ナ', '0', '1'][Math.floor(Math.random() * 11)]}
          </div>
        ))}
      </div>

      {/* Scanlines Effect */}
      <div className="absolute inset-0 scanlines pointer-events-none"></div>

      <div className="relative z-10 flex items-center justify-center min-h-screen p-8">
        <div className="text-center max-w-4xl">
          
          <h1 className="text-6xl font-bold mb-8 animate-glitch" data-testid="matrix-title">
            {glitchText}
          </h1>

          <div className="mb-12">
            <pre className="text-2xl text-cyan-400 animate-neon-pulse leading-tight" data-testid="matrix-ascii">
{`    ███╗   ███╗ █████╗ ████████╗██████╗ ██╗██╗  ██╗
    ████╗ ████║██╔══██╗╚══██╔══╝██╔══██╗██║╚██╗██╔╝
    ██╔████╔██║███████║   ██║   ██████╔╝██║ ╚███╔╝ 
    ██║╚██╔╝██║██╔══██║   ██║   ██╔══██╗██║ ██╔██╗ 
    ██║ ╚═╝ ██║██║  ██║   ██║   ██║  ██║██║██╔╝ ██╗
    ╚═╝     ╚═╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚═╝╚═╝  ╚═╝`}
            </pre>
          </div>

          {revealedKey && (
            <div className="animate-glow">
              <div className="border border-green-400 p-8 bg-black/80 rounded-lg mb-8 neon-box-glow">
                <h2 className="text-3xl text-yellow-400 mb-6 animate-neon-pulse">
                  🔑 MASTER KEY REVEALED 🔑
                </h2>
                
                <div className="text-4xl font-bold text-green-400 mb-4 animate-typing" data-testid="master-key-display">
                  N30N_C1TY_K3Y
                </div>
                
                <div className="text-lg mb-6">
                  <div className="text-cyan-400">ACCESS LEVEL: CYBERPUNK_MASTER</div>
                  <div className="text-magenta-400">NEURAL INTERFACE: SYNCHRONIZED</div>
                  <div className="text-green-400">STATUS: GRID_CONNECTED</div>
                </div>

                <div className="border-t border-green-400 pt-6 mt-6">
                  <h3 className="text-xl text-purple-400 mb-4">FRAGMENTS ASSEMBLED:</h3>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="border border-cyan-400 p-3 bg-cyan-400/10">
                      <div className="text-cyan-400 font-bold">FRAGMENT 1</div>
                      <div>N30N</div>
                      <div className="text-xs">HTML Attribute</div>
                    </div>
                    <div className="border border-purple-400 p-3 bg-purple-400/10">
                      <div className="text-purple-400 font-bold">FRAGMENT 2</div>
                      <div>_C1TY</div>
                      <div className="text-xs">Console Log</div>
                    </div>
                    <div className="border border-pink-400 p-3 bg-pink-400/10">
                      <div className="text-pink-400 font-bold">FRAGMENT 3</div>
                      <div>_K3Y</div>
                      <div className="text-xs">Network Request</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-green-400 mb-8">
                <div className="text-2xl mb-4">CONGRATULATIONS, CYBER DETECTIVE</div>
                <div>You have successfully infiltrated the Neon City grid</div>
                <div>The matrix has acknowledged your skills</div>
              </div>
            </div>
          )}

          <div className="space-x-4">
            <Link href="/">
              <button className="border border-cyan-400 bg-black/50 px-6 py-3 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300" data-testid="return-home">
                {'>'} RETURN_TO_NEON_CITY
              </button>
            </Link>
            
            <button 
              onClick={() => window.location.reload()}
              className="border border-green-400 bg-black/50 px-6 py-3 text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300"
              data-testid="restart-investigation"
            >
              {'>'} RESTART_INVESTIGATION
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}