export default function TerminalSection() {
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
            <div className="p-6 font-courier text-sm min-h-96" data-testid="terminal-content">
              <div className="space-y-2">
                <div className="text-neon-green">root@neoncity:~$ whoami</div>
                <div className="text-gray-300">cyber_detective</div>
                
                <div className="text-neon-green">root@neoncity:~$ ls -la /secrets/</div>
                <div className="text-gray-300">total 3</div>
                <div className="text-gray-300">-rw-r--r-- 1 root root 42 Nov 15 23:59 fragment_01.txt</div>
                <div className="text-gray-300">-rw-r--r-- 1 root root 42 Nov 15 23:59 fragment_02.txt</div>
                <div className="text-gray-300">-rw-r--r-- 1 root root 42 Nov 15 23:59 fragment_03.txt</div>
                
                <div className="text-neon-green">root@neoncity:~$ cat /secrets/*.txt</div>
                <div className="text-neon-cyan">Fragment 1: Found in Building #1 source code</div>
                <div className="text-electric-magenta">Fragment 2: Discovered in Central Tower</div>
                <div className="text-cyber-purple">Fragment 3: Located in Building #5 comments</div>
                
                <div className="text-neon-green">root@neoncity:~$ combine_fragments</div>
                <div className="text-neon-cyan animate-neon-pulse">ASSEMBLING SECRET KEY...</div>
                
                <div className="text-white mt-4 p-4 bg-dark-purple/50 border border-neon-cyan">
                  <div className="text-center">
                    <div className="text-lg">🔑 MASTER KEY REVEALED 🔑</div>
                    <div className="text-2xl font-bold text-neon-cyan mt-2" data-testid="master-key">N30N_C1TY_K3Y</div>
                    <div className="text-sm mt-2 text-gray-400">Access Level: CYBERPUNK_MASTER</div>
                  </div>
                </div>
                
                <div className="text-neon-green mt-4">root@neoncity:~$ <span className="terminal-cursor" data-testid="terminal-cursor"></span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
