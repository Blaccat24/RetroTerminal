import { useState, useEffect } from 'react';

export default function CityscapeSection() {
  const [discoveredFragments, setDiscoveredFragments] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);
  const [showSecretPanel, setShowSecretPanel] = useState(false);

  const handleBuildingHover = (buildingNum: string) => {
    // Check if this building contains a secret fragment
    if (['1', '3', '5'].includes(buildingNum) && !discoveredFragments.includes(buildingNum)) {
      setDiscoveredFragments(prev => [...prev, buildingNum]);
      setProgress(prev => prev + 1);
      
      // Show notification
      showNotification(`Fragment ${discoveredFragments.length + 1} discovered!`);
    }
  };

  const showNotification = (message: string) => {
    const notification = document.createElement('div');
    notification.className = 'fixed top-20 right-4 bg-neon-green text-black px-4 py-2 rounded font-courier text-sm z-50';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.remove();
    }, 3000);
  };

  useEffect(() => {
    if (progress === 3) {
      setShowSecretPanel(true);
    }
  }, [progress]);

  return (
    <section id="explore" className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-deep-purple via-dark-purple to-black"></div>
      
      {/* Grid Background */}
      <div className="absolute inset-0 grid-overlay opacity-30"></div>
      
      {/* City Buildings */}
      <div className="absolute bottom-0 w-full h-96 flex items-end justify-center space-x-2 px-4">
        
        {/* Building 1 - Contains secret clue in HTML comment */}
        {/* SECRET_FRAGMENT_1: N30N */}
        <div 
          className="building bg-gradient-to-t from-neon-cyan/80 to-neon-cyan/40 w-16 h-32" 
          data-building="1"
          data-testid="building-1"
          style={{clipPath: 'polygon(0% 100%, 0% 20%, 15% 0%, 85% 0%, 100% 20%, 100% 100%)'}}
          onMouseEnter={() => handleBuildingHover('1')}
        />
        
        {/* Building 2 */}
        <div 
          className="building bg-gradient-to-t from-electric-magenta/80 to-electric-magenta/40 w-20 h-40" 
          data-building="2"
          data-testid="building-2"
          style={{clipPath: 'polygon(0% 100%, 0% 0%, 100% 0%, 100% 100%)'}}
          onMouseEnter={() => handleBuildingHover('2')}
        />
        
        {/* Building 3 - Central tower with secret */}
        {/* SECRET_FRAGMENT_2: _C1TY */}
        <div 
          className="building bg-gradient-to-t from-cyber-purple/80 to-cyber-purple/40 w-24 h-56 relative" 
          data-building="3"
          data-testid="building-3"
          style={{clipPath: 'polygon(0% 100%, 0% 10%, 20% 0%, 80% 0%, 100% 10%, 100% 100%)'}}
          onMouseEnter={() => handleBuildingHover('3')}
        >
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-neon-green animate-pulse" data-testid="tower-beacon"></div>
        </div>
        
        {/* Building 4 */}
        <div 
          className="building bg-gradient-to-t from-neon-green/80 to-neon-green/40 w-18 h-36" 
          data-building="4"
          data-testid="building-4"
          style={{clipPath: 'polygon(0% 100%, 0% 30%, 30% 0%, 70% 0%, 100% 30%, 100% 100%)'}}
          onMouseEnter={() => handleBuildingHover('4')}
        />
        
        {/* Building 5 - Final secret piece */}
        {/* SECRET_FRAGMENT_3: _K3Y */}
        <div 
          className="building bg-gradient-to-t from-electric-blue/80 to-electric-blue/40 w-16 h-44" 
          data-building="5"
          data-testid="building-5"
          style={{clipPath: 'polygon(0% 100%, 0% 0%, 100% 0%, 100% 100%)'}}
          onMouseEnter={() => handleBuildingHover('5')}
        />
      </div>
      
      {/* Secret Panel */}
      <div 
        className={`secret-panel absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/90 neon-border p-8 rounded-lg ${showSecretPanel ? 'revealed' : ''}`}
        data-testid="secret-panel"
      >
        <div className="font-courier text-center">
          <div className="text-neon-cyan mb-4">
            <div className="text-2xl mb-2">🔓</div>
            <p>ACCESS GRANTED</p>
          </div>
          <div className="text-neon-green mb-4">
            <p>SECRET KEY DISCOVERED:</p>
            <p className="text-xl font-bold" data-testid="secret-key">N30N_C1TY_K3Y</p>
          </div>
          <div className="text-gray-400 text-sm">
            <p>CONGRATULATIONS, CYBER DETECTIVE</p>
            <p>You've unlocked the hidden protocol</p>
          </div>
        </div>
      </div>
      
      {/* Instruction Panel */}
      <div className="absolute top-10 left-10 bg-black/70 neon-border p-6 rounded-lg max-w-sm" data-testid="instruction-panel">
        <h3 className="text-neon-cyan font-bold mb-3 font-orbitron">
          🔍 INVESTIGATION MODE
        </h3>
        <div className="font-courier text-sm text-gray-300 space-y-2">
          <p>{'>'} Hover over the city buildings</p>
          <p>{'>'} Inspect the source code</p>
          <p>{'>'} Look for hidden fragments</p>
          <p className="text-neon-green">{'>'} Progress: <span data-testid="progress-counter">{progress}/3</span></p>
        </div>
      </div>
    </section>
  );
}
