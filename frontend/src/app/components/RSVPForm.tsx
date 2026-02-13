import { motion } from 'motion/react';
import { useState } from 'react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Textarea } from '@/app/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/app/components/ui/radio-group';
import { Checkbox } from '@/app/components/ui/checkbox';
import { Heart } from 'lucide-react';

export function RSVPForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    attendance: 'yes',
    guests: '1',
    events: [] as string[],
    dietaryRestrictions: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleEventToggle = (event: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      events: checked 
        ? [...prev.events, event]
        : prev.events.filter(e => e !== event)
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12"
    >
      <div className="text-center mb-8">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-block mb-4"
        >
          <Heart className="size-12 text-[#C4A07A] fill-[#C4A07A]" />
        </motion.div>
        <h2 className="text-4xl md:text-5xl font-serif text-[#8B7355] mb-2">RSVP</h2>
        <p className="text-[#A8927D]">Please join us in celebrating our special day</p>
      </div>

      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-12"
        >
          <Heart className="size-16 text-[#C4A07A] fill-[#C4A07A] mx-auto mb-4" />
          <h3 className="text-2xl font-serif text-[#8B7355] mb-2">Thank You!</h3>
          <p className="text-[#A8927D]">We've received your RSVP and can't wait to celebrate with you.</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-[#8B7355]">Full Name *</Label>
            <Input
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Enter your full name"
              className="border-[#D4C4B0]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-[#8B7355]">Email *</Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your@email.com"
                className="border-[#D4C4B0]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-[#8B7355]">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+1 (555) 000-0000"
                className="border-[#D4C4B0]"
              />
            </div>
          </div>

          <div className="space-y-3">
            <Label className="text-[#8B7355]">Will you be attending? *</Label>
            <RadioGroup
              value={formData.attendance}
              onValueChange={(value) => setFormData({ ...formData, attendance: value })}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="yes" />
                <Label htmlFor="yes" className="cursor-pointer text-[#8B7355]">
                  Yes, I'll be there!
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="no" />
                <Label htmlFor="no" className="cursor-pointer text-[#8B7355]">
                  Sorry, can't make it
                </Label>
              </div>
            </RadioGroup>
          </div>

          {formData.attendance === 'yes' && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <Label htmlFor="guests" className="text-[#8B7355]">Number of Guests</Label>
                <Input
                  id="guests"
                  type="number"
                  min="1"
                  max="10"
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="border-[#D4C4B0]"
                />
              </div>

              <div className="space-y-3">
                <Label className="text-[#8B7355]">Which events will you attend?</Label>
                <div className="space-y-3">
                  {[
                    { id: 'haldi-mehendi', label: 'Haldi & Mehendi' },
                    { id: 'sangeet', label: 'Sangeet' },
                    { id: 'shaadi', label: 'Shaadi (Wedding)' },
                    { id: 'reception', label: 'Reception' }
                  ].map((event) => (
                    <div key={event.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={event.id}
                        checked={formData.events.includes(event.id)}
                        onCheckedChange={(checked) => handleEventToggle(event.id, checked as boolean)}
                      />
                      <Label htmlFor={event.id} className="cursor-pointer text-[#8B7355]">
                        {event.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="dietary" className="text-[#8B7355]">Dietary Restrictions</Label>
                <Input
                  id="dietary"
                  value={formData.dietaryRestrictions}
                  onChange={(e) => setFormData({ ...formData, dietaryRestrictions: e.target.value })}
                  placeholder="Vegetarian, Vegan, Allergies, etc."
                  className="border-[#D4C4B0]"
                />
              </div>
            </motion.div>
          )}

          <div className="space-y-2">
            <Label htmlFor="message" className="text-[#8B7355]">Message for the Couple</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Share your best wishes..."
              rows={4}
              className="border-[#D4C4B0]"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-[#C4A07A] hover:bg-[#A8927D] text-white py-6 text-lg transition-colors duration-300"
          >
            Submit RSVP
          </Button>
        </form>
      )}
    </motion.div>
  );
}
