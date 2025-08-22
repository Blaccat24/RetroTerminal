import { useEffect, useState } from 'react';

export default function CursorTrail() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', updatePosition);
    return () => document.removeEventListener('mousemove', updatePosition);
  }, []);

  return (
    <div
      className="cursor-trail"
      style={{
        left: position.x - 10,
        top: position.y - 10,
      }}
      data-testid="cursor-trail"
    />
  );
}
