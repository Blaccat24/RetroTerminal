import { Link } from 'wouter';
import { useEffect, useState } from 'react';

export default function SecretNexus() {
  const [typedText, setTypedText] = useState('');
  const [showAscii, setShowAscii] = useState(false);
  
  const message = 'NEURAL FRAGMENT DETECTED... SECOND PIECE IDENTIFIED: _C1TY';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < message.length) {
        setTypedText(message.substring(0, index + 1));
        index++;
      } else {
        setShowAscii(true);
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-green-400 font-courier p-8 relative overflow-hidden">
      
      {/* Matrix Background Effect */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({length: 20}).map((_, i) => (
          <div
            key={i}
            className="absolute text-green-400 text-xs animate-matrix opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-cyan-400 mb-4 animate-neon-pulse" data-testid="nexus-title">
            CENTRAL NEXUS ACCESS
          </h1>
          <div className="text-lg mb-6" data-testid="typing-message">
            {typedText}<span className="animate-blink">_</span>
          </div>
        </div>

        {showAscii && (
          <div className="mb-8 animate-glow">
            <pre className="text-cyan-400 text-sm leading-tight" data-testid="nexus-ascii">
{`    ███╗   ██╗███████╗██╗  ██╗██╗   ██╗███████╗
    ████╗  ██║██╔════╝╚██╗██╔╝██║   ██║██╔════╝
    ██╔██╗ ██║█████╗   ╚███╔╝ ██║   ██║███████╗
    ██║╚██╗██║██╔══╝   ██╔██╗ ██║   ██║╚════██║
    ██║ ╚████║███████╗██╔╝ ██╗╚██████╔╝███████║
    ╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝ ╚═════╝ ╚══════╝`}
            </pre>
          </div>
        )}

        <div className="space-y-4 mb-8">
          <div className="border border-cyan-400 p-6 bg-black/50 rounded">
            <h2 className="text-xl text-magenta-400 mb-4">FRAGMENT ANALYSIS</h2>
            <div className="space-y-2 text-sm">
              <div>{'>'} Fragment Location: Building 3 - Central Tower</div>
              <div>{'>'} Fragment Type: Neural Core Identifier</div>
              <div>{'>'} Fragment Content: <span className="text-yellow-400">_C1TY</span></div>
              <div>{'>'} Status: <span className="text-green-400">ACQUIRED</span></div>
            </div>
          </div>

          <div className="border border-green-400 p-6 bg-black/50 rounded">
            <h2 className="text-xl text-green-400 mb-4">INVESTIGATOR NOTES</h2>
            <div className="space-y-2 text-sm">
              <div>• This fragment represents the core city identifier</div>
              <div>• Combine with other neural fragments for complete access key</div>
              <div>• Next target: Data Fortress (Building 5)</div>
              <div>• Recommendation: Monitor network traffic during final scan</div>
            </div>
          </div>
        </div>

        {/* Hidden ASCII Art Clue */}
        <div className="border border-purple-400 p-4 bg-purple-900/20 rounded mb-8">
          <h3 className="text-purple-400 mb-2">ENCRYPTED MESSAGE</h3>
          <pre className="text-xs text-purple-300" data-testid="encrypted-clue">
{`01001000 01101001 01100100 01100100 01100101 01101110
01110010 01101111 01110101 01110100 01100101 00111010
00101111 01101101 01100001 01110100 01110010 01101001
01111000 00101101 01100011 01101111 01110010 01100101`}
          </pre>
          <div className="text-xs text-gray-500 mt-2">
            Hint: Binary to ASCII conversion reveals hidden path
          </div>
        </div>

        <div className="text-center">
          <Link href="/">
            <button className="border border-cyan-400 bg-black/50 px-6 py-3 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300" data-testid="return-grid">
              {'>'} RETURN_TO_GRID
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}