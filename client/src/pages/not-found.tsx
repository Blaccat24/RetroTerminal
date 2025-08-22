import { Link } from 'wouter';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black font-courier">
      <div className="text-center max-w-2xl px-6">
        
        {/* Glitch Effect Header */}
        <div className="mb-8">
          <div className="text-6xl md:text-8xl text-red-500 mb-4 animate-glitch font-orbitron" data-testid="error-code">
            404
          </div>
          <div className="text-2xl md:text-3xl text-neon-cyan mb-4 animate-neon-pulse" data-testid="error-title">
            SYSTEM ERROR
          </div>
        </div>
        
        {/* Terminal-style Error Message */}
        <div className="bg-black/80 neon-border p-6 rounded-lg mb-8 text-left" data-testid="error-terminal">
          <div className="text-neon-green mb-2">root@neoncity:~$ access_page</div>
          <div className="text-red-500 mb-2">ERROR: Neural pathway not found in cybernet database</div>
          <div className="text-gray-400 mb-4">
            <p>The requested resource could not be located</p>
            <p>in the digital grid matrix.</p>
          </div>
          
          {/* Secret Discovery Guide */}
          <div className="border-l-2 border-neon-green pl-4 mb-4">
            <div className="text-neon-green mb-2">INVESTIGATIVE PROTOCOL</div>
            <div className="text-gray-300 text-sm space-y-1">
              <p>• Step 1: Hover over buildings for visual clues</p>
              <p>• Step 2: Inspect source code (Ctrl+U) for HTML comments</p>
              <p>• Step 3: Check data attributes on building elements</p>
              <p>• Step 4: Monitor browser console and network tabs</p>
              <p>• Step 5: Follow hidden routes: /secret-nexus, /matrix-core</p>
              <p className="text-yellow-400">Final Assembly: N30N + _C1TY + _K3Y</p>
            </div>
          </div>

          {/* ASCII Art Clue */}
          <div className="border border-cyan-400 p-4 mb-4 bg-cyan-400/5">
            <div className="text-cyan-400 mb-2 text-xs">ENCODED_DISCOVERY_MAP:</div>
            <pre className="text-xs text-cyan-300" data-testid="discovery-map">
{`01001000 01101111 01110110 01100101 01110010  -> HOVER
01010011 01101111 01110101 01110010 01100011  -> SOURCE  
01000011 01101111 01101110 01110011 01101111  -> CONSOLE
01001110 01100101 01110100 01110111 01101111  -> NETWORK`}
            </pre>
          </div>
          
          <div className="text-neon-green">root@neoncity:~$ <span className="terminal-cursor" data-testid="terminal-cursor"></span></div>
        </div>
        
        {/* ASCII Art */}
        <pre className="text-xs text-cyber-purple mb-8 opacity-60" data-testid="ascii-error">
{`    ▄███████▄    ▄█   ▄█▄    ▄█          
   ███    ███   ███ ▄███▀   ███          
   ███    ███   ███▐██▀     ███          
   ███    ███  ▄█████▀      ███          
 ▀█████████▀  ▀▀█████▄     ███          
   ███          ███▐██▄    ███          
   ███          ███ ▀███▄  ███▌    ▄    
  ▄████▀        ███   ▀█▀  █████▄▄██    
                ▀                       `}
        </pre>
        
        {/* Action Buttons */}
        <div className="space-y-4">
          <Link href="/">
            <button className="neon-border bg-black/50 px-8 py-4 text-neon-cyan font-bold hover:bg-neon-cyan hover:text-black transition-all duration-300 w-full md:w-auto" data-testid="button-return">
              {'>'} RETURN TO GRID
            </button>
          </Link>
          
          <div className="text-xs text-gray-500 mt-4">
            <p>Lost in cyberspace? Try exploring the main grid for hidden secrets...</p>
          </div>
        </div>
        
        {/* Matrix Rain Effect for 404 */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
          {Array.from({length: 20}).map((_, i) => (
            <div
              key={i}
              className="absolute text-neon-green font-courier text-xs animate-matrix"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 5}s`
              }}
            >
              {['ERROR', '404', 'NULL', 'VOID', '???'][Math.floor(Math.random() * 5)]}
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}
