import { Link } from 'wouter';

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-sm border-b border-neon-cyan/30">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 border-2 border-neon-cyan animate-spin" data-testid="logo-spinner"></div>
          <span className="text-xl font-bold text-neon-cyan animate-neon-pulse font-orbitron" data-testid="logo-text">
            NEON_CITY.EXE
          </span>
        </div>
        
        <div className="hidden md:flex space-x-8 font-courier">
          <a href="#home" className="hover:text-neon-cyan transition-colors" data-testid="nav-home">
            ./HOME
          </a>
          <a href="#about" className="hover:text-electric-magenta transition-colors" data-testid="nav-about">
            ./ABOUT
          </a>
          <a href="#explore" className="hover:text-neon-green transition-colors" data-testid="nav-explore">
            ./EXPLORE
          </a>
          <a href="#terminal" className="hover:text-cyber-purple transition-colors" data-testid="nav-terminal">
            ./TERMINAL
          </a>
        </div>
        
        <div className="text-xs font-courier text-neon-green">
          <span className="terminal-cursor" data-testid="connection-status">CONNECTED</span>
        </div>
      </nav>
    </header>
  );
}
