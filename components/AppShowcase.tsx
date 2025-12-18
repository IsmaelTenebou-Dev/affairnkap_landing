import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { PhoneFrame } from './PhoneFrame';

const steps = [
    {
        id: 1,
        title: "Simple Group Setup",
        description: "Create a group in seconds. Set your cycle duration, contribution amount, and invite members directly from your contacts.",
        image: "/screenshots/image.png",
        features: ["Instant Invitations", "Custom Rules", "Role Management"],
        color: "bg-indigo-500", // Darker for blob
        iconColor: "text-indigo-600"
    },
    {
        id: 2,
        title: "Transparent Dashboards",
        description: "See exactly who has paid, who is pending, and when it is your turn to receive the pot. No more guessing games.",
        image: "/screenshots/Screenshot_20251217-105815.png",
        features: ["Real-time Status", "Cycle Visualizer", "Payment History"],
        color: "bg-emerald-500",
        iconColor: "text-emerald-600"
    },
    {
        id: 3,
        title: "Secure Transactions",
        description: "Every contribution is verified and recorded. Generate receipts and track the flow of money with complete confidence.",
        image: "/screenshots/Screenshot_20251217-110128.png",
        features: ["Digital Receipts", "Dispute Resolution", "Audit Trail"],
        color: "bg-blue-500",
        iconColor: "text-blue-600"
    }
];

export const AppShowcase: React.FC = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-[#f8fafc]"> {/* Very light grey base */}

            {/* 
          DYNAMIC AURORA BACKGROUND 
          Using inline styles for complex keyframe animations to ensure they work without tailwind config
      */}
            <style>{`
        @keyframes aurora {
          0% { transform: translate(0, 0) scale(1); opacity: 0.6; }
          33% { transform: translate(30px, -50px) scale(1.1); opacity: 0.8; }
          66% { transform: translate(-20px, 20px) scale(0.9); opacity: 0.6; }
          100% { transform: translate(0, 0) scale(1); opacity: 0.6; }
        }
        .animate-aurora-1 { animation: aurora 10s infinite alternate ease-in-out; }
        .animate-aurora-2 { animation: aurora 15s infinite alternate-reverse ease-in-out; }
        .animate-aurora-3 { animation: aurora 12s infinite alternate ease-in-out; }
      `}</style>

            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                {/* Blob 1: Indigo */}
                <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-indigo-300 rounded-full blur-[100px] animate-aurora-1 mix-blend-multiply opacity-50"></div>
                {/* Blob 2: Emerald */}
                <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-emerald-200 rounded-full blur-[100px] animate-aurora-2 mix-blend-multiply opacity-60"></div>
                {/* Blob 3: Purple */}
                <div className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[40vw] bg-purple-200 rounded-full blur-[120px] animate-aurora-3 mix-blend-multiply opacity-50"></div>

                {/* Glass Overlay for smoother blend */}
                <div className="absolute inset-0 bg-white/30 backdrop-blur-[50px] z-10"></div>
            </div>

            <div className="container mx-auto px-4 max-w-7xl relative z-20">
                <div className="text-center mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-sm font-black text-indigo-600 uppercase tracking-widest mb-4 z-20 relative"
                    >
                        See it in Action
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight z-20 relative"
                    >
                        Experience the <span className="text-indigo-600">Future</span> of Njangi.
                    </motion.h3>
                </div>

                <div className="space-y-32">
                    {steps.map((step, index) => (
                        <div key={step.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24`}>

                            {/* Text Side - Glassmorphism Card */}
                            <motion.div
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                                className="flex-1"
                            >
                                <div className="bg-white/40 backdrop-blur-xl border border-white/60 p-8 md:p-12 rounded-[40px] shadow-[0_8px_32px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] transition-all duration-500">
                                    <div className={`w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm`}>
                                        <span className={`font-black text-xl ${step.iconColor}`}>{step.id}</span>
                                    </div>
                                    <h4 className="text-4xl font-bold text-slate-900 mb-6">{step.title}</h4>
                                    <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium">
                                        {step.description}
                                    </p>
                                    <ul className="space-y-5">
                                        {step.features.map((feature) => (
                                            <li key={feature} className="flex items-center gap-4">
                                                <div className="w-8 h-8 rounded-full bg-white/80 flex items-center justify-center shadow-sm">
                                                    <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0" />
                                                </div>
                                                <span className="font-bold text-slate-800 text-lg">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>

                            {/* Image Side */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, rotate: index % 2 === 0 ? -2 : 2 }}
                                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                                className="flex-1 relative"
                            >
                                {/* Stronger Glow behind specific phone */}
                                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] ${step.color} rounded-full blur-[100px] -z-10 opacity-40 animate-pulse`}></div>

                                <PhoneFrame
                                    src={step.image}
                                    className="shadow-2xl relative z-20"
                                />
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
