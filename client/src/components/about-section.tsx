export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center relative scanlines">
      <div className="absolute inset-0 bg-gradient-to-br from-dark-purple/50 via-black/70 to-deep-purple/50"></div>
      
      <div className="container mx-auto px-6 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-neon-cyan animate-neon-pulse font-orbitron" data-testid="about-title">
              ABOUT THE GRID
            </h2>
            <div className="font-courier text-gray-300 space-y-4">
              <p>Welcome to the Neon City Grid, where cyberpunk aesthetics meet interactive mystery solving.</p>
              <p className="text-neon-green">This digital realm combines:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li className="text-electric-magenta">Retro terminal interfaces</li>
                <li className="text-neon-cyan">Hidden secret discovery systems</li>
                <li className="text-cyber-purple">Interactive cityscape exploration</li>
                <li className="text-neon-green">1990s hacker culture aesthetics</li>
              </ul>
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              
              <div className="neon-border bg-black/50 p-4 text-center animate-glow" data-testid="feature-code">
                <div className="text-2xl text-neon-cyan mb-2">💻</div>
                <div className="font-courier text-sm">SOURCE CODE<br/>INSPECTION</div>
              </div>
              
              <div className="neon-border bg-black/50 p-4 text-center animate-glow" style={{animationDelay: '0.5s'}} data-testid="feature-hidden">
                <div className="text-2xl text-electric-magenta mb-2">🔍</div>
                <div className="font-courier text-sm">HIDDEN<br/>ELEMENTS</div>
              </div>
              
              <div className="neon-border bg-black/50 p-4 text-center animate-glow" style={{animationDelay: '1s'}} data-testid="feature-puzzle">
                <div className="text-2xl text-cyber-purple mb-2">🧩</div>
                <div className="font-courier text-sm">PUZZLE<br/>SOLVING</div>
              </div>
              
              <div className="neon-border bg-black/50 p-4 text-center animate-glow" style={{animationDelay: '1.5s'}} data-testid="feature-unlock">
                <div className="text-2xl text-neon-green mb-2">🔓</div>
                <div className="font-courier text-sm">SECRET<br/>UNLOCKING</div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
