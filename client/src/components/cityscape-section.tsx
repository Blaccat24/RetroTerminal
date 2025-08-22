import { useState, useEffect } from 'react';

export default function CityscapeSection() {
  const [discoveredFragments, setDiscoveredFragments] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);
  const [showSecretPanel, setShowSecretPanel] = useState(false);

  const handleBuildingClick = (buildingNum: string) => {
    // Step 1: Requires specific sequence - click buildings in order 1, 3, 5
    const expectedSequence = ['1', '3', '5'];
    const currentIndex = discoveredFragments.length;
    
    if (buildingNum === expectedSequence[currentIndex] && currentIndex < 3) {
      setDiscoveredFragments(prev => [...prev, buildingNum]);
      setProgress(prev => prev + 1);
      
      // Step-specific notifications
      if (currentIndex === 0) {
        showNotification(`First clue found! Look for the next beacon...`);
      } else if (currentIndex === 1) {
        showNotification(`Second fragment acquired! One more remains...`);
      } else if (currentIndex === 2) {
        showNotification(`Final piece discovered! Check the terminal for assembly...`);
      }
    } else if (!expectedSequence.includes(buildingNum)) {
      showNotification(`This building holds no secrets...`);
    } else if (discoveredFragments.includes(buildingNum)) {
      showNotification(`Already scanned this location.`);
    } else {
      showNotification(`Wrong sequence. Look for the starting point...`);
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
        
        {/* Building 1 - Start here: Look for the data-clue attribute */}
        {/* SECRET_CLUE_1: Inspect this HTML comment. The path begins with N30N */}
        <div 
          className="building bg-gradient-to-t from-indigo-400/80 to-indigo-300/40 w-16 h-32 cursor-pointer hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300" 
          data-building="1"
          data-clue="FIRST_BEACON"
          data-fragment="N30N"
          data-testid="building-1"
          title="Click to scan for neural fragments - inspect source for clues"
          style={{clipPath: 'polygon(0% 100%, 0% 20%, 15% 0%, 85% 0%, 100% 20%, 100% 100%)'}}
          onClick={() => handleBuildingClick('1')}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-10px) scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
          }}
        />
        
        {/* Building 2 - Decoy */}
        <div 
          className="building bg-gradient-to-t from-purple-500/80 to-purple-400/40 w-20 h-40 cursor-pointer" 
          data-building="2"
          data-testid="building-2"
          title="Scanning... no neural activity detected"
          style={{clipPath: 'polygon(0% 100%, 0% 0%, 100% 0%, 100% 100%)'}}
          onClick={() => handleBuildingClick('2')}
        />
        
        {/* Building 3 - Central tower: Second in sequence, check console.log output */}
        {/* HIDDEN_PATH: /secret-nexus - Visit this route for additional clues */}
        <div 
          className="building bg-gradient-to-t from-violet-600/80 to-violet-500/40 w-24 h-56 relative cursor-pointer hover:shadow-lg hover:shadow-purple-400/50 transition-all duration-300" 
          data-building="3"
          data-neural-core="CENTRAL_NEXUS"
          data-route="/secret-nexus"
          data-testid="building-3"
          title="Central command tower - neural activity detected"
          style={{clipPath: 'polygon(0% 100%, 0% 10%, 20% 0%, 80% 0%, 100% 10%, 100% 100%)'}}
          onClick={() => {
            console.log('NEURAL_FRAGMENT_2: _C1TY_CORE');
            console.log('🔍 INVESTIGATOR TIP: Check data-route attribute for hidden path');
            handleBuildingClick('3');
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-10px) scale(1.05)';
            // Show hidden ASCII overlay on hover
            const overlay = document.createElement('div');
            overlay.className = 'absolute inset-0 bg-black/80 flex items-center justify-center text-green-400 text-xs font-mono pointer-events-none';
            overlay.innerHTML = '<pre>███<br/>█▓█<br/>███</pre>';
            e.currentTarget.appendChild(overlay);
            overlay.id = 'hover-overlay-3';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            const overlay = document.getElementById('hover-overlay-3');
            if (overlay) overlay.remove();
          }}
        >
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-cyan-400 animate-pulse" data-testid="tower-beacon"></div>
        </div>
        
        {/* Building 4 - Decoy */}
        <div 
          className="building bg-gradient-to-t from-blue-500/80 to-blue-400/40 w-18 h-36 cursor-pointer" 
          data-building="4"
          data-testid="building-4"
          title="Residential block - no fragments detected"
          style={{clipPath: 'polygon(0% 100%, 0% 30%, 30% 0%, 70% 0%, 100% 30%, 100% 100%)'}}
          onClick={() => handleBuildingClick('4')}
        />
        
        {/* Building 5 - Final piece: Check network tab for hidden request */}
        {/* FINAL_SEQUENCE: The complete key assembles as N30N_C1TY_K3Y */}
        <div 
          className="building bg-gradient-to-t from-fuchsia-500/80 to-fuchsia-400/40 w-16 h-44 cursor-pointer hover:shadow-lg hover:shadow-pink-400/50 transition-all duration-300" 
          data-building="5"
          data-final-key="ENCRYPTED"
          data-unlock="K3Y"
          data-testid="building-5"
          title="Data fortress - maximum security protocol"
          style={{clipPath: 'polygon(0% 100%, 0% 0%, 100% 0%, 100% 100%)'}}
          onClick={() => {
            // Step 2: Hidden network request reveals final fragment
            fetch('data:text/plain;base64,RklOQUxfRlJBR01FTlQ6IF9LM1k=')
              .then(r => r.text())
              .then(data => {
                console.log('Decoded fragment:', atob(data.split(',')[1]));
                console.log('🎯 SECRET ROUTE UNLOCKED: /matrix-core');
              });
            handleBuildingClick('5');
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-10px) scale(1.05)';
            // Matrix rain effect on hover
            const overlay = document.createElement('div');
            overlay.className = 'absolute inset-0 bg-black/80 overflow-hidden pointer-events-none';
            overlay.innerHTML = `
              <div class="text-green-400 text-xs font-mono animate-matrix absolute" style="left: 20%; animation-delay: 0s;">1</div>
              <div class="text-green-400 text-xs font-mono animate-matrix absolute" style="left: 50%; animation-delay: 0.5s;">0</div>
              <div class="text-green-400 text-xs font-mono animate-matrix absolute" style="left: 80%; animation-delay: 1s;">1</div>
            `;
            e.currentTarget.appendChild(overlay);
            overlay.id = 'hover-overlay-5';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            const overlay = document.getElementById('hover-overlay-5');
            if (overlay) overlay.remove();
          }}
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
          <p>{'>'} STEP 1: Click buildings to scan for neural fragments</p>
          <p>{'>'} STEP 2: Check browser dev tools (Console/Network)</p>
          <p>{'>'} STEP 3: Decode and assemble in terminal</p>
          <p className="text-neon-green">{'>'} Neural scans: <span data-testid="progress-counter">{progress}/3</span></p>
          <p className="text-xs text-gray-500 mt-2">💡 Hint: Start with the shortest building</p>
        </div>
      </div>
    </section>
  );
}
