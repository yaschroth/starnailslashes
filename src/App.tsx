import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import {
  MessageCircle,
  Calendar,
  Instagram,
  Clock,
  MapPin,
  CheckCircle2,
  ChevronRight,
  Menu,
  X,
  Star,
  Phone,
  Mail,
  ShieldCheck,
  Award,
  ExternalLink,
} from 'lucide-react';
import { cn } from './lib/utils';
import { config } from './config';

// Respect prefers-reduced-motion
const useAnimationConfig = () => {
  const shouldReduceMotion = useReducedMotion();
  return {
    initial: shouldReduceMotion ? false : undefined,
    transition: shouldReduceMotion ? { duration: 0 } : undefined,
  };
};

// Icon mapping for config-driven icons
const iconMap = {
  shield: ShieldCheck,
  award: Award,
  check: CheckCircle2,
  star: Star,
};

// --- Components ---

const TopBar = () => {
  return (
    <div className="bg-dark text-white/70 py-2 px-6 hidden md:block border-b border-white/5">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-[10px] uppercase tracking-[0.2em] font-medium">
        <div className="flex gap-6">
          <a href={config.contact.phoneLink} className="flex items-center gap-2 hover:text-white transition-colors">
            <Phone size={12} /> {config.contact.phone}
          </a>
          <a href={`mailto:${config.contact.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
            <Mail size={12} /> {config.contact.email}
          </a>
        </div>
        <div className="flex gap-6">
          <span className="flex items-center gap-2">
            <Clock size={12} /> {config.hours.display}
          </span>
          <span className="flex items-center gap-2">
            <MapPin size={12} /> {config.contact.address.city}, {config.contact.address.district}
          </span>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Preisliste', href: '#pricing' },
    { name: 'Galerie', href: '#gallery' },
    { name: 'Über uns', href: '#about' },
    { name: 'Kontakt', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 md:top-8 left-0 right-0 z-50 transition-all duration-500 px-6 py-4",
      isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3 md:top-0" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          {config.logo?.src && (<img src={config.logo.src} alt={config.logo.alt || config.business.name} className="h-10 md:h-12 object-contain" />)}<span className="font-serif text-xl md:text-2xl tracking-widest uppercase font-light">{config.business.name}</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[11px] uppercase tracking-widest hover:opacity-60 transition-opacity duration-200 font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-1"
            >
              {link.name}
            </a>
          ))}
          <button
            className="bg-dark text-white px-6 py-2.5 rounded-full text-[11px] uppercase tracking-widest hover:bg-opacity-80 transition-colors duration-200 font-bold cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            aria-label="Termin buchen"
          >
            Jetzt Termin Buchen
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-2xl p-8 flex flex-col gap-6 md:hidden border-t border-black/5"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl font-serif tracking-wide border-b border-black/5 pb-4"
              >
                {link.name}
              </a>
            ))}
            <div className="flex flex-col gap-4 mt-4">
              <button
                className="bg-dark text-white w-full py-4 rounded-xl text-sm uppercase tracking-widest font-bold cursor-pointer hover:bg-opacity-80 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label="Termin buchen"
              >
                Jetzt Termin Buchen
              </button>
              <a
                href={config.contact.phoneLink}
                className="flex items-center justify-center gap-2 py-4 border border-black/10 rounded-xl text-sm uppercase tracking-widest cursor-pointer hover:bg-black/5 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label="Telefonisch anrufen"
              >
                <Phone size={16} aria-hidden="true" /> Anrufen
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img
          src={config.images.hero}
          alt={config.images.heroAlt}
          className="w-full h-full object-cover brightness-[0.85]"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <span className="h-[1px] w-8 bg-white/40"></span>
          <span className="text-white uppercase tracking-[0.4em] text-[10px] font-bold">{config.business.tagline}</span>
          <span className="h-[1px] w-8 bg-white/40"></span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-white font-serif text-5xl md:text-7xl font-extralight leading-[1.1] mb-6"
        >
          Schönheit, die <br /> <span className="italic">von Herzen kommt.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light"
        >
          Kosmetik, Permanent Make-up, Microblading & Nageldesign. {config.business.yearsExperience} Jahre Erfahrung in Freiburg.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4"
        >
          <button
            className="bg-white text-black px-10 py-5 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-primary hover:text-white transition-colors duration-300 shadow-xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
            aria-label="Termin buchen"
          >
            Kostenlos Termin sichern
          </button>
          <a
            href={config.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white px-10 py-5 rounded-full text-xs uppercase tracking-widest font-bold hover:brightness-110 transition-all duration-300 shadow-xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 flex items-center gap-2"
            aria-label="Direkt über WhatsApp kontaktieren"
          >
            <MessageCircle size={18} aria-hidden="true" /> WhatsApp schreiben
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-8 flex items-center justify-center gap-2 text-white/70 text-sm"
        >
          <div className="flex">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} size={16} className="fill-primary text-primary" aria-hidden="true" />
            ))}
          </div>
          <span className="font-medium">{config.reviews.rating}</span>
          <span className="text-white/50">·</span>
          <span>{config.reviews.count} Bewertungen bei Google</span>
        </motion.div>
      </div>

      <div className="absolute bottom-12 left-6 md:left-12 z-10 hidden md:block">
        <div className="flex items-center gap-4 text-white/60 text-[10px] uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <ShieldCheck size={14} className="text-primary" aria-hidden="true" /> Zertifizierte Kosmetikerinnen
          </div>
          <div className="w-1 h-1 rounded-full bg-white/20" aria-hidden="true"></div>
          <div className="flex items-center gap-2">
            <Award size={14} className="text-primary" aria-hidden="true" /> {config.business.yearsExperience}+ Jahre Erfahrung
          </div>
        </div>
      </div>
    </section>
  );
};

const TrustBadges = () => {
  const stats = [
    { number: `${config.business.yearsExperience}+`, label: "Jahre Erfahrung", icon: Award },
    { number: config.business.satisfiedClients, label: "Zufriedene Kundinnen", icon: CheckCircle2 },
    { number: String(config.reviews.rating), label: "Google Bewertung", icon: Star },
    { number: "100%", label: "Hygiene-Standard", icon: ShieldCheck },
  ];

  return (
    <section className="py-16 bg-white border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-light text-primary mb-4">
                <stat.icon size={24} aria-hidden="true" />
              </div>
              <div className="font-serif text-4xl md:text-5xl mb-2">{stat.number}</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-black/50 font-bold">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const StickyActions = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 w-[94%] max-w-lg md:bottom-8 ${!isVisible ? 'pointer-events-none' : ''}`}
      role="group"
      aria-label="Schnellaktionen"
    >
      <a
        href={config.contact.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 bg-[#25D366] text-white flex items-center justify-center gap-2 py-4 rounded-2xl shadow-2xl hover:brightness-110 active:brightness-95 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 group"
        aria-label="Über WhatsApp kontaktieren"
      >
        <MessageCircle size={20} aria-hidden="true" />
        <span className="font-bold text-sm uppercase tracking-wider">WhatsApp</span>
      </a>
      <button
        className="flex-[1.5] bg-dark text-white flex items-center justify-center gap-2 py-4 rounded-2xl shadow-2xl hover:bg-opacity-90 active:bg-opacity-80 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 group"
        aria-label="Termin online buchen"
      >
        <Calendar size={20} aria-hidden="true" />
        <span className="font-bold text-sm uppercase tracking-wider">Jetzt Termin Buchen</span>
      </button>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
        <div className="max-w-2xl">
          <span className="text-primary uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">Unsere Leistungen</span>
          <h2 className="font-serif text-5xl md:text-7xl leading-tight">Beauty-Treatments auf <br /> <span className="italic">höchstem Niveau.</span></h2>
        </div>
        <p className="text-black/50 max-w-sm leading-relaxed text-sm">
          Von Gesichtsbehandlungen über Permanent Make-up bis Nageldesign. Wir verwöhnen Sie mit professionellen Behandlungen und hochwertigen Produkten.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {config.services.map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="group cursor-pointer"
            role="article"
            aria-label={`Service: ${s.title}`}
          >
            <div className="aspect-[3/4] overflow-hidden rounded-[2rem] mb-8 relative shadow-lg">
              <img
                src={s.image}
                alt={s.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <button className="text-white text-[10px] uppercase tracking-widest font-bold flex items-center gap-2 cursor-pointer">
                  Termin buchen <ChevronRight size={14} />
                </button>
              </div>
              <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest shadow-sm">
                {s.price}
              </div>
            </div>
            <h3 className="font-serif text-2xl mb-3 group-hover:text-primary transition-colors">{s.title}</h3>
            <p className="text-sm text-black/60 leading-relaxed mb-4">{s.description}</p>
            <div className="flex flex-wrap gap-2">
              {s.benefits.map((benefit, j) => (
                <span key={j} className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-primary font-bold bg-primary/10 px-3 py-1.5 rounded-full">
                  <CheckCircle2 size={12} aria-hidden="true" /> {benefit}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 text-center">
        <p className="text-black/50 mb-6 text-sm">Nicht sicher, welche Behandlung die richtige ist?</p>
        <a
          href={`${config.contact.whatsappLink}?text=Hallo,%20ich%20hätte%20eine%20Frage%20zu%20Ihren%20Behandlungen.`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold hover:brightness-110 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
          aria-label="Kostenlose Beratung über WhatsApp anfragen"
        >
          <MessageCircle size={18} aria-hidden="true" /> Kostenlos beraten lassen
        </a>
      </div>
    </section>
  );
};

const Pricing = () => {
  return (
    <section id="pricing" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-serif text-5xl md:text-7xl mb-6">Preisliste</h2>
          <p className="text-black/50 max-w-lg mx-auto text-sm">Transparente Preise für exzellente Leistungen. Alle Preise inkl. MwSt.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {config.pricing.map((cat, idx) => (
            <div key={idx} className="space-y-8">
              <h3 className="font-serif text-3xl border-b border-black/5 pb-4">{cat.category}</h3>
              <div className="space-y-6">
                {cat.items.map((item, i) => (
                  <div key={i} className="flex justify-between items-end group">
                    <div className="flex-1">
                      <span className="text-sm font-medium tracking-wide uppercase">{item.name}</span>
                      <div className="border-b border-dotted border-black/10 w-full mb-1 group-hover:border-black/30 transition-colors"></div>
                    </div>
                    <span className="font-serif text-xl ml-4">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-light rounded-3xl p-10 md:p-16 text-center">
          <h3 className="font-serif text-3xl md:text-4xl mb-4">Ihr Wunschtermin wartet</h3>
          <p className="text-black/50 max-w-lg mx-auto mb-8 text-sm">
            Buchen Sie jetzt online. Schnell, einfach und verbindlich. Oder schreiben Sie uns direkt über WhatsApp.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <button
              className="bg-dark text-white px-10 py-5 rounded-full text-xs uppercase tracking-widest font-bold shadow-xl hover:bg-opacity-90 transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label="Online Termin buchen"
            >
              Online Termin buchen
            </button>
            <a
              href={`${config.contact.whatsappLink}?text=Hallo,%20ich%20möchte%20gerne%20einen%20Termin%20vereinbaren.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#25D366] text-white px-8 py-5 rounded-full text-xs uppercase tracking-widest font-bold hover:brightness-110 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
              aria-label="Termin über WhatsApp anfragen"
            >
              <MessageCircle size={18} aria-hidden="true" /> WhatsApp schreiben
            </a>
          </div>
          <p className="text-black/30 text-xs mt-6 flex items-center justify-center gap-2">
            <Clock size={14} aria-hidden="true" /> Wir antworten in der Regel innerhalb von 30 Minuten
          </p>
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-32 bg-light-alt">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <span className="text-primary uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">Einblicke</span>
            <h2 className="font-serif text-5xl md:text-7xl">Studio & Behandlungen</h2>
          </div>
          {config.social.instagram && (
            <a
              href={config.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-bold border-b-2 border-primary pb-2 hover:opacity-60 transition-opacity duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
              aria-label="Mehr Bilder auf Instagram ansehen (öffnet in neuem Tab)"
            >
              Mehr auf Instagram <Instagram size={18} aria-hidden="true" />
            </a>
          )}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6" role="list" aria-label="Galerie">
          {config.images.gallery.map((img, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.1 }}
              className="aspect-square rounded-2xl overflow-hidden cursor-pointer group relative focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              onClick={() => setSelectedImage(img.url)}
              aria-label={`Galeriebild ${i + 1} vergrößern`}
              role="listitem"
            >
              <img
                src={img.url}
                alt={`${img.category} Arbeit ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                  <ChevronRight size={24} aria-hidden="true" />
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-6"
            onClick={() => setSelectedImage(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Vergrößertes Bild"
          >
            <button
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white rounded-full p-2"
              onClick={() => setSelectedImage(null)}
              aria-label="Lightbox schließen"
            >
              <X size={40} aria-hidden="true" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={selectedImage}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              alt="Vergrößerte Ansicht des Galeriebildes"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
              <img
                src={config.owner.image}
                alt={`${config.owner.fullName}, Inhaberin von ${config.business.name}`}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-primary text-white p-8 rounded-[2rem] shadow-xl hidden xl:block">
              <div className="text-3xl font-serif mb-1">{config.business.foundingYear}</div>
              <div className="text-[10px] uppercase tracking-[0.2em] font-bold">Gegründet mit Leidenschaft</div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <span className="text-primary uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">Über uns</span>
              <h2 className="font-serif text-5xl md:text-6xl mb-8">Hallo, ich bin <br /><span className="italic">{config.owner.name}.</span></h2>
            </div>

            <div className="space-y-6 text-black/70 leading-relaxed">
              {config.owner.bio.map((paragraph, i) => (
                <p key={i} className={i === 0 ? "text-lg" : ""}>{paragraph}</p>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              {config.owner.certifications.map((cert, i) => {
                const IconComponent = iconMap[cert.icon as keyof typeof iconMap] || CheckCircle2;
                return (
                  <div key={i} className="flex items-center gap-3 bg-light px-5 py-3 rounded-2xl">
                    <IconComponent size={18} className="text-primary" aria-hidden="true" />
                    <span className="text-xs font-bold uppercase tracking-widest">{cert.label}</span>
                  </div>
                );
              })}
            </div>

            <div className="pt-4">
              <button
                className="bg-dark text-white px-10 py-5 rounded-full text-xs uppercase tracking-widest font-bold shadow-xl hover:bg-opacity-90 transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label="Jetzt kennenlernen und Termin buchen"
              >
                Lernen Sie mich kennen
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="py-32 bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-primary uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">Kundenstimmen</span>
          <h2 className="font-serif text-5xl md:text-7xl text-white mb-6">Was unsere <br /><span className="italic">Kundinnen sagen</span></h2>
          <div className="flex items-center justify-center gap-2 text-white/70">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={20} className="fill-primary text-primary" aria-hidden="true" />
              ))}
            </div>
            <span className="font-medium text-white ml-2">{config.reviews.rating}</span>
            <span className="text-white/30 mx-2">|</span>
            <span>{config.reviews.count} Bewertungen auf Google</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {config.testimonials.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-white/10"
            >
              <div className="flex items-center gap-1 mb-6">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} size={16} className="fill-primary text-primary" aria-hidden="true" />
                ))}
              </div>
              <p className="text-white/80 leading-relaxed mb-8 text-lg italic">"{review.text}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-white font-medium">{review.name}</div>
                  <div className="text-white/40 text-xs uppercase tracking-widest">{review.service}</div>
                </div>
                <div className="text-white/30 text-xs">{review.date}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href={config.reviews.googleReviewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-white/60 hover:text-white text-xs uppercase tracking-[0.2em] font-bold transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-dark rounded"
            aria-label="Alle Google Bewertungen ansehen (öffnet in neuem Tab)"
          >
            Alle Bewertungen auf Google ansehen <ExternalLink size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};



const HygieneSection = () => {
  const hygieneIcons = {
    shield: ShieldCheck,
    check: CheckCircle2,
    award: Award,
    star: Star,
  };

  return (
    <section id="hygiene" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div>
              <span className="text-primary uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">Sicherheit & Qualität</span>
              <h2 className="font-serif text-5xl md:text-7xl mb-8">{config.hygiene.headline}</h2>
              <p className="text-black/60 leading-relaxed text-lg">{config.hygiene.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {config.hygiene.features.map((feature, i) => {
                const IconComponent = hygieneIcons[feature.icon as keyof typeof hygieneIcons] || CheckCircle2;
                return (
                  <div key={i} className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-light flex items-center justify-center text-primary">
                      <IconComponent size={24} />
                    </div>
                    <h4 className="font-bold text-sm uppercase tracking-widest">{feature.title}</h4>
                    <p className="text-xs text-black/50 leading-relaxed text-balance">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
              <img
                src={config.images.hygiene}
                alt="Saubere und sterile Studioumgebung"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
            <div className="absolute -top-10 -left-10 bg-primary text-white p-10 rounded-[2rem] shadow-xl hidden xl:block">
              <div className="text-4xl font-serif mb-2">100%</div>
              <div className="text-[10px] uppercase tracking-[0.2em] font-bold">Hygiene Garantie</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="bg-dark rounded-[4rem] overflow-hidden grid grid-cols-1 lg:grid-cols-2 shadow-2xl">
        <div className="p-12 md:p-20 space-y-12">
          <div>
            <span className="text-primary uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">Termin vereinbaren</span>
            <h2 className="font-serif text-5xl md:text-7xl text-white mb-8">Ich freue mich <br /> <span className="italic">auf Sie.</span></h2>
            <p className="text-white/40 leading-relaxed">Rufen Sie uns an oder schreiben Sie uns eine Nachricht. Wir beraten Sie gerne zu Ihrem Wunsch-Treatment und finden den perfekten Termin für Sie.</p>
          </div>

          <div className="space-y-8">
            <a href={config.contact.phoneLink} className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-white group-hover:bg-primary transition-all">
                <Phone size={24} />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-1">Telefon</div>
                <div className="text-white font-medium">{config.contact.phone}</div>
              </div>
            </a>
            <a href={config.contact.whatsappLink} className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-white group-hover:bg-[#25D366] transition-all">
                <MessageCircle size={24} />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-1">WhatsApp</div>
                <div className="text-white font-medium">{config.contact.whatsapp}</div>
              </div>
            </a>
            <a href={`mailto:${config.contact.email}`} className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-white group-hover:bg-primary transition-all">
                <Mail size={24} />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-1">Email</div>
                <div className="text-white font-medium">{config.contact.email}</div>
              </div>
            </a>
          </div>
        </div>

        <div className="relative min-h-[400px]">
          <iframe
            src={config.contact.googleMapsEmbed}
            className="absolute inset-0 w-full h-full grayscale invert opacity-50"
            loading="lazy"
            title="Standort auf Google Maps"
          ></iframe>
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-transparent to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-light pt-32 pb-40 px-6 border-t border-black/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
        <div className="space-y-8">
          <span className="font-serif text-3xl tracking-widest uppercase font-light">{config.business.name}</span>
          <p className="text-black/50 text-sm leading-relaxed max-w-xs">{config.business.description}</p>
          <div className="flex gap-4">
            {config.social.instagram && (
              <a
                href={config.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl border border-black/5 flex items-center justify-center hover:bg-dark hover:text-white transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label="Folgen Sie uns auf Instagram"
              >
                <Instagram size={20} aria-hidden="true" />
              </a>
            )}
            <a
              href={config.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-2xl border border-black/5 flex items-center justify-center hover:bg-dark hover:text-white transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label="Kontaktieren Sie uns über WhatsApp"
            >
              <MessageCircle size={20} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="space-y-8">
          <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-black/40">Öffnungszeiten</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li className="flex justify-between"><span>Montag bis Freitag</span> <span>{config.hours.weekdays}</span></li>
            <li className="flex justify-between"><span>Samstag</span> <span>{config.hours.saturday}</span></li>
            <li className="flex justify-between text-black/30"><span>Sonntag</span> <span>{config.hours.sunday}</span></li>
          </ul>
        </div>

        <div className="space-y-8">
          <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-black/40">Quick Links</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li><a href="#services" className="hover:text-primary transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">Services</a></li>
            <li><a href="#pricing" className="hover:text-primary transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">Preisliste</a></li>
            <li><a href="#gallery" className="hover:text-primary transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">Galerie</a></li>
            <li><a href="#contact" className="hover:text-primary transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">Termin Buchen</a></li>
          </ul>
        </div>

        <div className="space-y-8">
          <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-black/40">Standort</h4>
          <p className="text-sm font-medium leading-relaxed">
            {config.contact.address.street}<br />
            {config.contact.address.zip} {config.contact.address.city}, {config.contact.address.district}
          </p>
          <a
            href={config.contact.googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold border-b border-black pb-1 cursor-pointer hover:opacity-70 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
            aria-label="Standort in Google Maps öffnen"
          >
            Google Maps <ExternalLink size={12} aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-16 mt-16 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase tracking-widest text-black/30 font-bold">
        <nav className="flex gap-8" aria-label="Rechtliche Links">
          <a href="#" className="hover:text-black transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">Impressum</a>
          <a href="#" className="hover:text-black transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">Datenschutz</a>
          <a href="#" className="hover:text-black transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">AGB</a>
        </nav>
        <span>© {new Date().getFullYear()} {config.business.name}. Alle Rechte vorbehalten.</span>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-primary selection:text-white">
      {/* Skip Link for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-dark focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:outline-none"
      >
        Zum Hauptinhalt springen
      </a>

      <TopBar />
      <Navbar />
      <main id="main-content">
        <Hero />
        <TrustBadges />
        <Services />
        <Pricing />
        <Gallery />
        <HygieneSection />
        <Testimonials />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <StickyActions />
    </div>
  );
}
