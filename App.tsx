
import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { UVPSection } from './components/UVPSection';
import { FeaturesSection } from './components/FeaturesSection';
import { AppShowcase } from './components/AppShowcase';
import { Button } from './components/Button';
import { Smartphone, Globe, Shield, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-[#d4ff3f] selection:text-black">
      <Header />
      <main>
        <Hero />
        <UVPSection />
        <FeaturesSection />
        <AppShowcase />

        {/* Call to Action Section */}
        <section className="py-32 bg-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/50 to-transparent"></div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-4 max-w-5xl text-center relative z-10"
          >
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
              Ready to take your Njangi <br className="hidden md:block" /> to the <span className="text-[#d4ff3f]">Next Level?</span>
            </h2>
            <p className="text-slate-400 text-xl mb-12 max-w-2xl mx-auto">
              Join thousands of verified groups already building wealth securely. No hidden fees, no fraud, just community.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="xl" variant="primary" className="w-full sm:w-auto">
                  Download AffairNkap
                  <ArrowRight className="ml-2" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="xl" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-slate-900">
                  Contact Sales
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="bg-white border-t border-slate-100 pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
                  <span className="text-white font-black text-xl italic">A</span>
                </div>
                <span className="font-bold text-xl tracking-tight text-slate-900">AffairNkap</span>
              </div>
              <p className="text-slate-500 max-w-sm mb-8">
                The digital ecosystem for traditional African savings circles. Securing trust and transparency for community-based finance.
              </p>
              <div className="flex gap-4">
                {['Twitter', 'Facebook', 'LinkedIn', 'Instagram'].map(social => (
                  <div key={social} className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:bg-slate-100 cursor-pointer transition-colors">
                    <span className="text-[10px] font-bold uppercase tracking-tighter">{social[0]}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h5 className="font-bold text-slate-900 mb-6">Product</h5>
              <ul className="space-y-4 text-slate-500 text-sm">
                <li><a href="#" className="hover:text-indigo-600 transition-colors">How it Works</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Group Constitution</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-slate-900 mb-6">Company</h5>
              <ul className="space-y-4 text-slate-500 text-sm">
                <li><a href="#" className="hover:text-indigo-600 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-400 text-xs">© 2024 AffairNkap. Built for the future of African community finance.</p>
            <div className="flex gap-8 text-xs text-slate-400 font-medium">
              <span className="flex items-center gap-1"><Smartphone size={14} /> App Store</span>
              <span className="flex items-center gap-1"><Globe size={14} /> Worldwide</span>
              <span className="flex items-center gap-1"><Shield size={14} /> Verified Secure</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Chat Support Pill */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, type: "spring" }}
        className="fixed bottom-8 right-8 z-40"
      >
        <button className="bg-slate-900 text-white rounded-full px-6 py-4 flex items-center gap-3 shadow-2xl hover:scale-110 transition-transform group">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
          <span className="text-sm font-bold">Support Online</span>
          <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-lg">💬</div>
        </button>
      </motion.div>
    </div>
  );
};

export default App;
