import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';

export default function LottieLoader({ animationUrl, loop = true, className = "", ...props }) {
  const [animationData, setAnimationData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let active = true;
    setLoading(true);
    setError(false);

    fetch(animationUrl)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to download animation');
        return res.json();
      })
      .then((data) => {
        if (active) {
          setAnimationData(data);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.error("Lottie load failure:", err);
        if (active) {
          setError(true);
          setLoading(false);
        }
      });

    return () => {
      active = false;
    };
  }, [animationUrl]);

  if (loading) {
    return (
      <div className={`flex items-center justify-center ${className}`} {...props}>
        {/* Sleek luxury metallic loader spinner */}
        <div className="w-8 h-8 rounded-full border-2 border-brand-gold border-t-transparent animate-spin" />
      </div>
    );
  }

  if (error || !animationData) {
    return (
      <div className={`flex items-center justify-center text-brand-orange ${className}`} {...props}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      </div>
    );
  }

  return (
    <div className={className} {...props}>
      <Lottie animationData={animationData} loop={loop} />
    </div>
  );
}
