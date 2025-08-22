import { useEffect, useRef } from 'react';

export default function MatrixBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const chars = '01アは日本語カタカナひらがな♠♣♥♦※卍';
    
    // Create matrix rain effect
    for (let i = 0; i < 50; i++) {
      const char = document.createElement('div');
      char.className = 'absolute text-neon-green font-courier text-sm opacity-30 animate-matrix';
      char.textContent = chars[Math.floor(Math.random() * chars.length)];
      char.style.left = Math.random() * 100 + '%';
      char.style.animationDelay = Math.random() * 10 + 's';
      char.style.animationDuration = (Math.random() * 5 + 5) + 's';
      container.appendChild(char);
    }

    // Cleanup function
    return () => {
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      data-testid="matrix-background"
    />
  );
}
