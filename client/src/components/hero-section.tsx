import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [currentMessage, setCurrentMessage] = useState('');
  const [messageIndex, setMessageIndex] = useState(0);

  const messages = [
    'SYSTEM INITIALIZED... ACCESSING CYBERSPACE...',
    'CONNECTION ESTABLISHED... WELCOME TO THE GRID...',
    'NEURAL INTERFACE ACTIVE... PREPARE FOR IMMERSION...',
    'CYBERPUNK PROTOCOLS LOADED... READY FOR EXPLORATION...'
  ];

  useEffect(() => {
    const message = messages[messageIndex];
    let charIndex = 0;
    
    const typeMessage = () => {
      if (charIndex < message.length) {
        setCurrentMessage(message.substring(0, charIndex + 1));
        charIndex++;
        setTimeout(typeMessage, 50);
      } else {
        setTimeout(() => {
          setMessageIndex((prev) => (prev + 1) % messages.length);
          setCurrentMessage('');
        }, 2000);
      }
    };

    typeMessage();
  }, [messageIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative scanlines grid-overlay">
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/50"></div>
      
      {/* Floating Geometric Shapes */}
      <div className="absolute top-20 left-10 w-16 h-16 border-2 border-electric-magenta animate-float opacity-30" data-testid="floating-square-1"></div>
      <div className="absolute top-40 right-20 w-12 h-12 border-2 border-neon-green rotate-45 animate-float opacity-40" style={{animationDelay: '1s'}} data-testid="floating-diamond"></div>
      <div className="absolute bottom-40 left-20 w-20 h-20 border-2 border-neon-cyan rounded-full animate-float opacity-25" style={{animationDelay: '2s'}} data-testid="floating-circle"></div>
      
      <div className="text-center z-10 max-w-4xl px-6">
        <h1 className="text-6xl md:text-8xl font-black mb-6 animate-glitch font-orbitron" data-testid="main-title">
          <span className="bg-gradient-to-r from-neon-cyan via-electric-magenta to-cyber-purple bg-clip-text text-transparent">
            WELCOME TO
          </span>
        </h1>
        
        <h2 className="text-4xl md:text-6xl font-bold text-neon-cyan animate-neon-pulse mb-8 font-orbitron" data-testid="subtitle">
          THE NEON GRID
        </h2>
        
        <div className="font-courier text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          <div className="typing-text">
            <span className="terminal-cursor" data-testid="typing-message">{currentMessage}</span>
          </div>
        </div>
        
        {/* ASCII Art */}
        <pre className="font-courier text-xs text-neon-green mb-8 opacity-70 hidden md:block" data-testid="ascii-art">
{`    ██████╗██╗   ██╗██████╗ ███████╗██████╗      ██████╗██╗████████╗██╗   ██╗
    ██╔════╝╚██╗ ██╔╝██╔══██╗██╔════╝██╔══██╗    ██╔════╝██║╚══██╔══╝╚██╗ ██╔╝
    ██║      ╚████╔╝ ██████╔╝█████╗  ██████╔╝    ██║     ██║   ██║    ╚████╔╝ 
    ██║       ╚██╔╝  ██╔══██╗██╔══╝  ██╔══██╗    ██║     ██║   ██║     ╚██╔╝  
    ╚██████╗   ██║   ██████╔╝███████╗██║  ██║    ╚██████╗██║   ██║      ██║   
     ╚═════╝   ╚═╝   ╚═════╝ ╚══════╝╚═╝  ╚═╝     ╚═════╝╚═╝   ╚═╝      ╚═╝`}
        </pre>
        
        <button className="neon-border bg-black/50 px-8 py-4 text-neon-cyan font-bold hover:bg-neon-cyan hover:text-black transition-all duration-300" data-testid="enter-matrix-button">
          {'>'} ENTER THE MATRIX
        </button>
      </div>
    </section>
  );
}
