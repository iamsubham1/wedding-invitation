import { motion } from "motion/react";
import { useState } from "react";
import { format } from "date-fns";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Textarea } from "@/app/components/ui/textarea";
import { Heart, Sparkles } from "lucide-react";

export function BlessingsForm() {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedDate = format(new Date(), "d MMM, yyyy");
    fetch(
      "https://script.google.com/macros/s/AKfycbyzJTdWvtIduwg-fgWs-gBcJJD_yErC8wT1blPBOmLnXJ06MZs7Wby9QBKSVbhhnOWo/exec",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `Name=${formData.name}&Message=${formData.message}&Date=${formattedDate}`,
      }
    )
      .then((res) => res.text())
      .then((data) => console.log("Success:", data))
      .catch((err) => console.error(err));
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", message: "" });
    }, 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-2xl mx-auto bg-gradient-to-br from-white to-[#FFF8F3] backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-[#DAA520]/20"
      style={{ boxShadow: "0 20px 60px rgba(139, 21, 56, 0.15)" }}
    >
      <div className="text-center mb-8">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-block mb-4"
        >
          <div className="relative bg-gradient-to-br from-[#8B1538] to-[#6B1129] p-3 rounded-full">
            <Heart className="size-12 text-[#DAA520] fill-[#DAA520]" />
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-1 -right-1"
            >
              <Sparkles className="size-5 text-[#FFD700]" />
            </motion.div>
          </div>
        </motion.div>
        <h2
          className="text-4xl md:text-5xl text-[#8B1538] mb-3"
          style={{ fontFamily: "Playfair Display, serif", fontWeight: 700 }}
        >
          Send Your Blessings
        </h2>
        <p
          className="text-[#6B1129] text-lg"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Share your love, blessings, and congratulations with the happy couple
        </p>
      </div>

      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-12"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1 }}
            className="bg-gradient-to-br from-[#8B1538] to-[#6B1129] p-4 rounded-full inline-block mb-4"
          >
            <Heart className="size-16 text-[#DAA520] fill-[#DAA520]" />
          </motion.div>
          <h3
            className="text-2xl text-[#8B1538] mb-2"
            style={{ fontFamily: "Playfair Display, serif", fontWeight: 600 }}
          >
            Thank You!
          </h3>
          <p
            className="text-[#6B1129]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Your blessing has been received with love and gratitude.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label
              htmlFor="name"
              className="text-[#8B1538]"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
            >
              Your Name *
            </Label>
            <Input
              id="name"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="Enter your name"
              className="border-2 border-[#DAA520]/30 focus:border-[#DAA520] transition-colors rounded-xl"
              style={{ fontFamily: "Inter, sans-serif" }}
            />
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="message"
              className="text-[#8B1538]"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
            >
              Your Message *
            </Label>
            <Textarea
              id="message"
              required
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder="Write your blessings, wishes, or congratulations for the couple..."
              rows={6}
              className="border-2 border-[#DAA520]/30 focus:border-[#DAA520] transition-colors resize-none rounded-xl"
              style={{ fontFamily: "Inter, sans-serif" }}
            />
          </div>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-[#8B1538] to-[#6B1129] hover:from-[#6B1129] hover:to-[#8B1538] text-white py-6 text-lg transition-all duration-300 rounded-full font-semibold"
              style={{
                fontFamily: "Inter, sans-serif",
                boxShadow: "0 10px 30px rgba(139, 21, 56, 0.3)",
              }}
            >
              Send Blessings
            </Button>
          </motion.div>
        </form>
      )}

      {/* Decorative element */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-8 text-center"
      >
        <svg width="150" height="20" viewBox="0 0 150 20" className="mx-auto">
          <defs>
            <linearGradient id="formDivider" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#DAA520" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path
            d="M 10 10 Q 40 5 75 10 Q 110 15 140 10"
            stroke="url(#formDivider)"
            strokeWidth="1.5"
            fill="none"
          />
          {[30, 75, 120].map((x) => (
            <circle key={x} cx={x} cy="10" r="2" fill="#DAA520" />
          ))}
        </svg>
      </motion.div>
    </motion.div>
  );
}
