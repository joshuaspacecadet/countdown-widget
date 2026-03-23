"use client";

import { useState, useEffect } from "react";

export default function CountdownWidget() {
  const [daysToGo, setDaysToGo] = useState(null);

  useEffect(() => {
    const calculateBusinessDays = () => {
      const targetDate = new Date("2026-03-31T00:00:00");
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      let businessDays = 0;
      let currentDate = new Date(today);

      while (currentDate < targetDate) {
        const dayOfWeek = currentDate.getDay();
        // 0 = Sunday, 6 = Saturday
        if (dayOfWeek !== 0 && dayOfWeek !== 6) {
          businessDays++;
        }
        currentDate.setDate(currentDate.getDate() + 1);
      }

      setDaysToGo(businessDays);
    };

    calculateBusinessDays();
    // Update daily at midnight
    const interval = setInterval(calculateBusinessDays, 1000 * 60 * 60);

    return () => clearInterval(interval);
  }, []);

  if (daysToGo === null) {
    return null;
  }

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&display=swap"
        rel="stylesheet"
      />

      <div
        className="flex flex-col items-center w-full"
        style={{
          backgroundColor: "#FFFFFF",
          padding: "0px",
          margin: "0px",
          overflow: "hidden",
          minHeight: "0",
        }}
      >
        {/* Mission Label */}
        <div
          style={{
            fontFamily: "Space Grotesk, sans-serif",
            fontWeight: 400,
            fontSize: "14px",
            color: "#000000",
            opacity: 0.5,
            letterSpacing: "0.3em",
            marginBottom: "12px",
            marginTop: "8px",
          }}
        >
          MISSION COUNTDOWN
        </div>

        {/* Grid Lines */}
        <div style={{ position: "relative", paddingBottom: "12px" }}>
          <div
            style={{
              position: "absolute",
              top: "-6px",
              left: "-100px",
              right: "-100px",
              height: "2px",
              background:
                "linear-gradient(90deg, transparent 0%, #FF5C00 50%, transparent 100%)",
              opacity: 0.4,
            }}
          />

          {/* Main Countdown Display */}
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: "12px",
              marginTop: "4px",
            }}
          >
            <span
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 400,
                fontSize: "24px",
                color: "#FF5C00",
                opacity: 0.7,
                letterSpacing: "0.15em",
              }}
            >
              T-
            </span>
            <span
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 700,
                fontSize: "72px",
                color: "#FF5C00",
                letterSpacing: "-0.04em",
                lineHeight: 1,
              }}
            >
              {daysToGo}
            </span>
            <span
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 400,
                fontSize: "24px",
                color: "#FF5C00",
                opacity: 0.7,
                letterSpacing: "0.1em",
              }}
            >
              DAYS
            </span>
          </div>

          <div
            style={{
              position: "absolute",
              bottom: "0",
              left: "-100px",
              right: "-100px",
              height: "2px",
              background:
                "linear-gradient(90deg, transparent 0%, #FF5C00 50%, transparent 100%)",
              opacity: 0.4,
            }}
          />
        </div>

        {/* Target Date */}
        <span
          style={{
            fontFamily: "Space Grotesk, sans-serif",
            fontWeight: 400,
            fontSize: "16px",
            color: "#000000",
            opacity: 0.6,
            letterSpacing: "0.1em",
            marginTop: "12px",
            marginBottom: "8px",
          }}
        >
          TARGET: MARCH 31, 2026
        </span>
      </div>
    </>
  );
}
