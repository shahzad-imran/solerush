import React from 'react';
import { Award, Compass, Heart, Users } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const About = () => {
  const stats = [
    { value: '150K+', label: 'Sneakers Delivered' },
    { value: '45+', label: 'Global Drops' },
    { value: '99.2%', label: 'Satisfied Runners' },
    { value: '24/7', label: 'Dedicated Support' }
  ];

  const pillars = [
    { icon: Compass, title: 'Forward Vision', desc: 'Crafting unique designs that push the boundary of sports technology and modern aesthetics.' },
    { icon: Award, title: 'Authentic Quality', desc: 'Sourcing genuine materials and partnering with top developers to deliver verified sneaker styles.' },
    { icon: Heart, title: 'Active Passion', desc: 'Built by runners and sneakerheads for those who walk, sprint, and live in motion.' },
    { icon: Users, title: 'Inclusivity First', desc: 'Developing footwear sizing and styles that welcome every step of your personal journey.' }
  ];

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 select-none space-y-20 text-left">
        
        {/* Story Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-black uppercase text-brand-primary tracking-widest block">
              Established 2024
            </span>
            <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
              Redefining the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-red-500 to-orange-500 text-glow">
                Sneaker Experience
              </span>
            </h1>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              At SoleRush, we believe that shoes are more than just a layer of protection—they are a medium of self-expression, a push of momentum, and a statement of style. Founded in the heart of sneakerhead culture, we have grown into a global brand bridging aesthetic premium streetwear and top-tier performance running gear.
            </p>
            <p className="text-neutral-500 text-sm leading-relaxed">
              Our team works tirelessly to select, design, and release drops that represent the cutting edge of fashion and ergonomics. From responsive carbon plate midsoles to retro-suede classics, every sneaker is evaluated for extreme comfort and visual perfection.
            </p>
          </div>

          {/* Large image frame */}
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-neutral-950 border border-neutral-800 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=800&q=80"
              alt="Craftsmanship representation"
              className="w-full h-full object-cover opacity-70 hover:scale-105 transition-transform duration-700"
            />
          </div>
        </section>

        {/* Stats Ribbon */}
        <section className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 sm:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label} className="space-y-2">
                <span className="text-3xl sm:text-5xl font-black text-white block tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xs text-neutral-500 font-bold uppercase tracking-wider block">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Pillars / Values Grid */}
        <section className="space-y-10">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">Our Foundations</h2>
            <p className="text-neutral-500 text-xs sm:text-sm">The principles that drive every sneaker draft we release.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pil) => (
              <div key={pil.title} className="bg-neutral-900 border border-neutral-800/80 rounded-3xl p-6 space-y-4 hover:border-neutral-700/80 transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 border border-brand-primary/20 text-brand-primary flex items-center justify-center">
                  <pil.icon size={22} />
                </div>
                <h3 className="font-bold text-base text-white uppercase tracking-wide">{pil.title}</h3>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">{pil.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </PageTransition>
  );
};

export default About;
