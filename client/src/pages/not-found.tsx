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
          
          {/* Secret Hint */}
          <div className="border-l-2 border-neon-green pl-4 mb-4">
            <div className="text-neon-green mb-2">HINT: Investigative Protocol</div>
            <div className="text-gray-300 text-sm">
              <p>• Check building source code for hidden fragments</p>
              <p>• Look for HTML comments in cityscape elements</p>
              <p>• Combine discovered fragments: N30N + _C1TY + _K3Y</p>
            </div>
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
