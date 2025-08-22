import { useState, useRef, useEffect } from 'react';

export default function TerminalSection() {
  const [commandHistory, setCommandHistory] = useState<string[]>([
    'root@neoncity:~$ whoami',
    'cyber_detective',
    'root@neoncity:~$ ls -la /secrets/',
    'total 3',
    '-rw-r--r-- 1 root root 42 Nov 15 23:59 fragment_01.txt',
    '-rw-r--r-- 1 root root 42 Nov 15 23:59 fragment_02.txt',
    '-rw-r--r-- 1 root root 42 Nov 15 23:59 fragment_03.txt',
    'root@neoncity:~$ cat /secrets/*.txt',
    'Fragment 1: Found in Building #1 source code',
    'Fragment 2: Discovered in Central Tower',
    'Fragment 3: Located in Building #5 comments',
    'root@neoncity:~$ combine_fragments',
    'ASSEMBLING SECRET KEY...',
    '🔑 MASTER KEY REVEALED: N30N_C1TY_K3Y 🔑'
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
    const newHistory = [...commandHistory, `root@neoncity:~$ ${command}`];
    
    switch (cmd) {
      case 'help':
        newHistory.push('Available commands: help, whoami, ls, cat, clear, matrix, hack, explore');
        break;
      case 'whoami':
        newHistory.push('cyber_detective');
        break;
      case 'ls':
        newHistory.push('fragments.db  matrix.exe  secrets.txt  cyber_protocols.sh');
        break;
      case 'cat secrets.txt':
        newHistory.push('SECRET_KEY: N30N_C1TY_K3Y');
        newHistory.push('ACCESS_LEVEL: CYBERPUNK_MASTER');
        break;
      case 'matrix':
        newHistory.push('Entering the matrix...');
        newHistory.push('Reality.exe has stopped working');
        newHistory.push('Welcome to the desert of the real');
        break;
      case 'hack':
        newHistory.push('Initiating hack sequence...');
        newHistory.push('Bypassing firewall... [OK]');
        newHistory.push('Accessing mainframe... [OK]');
        newHistory.push('You are now connected to the grid');
        break;
      case 'explore':
        newHistory.push('Scanning city grid for hidden fragments...');
        newHistory.push('Buildings detected: 5');
        newHistory.push('Tip: Hover over buildings in explore section to discover secrets');
        break;
      case 'clear':
        setCommandHistory([]);
        setCurrentCommand('');
        return;
      default:
        newHistory.push(`Command not found: ${command}`);
        newHistory.push('Type "help" for available commands');
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
                    line.startsWith('root@neoncity:~$') ? 'text-neon-green' :
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
                  <span className="text-neon-green">root@neoncity:~$</span>
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
