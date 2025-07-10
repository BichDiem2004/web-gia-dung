'use client';
import React, { useEffect, useState } from 'react';

const CountdownComponent = () => {
  const targetDate = new Date("2025-06-30T10:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft("Countdown Finished!");
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // ---- HÀM NÀY NẰM TRƯỚC return ----
  const getTimeUnits = (str: string) => {
    if (str === "Countdown Finished!") return null;
    const matched = str.match(/(\d+)d (\d+)h (\d+)m (\d+)s/);
    if (!matched) return null;
    return [matched[1], matched[2], matched[3], matched[4]];
  };

  const timeUnits = getTimeUnits(timeLeft);

  return (
    <div className="flex items-center gap-2">
      {timeUnits ? (
        <>
          <span className="bg-[#FF4757] text-white px-2 py-2 rounded-lg font-semibold text-sm">{timeUnits[0]}</span>
          <span className="font-bold text-lg">:</span>
          <span className="bg-[#FF4757] text-white px-2 py-2 rounded-lg font-semibold text-sm">{timeUnits[1]}</span>
          <span className="font-bold text-lg">:</span>
          <span className="bg-[#FF4757] text-white px-2 py-2 rounded-lg font-semibold text-sm">{timeUnits[2]}</span>
          <span className="font-bold text-lg">:</span>
          <span className="bg-[#FF4757] text-white px-2 py-2 rounded-lg font-semibold text-sm">{timeUnits[3]}</span>
        </>
      ) : (
        <span className="text-gray-600 font-medium">{timeLeft}</span>
      )}
    </div>
  );
};

export default CountdownComponent;
