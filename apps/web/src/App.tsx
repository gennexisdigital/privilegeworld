import { useState } from 'react'
import { Layout } from './components/Layout'
import { Hero } from './components/Section'
import { Section } from './components/Section'
import { EventCard } from './components/EventCard'
import { Filter } from './components/Filter'
import type { Event } from './types'

const MOCK_EVENTS: Event[] = [
  {
    id: '1',
    name: 'F1 Italian Grand Prix — Paddock Club, Monza',
    location: 'Monza, Italy',
    category: 'sport',
    date: '2026-05-24',
    capacity: 20,
    booked: 13,
    price: 28000,
    icon: '🏎️',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a968bd3345c4492b2af5e8/d8f8e26ec_generated_image.png',
  },
  {
    id: '2',
    name: 'Private Winery Tour — Gaja, Piedmont',
    location: 'Barbaresco, Piedmont',
    category: 'winery',
    date: '2026-04-12',
    capacity: 12,
    booked: 9,
    price: 12000,
    icon: '🍷',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a968bd3345c4492b2af5e8/be11e68df_generated_image.png',
  },
  {
    id: '3',
    name: 'Private Opera Night — La Scala, Milan',
    location: 'Milan, Italy',
    category: 'culture',
    date: '2026-04-28',
    capacity: 10,
    booked: 5,
    price: 6500,
    icon: '🎭',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a968bd3345c4492b2af5e8/840eeb646_generated_image.png',
  },
  {
    id: '4',
    name: 'Omakase at Nobu — Private Table',
    location: 'Milan, Italy',
    category: 'dining',
    date: '2026-04-12',
    capacity: 8,
    booked: 0,
    price: 1200,
    icon: '🍣',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a968bd3345c4492b2af5e8/e200e1bf5_generated_image.png',
  },
  {
    id: '5',
    name: 'Milan Fashion Week — Front Row & After-Party',
    location: 'Milan, Italy',
    category: 'fashion',
    date: '2026-09-22',
    capacity: 20,
    booked: 5,
    price: 5000,
    icon: '👗',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a968bd3345c4492b2af5e8/a77a1275b_generated_image.png',
  },
  {
    id: '6',
    name: 'Miart Milan — Private Preview & Collector Dinner',
    location: 'Milan, Italy',
    category: 'art',
    date: '2026-10-10',
    capacity: 15,
    booked: 7,
    price: 22000,
    icon: '🎨',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a968bd3345c4492b2af5e8/b484d53b2_generated_image.png',
  },
  {
    id: '7',
    name: 'Exclusive Italian Escape — Portofino & Capri',
    location: 'Amalfi Coast, Italy',
    category: 'travel',
    date: '2026-07-10',
    capacity: 12,
    booked: 6,
    price: 22000,
    icon: '✈️',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a968bd3345c4492b2af5e8/a4b65fe76_generated_image.png',
  },
]

const CATEGORIES = ['all', 'sport', 'winery', 'dining', 'culture', 'fashion', 'art', 'travel']

export function App() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredEvents = activeCategory === 'all'
    ? MOCK_EVENTS
    : MOCK_EVENTS.filter(event => event.category === activeCategory)

  return (
    <div className="min-h-screen bg-black text-white">
      <Layout />

      {/* Hero Section */}
      <Hero
        title="Discover Exclusive"
        subtitle="Experiences"
        ctaText="Explore Events"
        ctaHref="#events"
        backgroundGradient="bg-gradient-to-br from-black via-deep to-black"
      />

      {/* Events Section */}
      <Section
        label="VIP Access"
        title="Exclusive"
        subtitle="Event Access"
        description="Limited-access, invitation-only experiences across Italy and beyond. Reserve before access closes."
      >
        <Filter
          categories={CATEGORIES}
          activeCategory={activeCategory}
          onFilterChange={setActiveCategory}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5 bg-white/8">
          {filteredEvents.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted text-lg">No events found in this category</p>
          </div>
        )}
      </Section>

      {/* Stats Section */}
      <section className="bg-gold text-black py-16">
        <div className="max-w-7xl mx-auto px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="font-serif text-5xl font-light mb-2">500+</div>
              <div className="text-sm font-bold tracking-widest uppercase">Exclusive Events</div>
            </div>
            <div className="text-center">
              <div className="font-serif text-5xl font-light mb-2">50K+</div>
              <div className="text-sm font-bold tracking-widest uppercase">Members</div>
            </div>
            <div className="text-center">
              <div className="font-serif text-5xl font-light mb-2">99%</div>
              <div className="text-sm font-bold tracking-widest uppercase">Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="font-serif text-5xl font-light mb-2">24/7</div>
              <div className="text-sm font-bold tracking-widest uppercase">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-surface border-t border-white/8 py-12">
        <div className="max-w-7xl mx-auto px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold tracking-widest uppercase text-xs text-gold mb-4">Hotels</h4>
              <ul className="space-y-2 text-sm text-muted">
                <li><a href="#" className="hover:text-gold transition-colors">Luxury Hotels</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Boutique</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Palace Hotels</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold tracking-widest uppercase text-xs text-gold mb-4">Destinations</h4>
              <ul className="space-y-2 text-sm text-muted">
                <li><a href="#" className="hover:text-gold transition-colors">Monaco</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Dubai</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Mykonos</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold tracking-widest uppercase text-xs text-gold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted">
                <li><a href="#" className="hover:text-gold transition-colors">Private Jets</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Yachts</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Villas</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold tracking-widest uppercase text-xs text-gold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-muted">
                <li>+1 800 000 0000</li>
                <li><a href="mailto:info@reservedworld.com" className="hover:text-gold transition-colors">info@reservedworld.com</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/8 text-center text-xs text-muted">
            <p>&copy; 2026 Reserved World. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
