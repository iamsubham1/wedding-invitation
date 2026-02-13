import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function CountdownTimer() {
  const weddingDate = new Date("2026-03-05T11:00:00");

  const calculateTimeLeft = (): TimeLeft => {
    const difference = +weddingDate - +new Date();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-4xl md:text-5xl text-[#8B1538] mb-4"
            style={{ fontFamily: "Playfair Display, serif", fontWeight: 700 }}
          >
            Counting Down To Forever
          </h2>
          <p
            className="text-[#6B1129] mb-12"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Our special day is approaching
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {timeUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-white to-[#FFF8F3] backdrop-blur-sm rounded-3xl p-6 border-2 border-[#DAA520]/20"
              style={{ boxShadow: "0 10px 30px rgba(139, 21, 56, 0.1)" }}
            >
              <motion.div
                key={unit.value}
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 0.3 }}
                className="text-5xl md:text-6xl text-[#8B1538] mb-2"
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontWeight: 700,
                }}
              >
                {String(unit.value).padStart(2, "0")}
              </motion.div>
              <div className="h-0.5 w-12 mx-auto bg-gradient-to-r from-transparent via-[#DAA520] to-transparent mb-2" />
              <div
                className="text-sm md:text-base text-[#6B1129] uppercase tracking-wider font-medium"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {unit.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
