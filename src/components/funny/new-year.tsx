'use client';

import { useEffect, useState } from 'react';

export default function NewYearMascot() {
  const [confetti, setConfetti] = useState<Array<{ id: number; left: string; delay: string; color: string }>>([]);

  useEffect(() => {
    const colors = ['bg-pink-400', 'bg-cyan-400', 'bg-yellow-400', 'bg-purple-400', 'bg-green-400'];
    const newConfetti = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
      color: colors[Math.floor(Math.random() * colors.length)]
    }));
    setConfetti(newConfetti);
  }, []);

  return (
    <div className="relative inline-block">
      {/* Confetti */}
      {confetti.map((c) => (
        <div
          key={c.id}
          className={`absolute w-2 h-2 ${c.color} rounded-full animate-confetti-fall`}
          style={{
            left: c.left,
            animationDelay: c.delay,
            top: '-20px'
          }}
        />
      ))}

      {/* Mascot Container */}
      <div className="flex flex-col items-center gap-2 animate-bounce-slow">
        {/* Party Hat */}
        <div className="relative">
          <div className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[40px] border-b-pink-400 animate-wiggle" />
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-10 h-2 bg-yellow-400 rounded-full" />
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full" />
        </div>

        {/* Head */}
        <div className="relative w-16 h-16 bg-yellow-300 rounded-full shadow-lg">
          {/* Eyes */}
          <div className="absolute top-5 left-3 w-3 h-4 bg-gray-800 rounded-full animate-blink">
            <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-white rounded-full" />
          </div>
          <div className="absolute top-5 right-3 w-3 h-4 bg-gray-800 rounded-full animate-blink">
            <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-white rounded-full" />
          </div>

          {/* Smile */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-8 h-4 border-b-2 border-gray-800 rounded-b-full" />
        </div>

        {/* Text */}
        <div className="text-center mt-1">
          <div className="text-sm font-bold text-white drop-shadow-lg animate-pulse">
            Happy New Year!
          </div>
          <div className="text-2xl font-bold bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            2025
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes confetti-fall {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(300px) rotate(720deg);
            opacity: 0;
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes wiggle {
          0%, 100% {
            transform: rotate(-10deg);
          }
          50% {
            transform: rotate(10deg);
          }
        }

        @keyframes blink {
          0%, 90%, 100% {
            height: 1rem;
          }
          95% {
            height: 0.125rem;
          }
        }

        .animate-confetti-fall {
          animation: confetti-fall 3s linear infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        .animate-wiggle {
          animation: wiggle 1s ease-in-out infinite;
          transform-origin: bottom center;
        }

        .animate-blink {
          animation: blink 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}