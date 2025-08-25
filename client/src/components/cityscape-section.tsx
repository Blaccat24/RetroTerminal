import { useState, useEffect } from 'react';

export default function CityscapeSection() {
  const [hackingStep, setHackingStep] = useState(0);
  const [discoveredClues, setDiscoveredClues] = useState<string[]>([]);
  const [showSecretPanel, setShowSecretPanel] = useState(false);
  const [activeInvestigation, setActiveInvestigation] = useState('');

  const handleInvestigationStart = () => {
    // Force alert first to confirm click worked
    alert('SECRET KEY HUNT STARTED! Check console now!');
    
    // Clear and log immediately
    console.clear();
    console.log('🔐 SECRET KEY HUNT STARTED!');
    console.log('================================');
    console.log('STEP 1: SECRET CODE FOUND!');
    console.log('================================');
    console.log('');
    console.log('YOUR SECRET CODE IS: Q1lCM1JfTUE=');
    console.log('');
    console.log('HINT: This is Base64 encoding. Decode it!');
    console.log('Then type: step1_solved()');
    console.log('');
    console.log('================================');
    
    // Also use styled logs
    setTimeout(() => {
      console.log('%c🔐 SECRET KEY HUNT STARTED!', 'color: #00ff00; font-family: monospace; font-size: 20px; font-weight: bold; background: black; padding: 10px;');
      console.log('%cYour secret code is: Q1lCM1JfTUE=', 'color: #ff00ff; font-family: monospace; font-size: 24px; font-weight: bold; background: yellow; color: black; padding: 5px;');
      console.log('%cThen type in console: step1_solved()', 'color: #ffff00; font-family: monospace; font-size: 16px; background: red; padding: 5px;');
    }, 100);
    
    setActiveInvestigation('STEP_1_DECODE');
    setHackingStep(1);
    showNotification('🔍 Step 1: Find the secret code in console!');
  };

  const handleStep1Solved = () => {
    if (hackingStep === 1) {
      setHackingStep(2);
      setDiscoveredClues(prev => [...prev, 'STEP_1_COMPLETE']);
      showNotification('✅ Step 2: Find the hidden element');
      
      // Step 2: Add hidden DOM element
      const hiddenDiv = document.createElement('div');
      hiddenDiv.id = 'secret-clue';
      hiddenDiv.setAttribute('data-secret', 'TR1X_20');
      hiddenDiv.style.position = 'absolute';
      hiddenDiv.style.top = '0';
      hiddenDiv.style.left = '0';
      hiddenDiv.style.opacity = '0';
      hiddenDiv.innerHTML = 'SECOND_FRAGMENT: TR1X_20';
      document.body.appendChild(hiddenDiv);
      
      console.log('');
      console.log('%c' + '='.repeat(50), 'color: #00ff00; font-family: monospace; font-size: 16px;');
      console.log('%cSTEP 2: FIND THE HIDDEN ELEMENT!', 'color: #ffff00; font-family: monospace; font-size: 18px; font-weight: bold;');
      console.log('%c' + '='.repeat(50), 'color: #00ff00; font-family: monospace; font-size: 16px;');
      console.log('');
      console.log('%cA hidden element was just added to the page!', 'color: #00ff80; font-family: monospace; font-size: 16px;');
      console.log('%cPress F12 → Elements tab → Find data-secret attribute', 'color: #ffff00; font-family: monospace; font-size: 16px;');
      console.log('%cThen type in console: step2_solved()', 'color: #ff8000; font-family: monospace; font-size: 16px; background: red; padding: 5px;');
      console.log('');
      console.log('%c' + '='.repeat(50), 'color: #00ff00; font-family: monospace; font-size: 16px;');
    }
  };

  const handleStep2Solved = () => {
    if (hackingStep === 2) {
      setHackingStep(3);
      setDiscoveredClues(prev => [...prev, 'STEP_2_COMPLETE']);
      showNotification('🏁 Step 3: Final assembly');
      
      console.log('');
      console.log('%c' + '='.repeat(50), 'color: #00ff00; font-family: monospace; font-size: 16px;');
      console.log('%cSTEP 3: PUT THE PIECES TOGETHER!', 'color: #ffff00; font-family: monospace; font-size: 18px; font-weight: bold;');
      console.log('%c' + '='.repeat(50), 'color: #00ff00; font-family: monospace; font-size: 16px;');
      console.log('');
      console.log('%cYou found these pieces:', 'color: #ff0080; font-family: monospace; font-size: 16px;');
      console.log('%cPiece 1: CYB3R_MA (from decoding)', 'color: #00ff80; font-family: monospace; font-size: 16px;');
      console.log('%cPiece 2: TR1X_20 (from hidden element)', 'color: #00ff80; font-family: monospace; font-size: 16px;');
      console.log('%cPiece 3: 25 (bonus piece!)', 'color: #00ff80; font-family: monospace; font-size: 16px;');
      console.log('');
      console.log('%cPut them together: CYB3R_MA + TR1X_20 + 25 = ?', 'color: #ffff00; font-family: monospace; font-size: 16px; font-weight: bold;');
      console.log('%cThen type in console: step3_solved()', 'color: #ff8000; font-family: monospace; font-size: 16px; background: red; padding: 5px;');
      console.log('');
      console.log('%c' + '='.repeat(50), 'color: #00ff00; font-family: monospace; font-size: 16px;');
    }
  };

  const handleStep3Solved = () => {
    if (hackingStep === 3) {
      setDiscoveredClues(prev => [...prev, 'INVESTIGATION_COMPLETE']);
      setShowSecretPanel(true);
      
      console.log('');
      console.log('%c' + '★'.repeat(50), 'color: #ffff00; font-family: monospace; font-size: 16px;');
      console.log('%c🏆 SUCCESS! SECRET KEY FOUND! 🏆', 'color: #00ff00; font-family: monospace; font-size: 20px; font-weight: bold; background: black; padding: 10px;');
      console.log('%c' + '★'.repeat(50), 'color: #ffff00; font-family: monospace; font-size: 16px;');
      console.log('');
      console.log('%cTHE SECRET KEY IS:', 'color: #ff00ff; font-family: monospace; font-size: 18px; font-weight: bold;');
      console.log('%cCYB3R_M4TR1X_2025', 'color: #ffff00; font-family: monospace; font-size: 24px; font-weight: bold; background: green; color: black; padding: 10px;');
      console.log('');
      console.log('%c🎉 DEMO COMPLETE! WELL DONE! 🎉', 'color: #ff00ff; font-family: monospace; font-size: 18px; font-weight: bold;');
      console.log('%c' + '★'.repeat(50), 'color: #ffff00; font-family: monospace; font-size: 16px;');
      showNotification('🏆 DEMO COMPLETE! Secret Key: CYB3R_M4TR1X_2025');
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
    // Add keyboard shortcuts for quick testing
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'H') {
        if (hackingStep === 1) handleStep1Solved();
        else if (hackingStep === 2) handleStep2Solved();
        else if (hackingStep === 3) handleStep3Solved();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [hackingStep]);

  // Global functions for terminal integration and step tracking
  useEffect(() => {
    (window as any).step1_solved = handleStep1Solved;
    (window as any).step2_solved = handleStep2Solved;
    (window as any).step3_solved = handleStep3Solved;
    (window as any).hackingFunctions = {
      step1Solved: handleStep1Solved,
      step2Solved: handleStep2Solved,
      step3Solved: handleStep3Solved
    };
    (window as any).currentHackingStep = hackingStep;
  }, [hackingStep]);

  return (
    <section id="explore" className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-deep-purple via-dark-purple to-black"></div>
      
      {/* Grid Background */}
      <div className="absolute inset-0 grid-overlay opacity-30"></div>
      
      {/* Central Investigation Hub */}
      <div className="absolute bottom-0 w-full h-96 flex items-center justify-center">
        
        {/* Main Hacking Terminal */}
        <div 
          className="cyber-terminal bg-black/90 neon-border rounded-lg p-8 cursor-pointer hover:neon-box-glow transition-all duration-300"
          data-testid="cyber-terminal"
          onClick={hackingStep === 0 ? handleInvestigationStart : undefined}
          style={{
            minWidth: '400px',
            minHeight: '250px',
            border: '2px solid #00ffff',
            boxShadow: '0 0 20px rgba(0, 255, 255, 0.3)',
          }}
        >
          <div className="font-courier text-center space-y-4">
            {hackingStep === 0 && (
              <>
                <div className="text-neon-cyan text-2xl mb-4 animate-pulse">
                  🔍 SECRET KEY HUNT
                </div>
                <div className="text-green-400 text-lg animate-pulse font-bold">
                  CLICK HERE TO START THE HUNT!
                </div>
                <div className="text-gray-400 text-sm space-y-2">
                  <p>🎯 3 Easy Steps to Find the Secret Key</p>
                  <p>• Step 1: Decode a Base64 message (easy!)</p>
                  <p>• Step 2: Find a hidden HTML element</p>
                  <p>• Step 3: Put the pieces together</p>
                  <p className="text-yellow-400 font-bold">📱 IMPORTANT: Open F12 Console NOW!</p>
                </div>
              </>
            )}
            
            {hackingStep > 0 && (
              <>
                <div className="text-neon-cyan text-xl mb-4">
                  🔓 INVESTIGATION ACTIVE
                </div>
                <div className="text-yellow-400">
                  STEP {hackingStep}/3 - {activeInvestigation}
                </div>
                <div className="text-green-400 text-sm">
                  Progress: {discoveredClues.length} steps completed
                </div>
                <div className="text-gray-400 text-xs mt-4">
                  {hackingStep < 4 ? 'Check browser console for clues...' : 'Investigation Complete!'}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Background Matrix Effects */}
        {hackingStep > 0 && (
          <div className="absolute inset-0 pointer-events-none">
            <div className="matrix-rain opacity-20"></div>
          </div>
        )}

      </div>
      
      {/* Master Key Revealed Panel */}
      {showSecretPanel && (
        <div 
          className="master-key-panel absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/95 neon-border p-12 rounded-lg animate-pulse-glow z-50"
          data-testid="master-key-panel"
          style={{
            border: '3px solid #ffff00',
            boxShadow: '0 0 30px rgba(255, 255, 0, 0.5), inset 0 0 30px rgba(255, 255, 0, 0.1)',
            animation: 'glow 2s ease-in-out infinite alternate',
          }}
        >
          <div className="font-courier text-center space-y-6">
            <div className="text-yellow-400 text-3xl mb-6">
              🏆 MASTER HACKER STATUS ACHIEVED
            </div>
            <div className="text-neon-green text-2xl mb-4">
              <p>ULTIMATE SECRET KEY UNLOCKED:</p>
              <p className="text-3xl font-bold text-yellow-400" data-testid="master-key">CYB3R_M4TR1X_2025</p>
            </div>
            <div className="text-cyan-400 space-y-2">
              <p>✓ Step 1: Message decoded</p>
              <p>✓ Step 2: Hidden element found</p>
              <p>✓ Step 3: Key assembled</p>
            </div>
            <div className="text-gray-300 text-sm mt-6">
              <p>CYBER INVESTIGATION COMPLETE</p>
              <p>You successfully found the master key!</p>
            </div>
          </div>
        </div>
      )}
      
      {/* Simple Investigation Panel */}
      <div className="absolute top-10 left-10 bg-black/80 neon-border p-6 rounded-lg max-w-md" data-testid="investigation-panel">
        <h3 className="text-neon-cyan font-bold mb-3 font-orbitron">
          🔍 CYBER INVESTIGATION
        </h3>
        <div className="font-courier text-sm text-gray-300 space-y-2">
          <p className="text-yellow-400">Current Step: {hackingStep}/3</p>
          
          {hackingStep === 0 && (
            <>
              <p>{'>'} Click terminal to begin</p>
              <p>{'>'} 3 simple steps to solve</p>
              <p>{'>'} Intermediate difficulty</p>
            </>
          )}
          
          {hackingStep === 1 && (
            <>
              <p className="text-green-400">{'>'} STEP 1: Decode the Base64 message</p>
              <p>{'>'} Look in console for: Q1lCM1JfTUE=</p>
              <p>{'>'} Decode it, then type: step1_solved()</p>
              <p className="text-yellow-400">{'>'} Hint: Use an online Base64 decoder!</p>
            </>
          )}
          
          {hackingStep === 2 && (
            <>
              <p className="text-purple-400">{'>'} STEP 2: Find hidden HTML element</p>
              <p>{'>'} Press F12 → Elements tab</p>
              <p>{'>'} Find element with data-secret attribute</p>
              <p>{'>'} Then type: step2_solved</p>
            </>
          )}
          
          {hackingStep === 3 && (
            <>
              <p className="text-pink-400">{'>'} STEP 3: Put pieces together</p>
              <p>{'>'} Combine: Part1 + Part2 + 25</p>
              <p>{'>'} Then type: step3_solved</p>
            </>
          )}
          
          <div className="text-xs text-gray-500 mt-4 space-y-1">
            <p>💡 This is beginner-friendly!</p>
            <p>🔍 Use F12 console and elements</p>
            <p>🎯 No time pressure, take your time</p>
            <p>🚀 Secret key: CYB3R_M4TR1X_2025</p>
          </div>
        </div>
      </div>
    </section>
  );
}
