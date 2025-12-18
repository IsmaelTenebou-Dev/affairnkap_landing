
import React from 'react';
// Fix: Added 'Star' to the imports from lucide-react
import { Shield, Smartphone, FileCheck, Zap, Lock, BarChart3, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 50, duration: 0.8 }
  }
};

export const UVPSection: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-sm font-black text-indigo-600 uppercase tracking-widest mb-4">Why AffairNkap?</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Built for Community, <br className="hidden md:block" /> Engineered for <span className="text-indigo-600">Accountability.</span>
          </h3>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
            WhatsApp groups were made for chatting, not managing finances. AffairNkap provides the structure and security your Njangi deserves.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          transition={{ staggerChildren: 0.2 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {/* Card 1 */}
          <motion.div
            variants={cardVariants}
            className="p-10 rounded-[40px] bg-slate-50 border border-slate-100 hover:shadow-2xl hover:shadow-indigo-100/50 transition-all duration-300 group"
          >
            <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <Shield className="text-emerald-500" size={28} />
            </div>
            <h4 className="text-2xl font-bold mb-4 text-slate-900">Zero Funds Held</h4>
            <p className="text-slate-600 leading-relaxed">
              We never hold your money. AffairNkap facilitates <strong>direct peer-to-peer payments</strong> via your preferred Mobile Money provider, ensuring your group stays in control of its liquidity.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={cardVariants}
            className="p-10 rounded-[40px] bg-indigo-600 border border-indigo-700 shadow-xl shadow-indigo-100 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-150 transition-transform">
              <Zap size={100} className="text-white" />
            </div>
            <div className="w-14 h-14 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center mb-8">
              <Zap className="text-white" size={28} />
            </div>
            <h4 className="text-2xl font-bold mb-4 text-white">Trust, Verified</h4>
            <p className="text-white/80 leading-relaxed">
              Eliminate "Ghost Members." Our 3-tier verification system ensures every participant is linked to a real identity, a verified phone number, and a physical address.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={cardVariants}
            className="p-10 rounded-[40px] bg-slate-50 border border-slate-100 hover:shadow-2xl hover:shadow-indigo-100/50 transition-all duration-300 group"
          >
            <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <BarChart3 className="text-blue-500" size={28} />
            </div>
            <h4 className="text-2xl font-bold mb-4 text-slate-900">Audit Trail</h4>
            <p className="text-slate-600 leading-relaxed">
              Automated record-keeping creates an immutable history of every contribution, late payment, and payout. No more manual ticking or dispute-prone spreadsheets.
            </p>
          </motion.div>
        </motion.div>

        {/* Level Verification Detail */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-24 p-8 md:p-16 rounded-[48px] bg-slate-900 text-white flex flex-col md:flex-row items-center gap-12"
        >
          <div className="flex-1">
            <h4 className="text-3xl font-bold mb-6">3-Level Member Verification</h4>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Groups set their own requirements based on trust needs. From casual family circles to high-value investment groups.
            </p>
            <div className="space-y-4">
              {[
                { l: 'Level 1', t: 'Phone & OTP', d: 'Required for all. Validates unique identity.' },
                { l: 'Level 2', t: 'Identity Document', d: 'ID, Passport, or License upload and admin review.' },
                { l: 'Level 3', t: 'Address & Social', d: 'Physical proof of residence and social footprint.' }
              ].map((tier, idx) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + (idx * 0.1) }}
                  key={idx}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center font-bold text-xs">{idx + 1}</div>
                  <div>
                    <p className="text-sm font-bold">{tier.t}</p>
                    <p className="text-xs text-slate-500">{tier.d}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="flex-1 w-full flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 bg-indigo-500/20 blur-[100px] absolute inset-0 rounded-full"></div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative z-10 p-8 bg-white/5 backdrop-blur-md rounded-[40px] border border-white/10 text-center"
              >
                <div className="w-20 h-20 bg-[#d4ff3f] rounded-3xl mx-auto flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(212,255,63,0.3)]">
                  <FileCheck size={40} className="text-black" />
                </div>
                <p className="text-2xl font-bold mb-2">Verified Status</p>
                <div className="inline-flex gap-1 mb-4">
                  {/* Fix: Star is now imported correctly */}
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} className="fill-[#d4ff3f] text-[#d4ff3f]" />)}
                </div>
                <p className="text-xs text-slate-400">Trusted Contributor since 2023</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
