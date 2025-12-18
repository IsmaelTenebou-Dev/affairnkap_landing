
import React from 'react';
import { ScrollText, MessageSquare, PieChart, AlertCircle, Receipt, UserPlus, Fingerprint } from 'lucide-react';
import { motion } from 'framer-motion';

const FEATURE_LIST = [
   {
      title: "Group Constitution",
      description: "Digitally sign and enforce formal rules. Set penalties, deadlines, and rotation logic in stone.",
      icon: <ScrollText className="text-indigo-600" />,
      color: "bg-indigo-50"
   },
   {
      title: "Digital Receipts",
      description: "Every payment generates a professional e-receipt with unique transaction IDs for your records.",
      icon: <Receipt className="text-emerald-600" />,
      color: "bg-emerald-50"
   },
   {
      title: "Split Beneficiary Mode",
      description: "Need to support multiple people? Split the payout across several members in a single cycle.",
      icon: <PieChart className="text-blue-600" />,
      color: "bg-blue-50"
   },
   {
      title: "Dispute Resolution",
      description: "A formal evidence-based process to resolve payment claims without emotional escalation.",
      icon: <AlertCircle className="text-red-600" />,
      color: "bg-red-50"
   },
   {
      title: "Native Group Chat",
      description: "Dedicated workspace for group talk. Voice messages, read receipts, and cycle-specific threads.",
      icon: <MessageSquare className="text-purple-600" />,
      color: "bg-purple-50"
   },
   {
      title: "PIN & Biometrics",
      description: "Your financial data is protected by industry-standard encryption and biometric authentication.",
      icon: <Fingerprint className="text-slate-600" />,
      color: "bg-slate-50"
   }
];

const container = {
   hidden: { opacity: 0 },
   show: {
      opacity: 1,
      transition: {
         staggerChildren: 0.1
      }
   }
};

const item = {
   hidden: { opacity: 0, y: 20 },
   show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
};

export const FeaturesSection: React.FC = () => {
   return (
      <section className="py-24 bg-slate-50">
         <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
               <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="max-w-2xl"
               >
                  <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                     Everything you need to run <br /> a <span className="text-indigo-600">World-Class</span> Tontine.
                  </h2>
               </motion.div>
               <motion.p
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-slate-500 max-w-xs text-sm font-medium leading-relaxed"
               >
                  From tiny family savings to multi-million dollar investment groups, our tools scale with your ambition.
               </motion.p>
            </div>

            <motion.div
               variants={container}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true, margin: "-50px" }}
               className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
               {FEATURE_LIST.map((feature, i) => (
                  <motion.div
                     key={i}
                     variants={item}
                     whileHover={{ y: -5, transition: { duration: 0.2 } }}
                     className="bg-white p-8 rounded-[32px] border border-slate-100 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-50 transition-all duration-300 group"
                  >
                     <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                        {/* Fix: Cast icon to React.ReactElement<any> to allow 'size' prop to be injected during cloning */}
                        {React.cloneElement(feature.icon as React.ReactElement<any>, { size: 28 })}
                     </div>
                     <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                     <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
                  </motion.div>
               ))}
            </motion.div>

            {/* Feature Focus Block: Constitution */}
            <div className="mt-24 grid lg:grid-cols-2 gap-12 items-center">
               <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="order-2 lg:order-1 relative"
               >
                  <div className="bg-white rounded-[40px] p-8 shadow-2xl border border-slate-100 max-w-sm mx-auto">
                     <div className="flex items-center gap-3 mb-6">
                        <ScrollText size={24} className="text-indigo-600" />
                        <h4 className="font-bold">Group Constitution</h4>
                     </div>
                     <div className="space-y-4 opacity-70">
                        <div className="h-2 w-3/4 bg-slate-100 rounded"></div>
                        <div className="h-2 w-full bg-slate-100 rounded"></div>
                        <div className="h-2 w-5/6 bg-slate-100 rounded"></div>
                     </div>
                     <div className="mt-8 pt-8 border-t border-slate-50 flex flex-col gap-3">
                        <motion.div
                           initial={{ opacity: 0, x: -10 }}
                           whileInView={{ opacity: 1, x: 0 }}
                           transition={{ delay: 0.4 }}
                           className="flex items-center gap-2"
                        >
                           <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center">
                              <span className="text-emerald-500 text-[10px]">✓</span>
                           </div>
                           <span className="text-xs font-bold text-slate-700">10,000 XAF Weekly</span>
                        </motion.div>
                        <motion.div
                           initial={{ opacity: 0, x: -10 }}
                           whileInView={{ opacity: 1, x: 0 }}
                           transition={{ delay: 0.6 }}
                           className="flex items-center gap-2"
                        >
                           <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center">
                              <span className="text-emerald-500 text-[10px]">✓</span>
                           </div>
                           <span className="text-xs font-bold text-slate-700">6:00 PM Deadline</span>
                        </motion.div>
                        <motion.div
                           initial={{ opacity: 0, x: -10 }}
                           whileInView={{ opacity: 1, x: 0 }}
                           transition={{ delay: 0.8 }}
                           className="flex items-center gap-2"
                        >
                           <div className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center">
                              <span className="text-red-500 text-[10px]">!</span>
                           </div>
                           <span className="text-xs font-bold text-slate-700">1,000 XAF Fine/Day Late</span>
                        </motion.div>
                     </div>
                     <button className="w-full mt-8 bg-slate-900 text-white py-3 rounded-2xl text-xs font-bold hover:bg-indigo-600 transition-colors">Sign Constitution</button>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#d4ff3f]/20 blur-3xl -z-10"></div>
               </motion.div>
               <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="order-1 lg:order-2"
               >
                  <h4 className="text-sm font-black text-indigo-600 uppercase tracking-widest mb-4">Accountability Reimagined</h4>
                  <h3 className="text-4xl font-extrabold text-slate-900 mb-6">Legal-Grade Governance for Informal Savings.</h3>
                  <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                     AffairNkap isn't just an app; it's a binding digital agreement. Our Constitution feature ensures every member knows the rules, the penalties, and the expectations before they join.
                  </p>
                  <ul className="space-y-4">
                     {['Immutable Audit Trails', 'Democratic Rule Changes', 'Automated Penalty Tracking'].map((item, i) => (
                        <motion.li
                           key={item}
                           initial={{ opacity: 0, x: 10 }}
                           whileInView={{ opacity: 1, x: 0 }}
                           transition={{ delay: 0.5 + (i * 0.1) }}
                           className="flex items-center gap-3 font-bold text-slate-800"
                        >
                           <div className="w-6 h-6 rounded-full bg-[#d4ff3f] flex items-center justify-center">
                              <span className="text-[10px]">✓</span>
                           </div>
                           {item}
                        </motion.li>
                     ))}
                  </ul>
               </motion.div>
            </div>
         </div>
      </section>
   );
};
