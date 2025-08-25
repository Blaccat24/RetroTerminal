import { useState, useRef, useEffect } from 'react';

export default function TerminalSection() {
  const [commandHistory, setCommandHistory] = useState<string[]>([
    'root@cybersec:~$ whoami',
    'elite_cyber_detective',
    'root@cybersec:~$ system_status',
    '🔐 ADVANCED INVESTIGATION TERMINAL ONLINE',
    '🕵️ Multi-phase security analysis ready',
    '⚠️  WARNING: Advanced hacking skills required',
    '',
    '💡 Type "help" for investigation commands',
    '🔍 Click main terminal above to begin investigation'
  ]);
  const [currentCommand, setCurrentCommand] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleCommand = (command: string) => {
    const cmd = command.trim().toLowerCase();
    const newHistory = [...commandHistory, `root@cybersec:~$ ${command}`];
    
    const hackingFunctions = (window as any).hackingFunctions;
    
    switch (cmd) {
      case 'help':
        newHistory.push('🔍 CYBER INVESTIGATION TERMINAL - 3 Simple Steps:');
        newHistory.push('');
        newHistory.push('Basic Commands:');
        newHistory.push('  help           - Show this command reference');
        newHistory.push('  status         - Check investigation progress');
        newHistory.push('  clear          - Clear terminal buffer');
        newHistory.push('');
        newHistory.push('Investigation Commands:');
        newHistory.push('  step1_solved   - Complete Step 1 (decode message)');
        newHistory.push('  step2_solved   - Complete Step 2 (find DOM element)');
        newHistory.push('  step3_solved   - Complete Step 3 (assemble key)');
        newHistory.push('');
        newHistory.push('🎯 Follow the steps in order to find the master key!');
        break;
        
      case 'status':
        const currentStep = (window as any).currentHackingStep || 0;
        newHistory.push('🔍 INVESTIGATION STATUS:');
        newHistory.push('');
        newHistory.push(`Current Step: ${currentStep}/3`);
        newHistory.push(`Step 1 - Decode Message: ${currentStep >= 1 ? '✅ COMPLETE' : '🔄 ACTIVE'}`);
        newHistory.push(`Step 2 - Find Element: ${currentStep >= 2 ? '✅ COMPLETE' : '⏳ WAITING'}`);
        newHistory.push(`Step 3 - Assemble Key: ${currentStep >= 3 ? '✅ COMPLETE' : '⏳ WAITING'}`);
        newHistory.push('');
        newHistory.push('💡 Check browser console for clues');
        break;
        
      case 'step1_solved':
        if (hackingFunctions?.step1Solved) {
          hackingFunctions.step1Solved();
          newHistory.push('🔓 STEP 1 COMPLETE:');
          newHistory.push('');
          newHistory.push('✅ Base64 decoded successfully');
          newHistory.push('✅ Fragment 1: CYB3R_MA');
          newHistory.push('');
          newHistory.push('🔍 Step 2 activated - find hidden DOM element');
        } else {
          newHistory.push('❌ STEP 1 NOT READY');
          newHistory.push('');
          newHistory.push('Click the terminal first to start investigation');
          newHistory.push('Then decode: Q1lCM1JfTUE=');
        }
        break;
        
      case 'step2_solved':
        if (hackingFunctions?.step2Solved) {
          hackingFunctions.step2Solved();
          newHistory.push('🔍 STEP 2 COMPLETE:');
          newHistory.push('');
          newHistory.push('✅ Hidden element found');
          newHistory.push('✅ Fragment 2: TR1X_20');
          newHistory.push('');
          newHistory.push('🏁 Final step ready - assemble the key');
        } else {
          newHistory.push('❌ STEP 2 NOT READY');
          newHistory.push('Complete Step 1 first');
        }
        break;
        
      case 'step3_solved':
        if (hackingFunctions?.step3Solved) {
          hackingFunctions.step3Solved();
          newHistory.push('🏆 INVESTIGATION COMPLETE:');
          newHistory.push('');
          newHistory.push('✅ All fragments assembled');
          newHistory.push('✅ Master Key: CYB3R_M4TR1X_2025');
          newHistory.push('');
          newHistory.push('🎉 SUCCESS! You found the secret!');
        } else {
          newHistory.push('❌ STEP 3 NOT READY');
          newHistory.push('Complete Steps 1 & 2 first');
        }
        break;
        
      case 'clear':
        setCommandHistory([]);
        setCurrentCommand('');
        return;
        
      default:
        newHistory.push(`❌ UNKNOWN COMMAND: ${cmd}`);
        newHistory.push('');
        newHistory.push('Type "help" for available commands');
        newHistory.push('Type "status" for current progress');
    }
    
    setCommandHistory(newHistory);
    setCurrentCommand('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(currentCommand);
    }
  };

  return (
    <section id="terminal" className="min-h-screen flex items-center justify-center bg-black relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-black neon-border rounded-lg overflow-hidden" data-testid="terminal-window">
            
            {/* Terminal Header */}
            <div className="bg-gradient-to-r from-dark-purple to-cyber-purple p-4 flex items-center space-x-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500" data-testid="terminal-close"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500" data-testid="terminal-minimize"></div>
                <div className="w-3 h-3 rounded-full bg-green-500" data-testid="terminal-maximize"></div>
              </div>
              <div className="font-courier text-sm text-neon-cyan">NEON_TERMINAL.EXE</div>
            </div>
            
            {/* Terminal Content */}
            <div className="p-6 font-courier text-sm min-h-96 max-h-96 overflow-y-auto" data-testid="terminal-content">
              <div className="space-y-1">
                {commandHistory.map((line, index) => (
                  <div key={index} className={
                    line.startsWith('root@cybersec:~$') ? 'text-neon-green' :
                    line.includes('Fragment') ? 'text-electric-magenta' :
                    line.includes('MASTER KEY') ? 'text-neon-cyan font-bold' :
                    line.includes('ERROR') || line.includes('Command not found') ? 'text-red-500' :
                    'text-gray-300'
                  }>
                    {line}
                  </div>
                ))}
                
                {/* Interactive Command Line */}
                <div className="flex items-center mt-4">
                  <span className="text-neon-green">root@cybersec:~$</span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={currentCommand}
                    onChange={(e) => setCurrentCommand(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="bg-transparent border-none outline-none text-white ml-2 flex-1 font-courier"
                    placeholder="Type command here... (try 'help')"
                    data-testid="terminal-input"
                  />
                  <span className="text-neon-cyan animate-blink">_</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
