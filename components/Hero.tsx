
import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { ArrowRight, Star, ShieldCheck, CheckCircle2, CreditCard, Users, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { PhoneFrame } from './PhoneFrame';




export const Hero: React.FC = () => {


  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-hero min-h-screen flex items-center">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* Main Hero Card - Bento Style */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-[40px] p-8 md:p-12"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-[#d4ff3f]/20 text-slate-800 px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
              >
                <Star size={16} className="fill-[#d4ff3f]" />
                <span>Modernizing African Financial Traditions</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-5xl md:text-7xl font-extrabold leading-[1.05] mb-6 text-slate-900 tracking-tight"
              >
                Digitizing <br />
                <span className="text-gradient">Njangi Groups</span> <br />
                with Trust
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-lg md:text-xl text-slate-600 mb-8 max-w-xl leading-relaxed"
              >
                Secure member verification, direct P2P payments, and automated cycle management. Eliminate the chaos of WhatsApp groups and take your Tontine professional.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-col sm:flex-row items-center gap-4"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                  <Button variant="black" size="lg" className="w-full group">
                    Get Started Now
                    <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
                <div className="flex items-center gap-3 bg-white/50 backdrop-blur p-2 pr-6 rounded-full border border-white shadow-sm">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <img
                        key={i}
                        src={`https://i.pravatar.cc/100?u=${i + 20}`}
                        className="w-10 h-10 rounded-full border-2 border-white object-cover"
                        alt="User avatar"
                      />
                    ))}
                  </div>
                  <div>
                    <p className="text-xs font-black text-slate-900 leading-none mb-1">15k+ Verified Groups</p>
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map(i => <Star key={i} size={10} className="fill-[#d4ff3f] text-[#d4ff3f]" />)}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* USP Tags */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-12 flex flex-wrap gap-4"
              >
                <div className="flex items-center gap-2 bg-white/60 px-4 py-2 rounded-2xl border border-white/40 shadow-sm">
                  <ShieldCheck size={18} className="text-emerald-500" />
                  <span className="text-sm font-bold text-slate-700">No Funds Held In-App</span>
                </div>
                <div className="flex items-center gap-2 bg-white/60 px-4 py-2 rounded-2xl border border-white/40 shadow-sm">
                  <CheckCircle2 size={18} className="text-blue-500" />
                  <span className="text-sm font-bold text-slate-700">3-Level KYC Verification</span>
                </div>
              </motion.div>
            </motion.div>
          </div>



          {/* Phone Mockup Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative z-20 animate-float">
              <PhoneFrame
                src="/screenshots/Screenshot_20251217-110202.png"
                className="w-[290px] md:w-[340px] h-auto aspect-[9/19.5]"
              />
            </div>

            {/* Floating UI Elements */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className="absolute -right-8 top-1/4 z-30 bg-white p-4 rounded-3xl shadow-xl border border-slate-100 animate-float delay-700 hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#d4ff3f] rounded-2xl flex items-center justify-center">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <p className="text-xs font-black text-slate-900">Payment Verified</p>
                  <p className="text-[10px] text-slate-400">Transaction #3dafc...</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute -left-12 bottom-1/4 z-30 bg-white p-4 rounded-3xl shadow-xl border border-slate-100 animate-float delay-300 hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600">
                  <Users size={20} />
                </div>
                <div>
                  <p className="text-xs font-black text-slate-900">Group Joined</p>
                  <p className="text-[10px] text-slate-400">Welcome to 'Elite Njangi'</p>
                </div>
              </div>
            </motion.div>

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-indigo-500/20 blur-[120px] -z-10 rounded-full"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
