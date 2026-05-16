import { ReactNode } from 'react'

interface SectionProps {
  label: string
  title: string
  subtitle?: string
  description?: string
  children: ReactNode
  className?: string
}

export function Section({ label, title, subtitle, description, children, className = '' }: SectionProps) {
  return (
    <section className={`max-w-7xl mx-auto px-12 py-24 ${className}`}>
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-bold tracking-widest uppercase text-gold">{label}</span>
          <div className="flex-1 h-px bg-white/8 max-w-20"></div>
        </div>
        <h2 className="font-serif text-5xl font-light leading-tight mb-4">
          {title}
          {subtitle && <em className="block italic text-gold">{subtitle}</em>}
        </h2>
        {description && <p className="text-sm text-muted max-w-lg leading-relaxed">{description}</p>}
      </div>
      {children}
    </section>
  )
}

interface HeroProps {
  title: string
  subtitle: string
  ctaText?: string
  ctaHref?: string
  backgroundGradient?: string
}

export function Hero({ title, subtitle, ctaText, ctaHref, backgroundGradient }: HeroProps) {
  return (
    <div className={`relative min-h-screen flex items-center justify-center overflow-hidden pt-20 ${backgroundGradient || 'bg-gradient-to-br from-black via-deep to-black'}`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gold rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gold/50 rounded-full mix-blend-screen filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-12 text-center">
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 border border-gold/30 rounded-full bg-gold/5">
          <span className="text-xs font-bold tracking-widest uppercase text-gold">Experience Luxury</span>
        </div>

        <h1 className="font-serif text-7xl md:text-8xl font-light leading-tight mb-6">
          {title}
          <span className="block text-gold italic">{subtitle}</span>
        </h1>

        <p className="text-lg text-muted max-w-2xl mx-auto mb-12 leading-relaxed">
          Curated access to the world's most exclusive hotels, events, and experiences
        </p>

        {ctaText && ctaHref && (
          <a
            href={ctaHref}
            className="inline-block px-8 py-4 bg-gold text-black font-bold tracking-widest uppercase hover:opacity-90 transition-opacity"
          >
            {ctaText}
          </a>
        )}
      </div>
    </div>
  )
}
