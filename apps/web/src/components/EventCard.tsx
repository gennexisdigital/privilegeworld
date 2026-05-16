import { useState } from 'react'
import type { Event } from '../types'

interface EventCardProps {
  event: Event
  onBook?: (eventId: string) => void
}

export function EventCard({ event, onBook }: EventCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const spotsRemaining = event.capacity - event.booked
  const spotsClass = spotsRemaining <= 5 ? 'text-red-400' : 'text-gold'
  const spotsStyle = spotsRemaining === 0 ? 'opacity-50' : ''

  return (
    <a
      href={`/events/${event.id}`}
      className={`bg-card hover:bg-black/20 border-b-2 border-transparent hover:border-gold transition-all duration-300 ${spotsStyle} cursor-pointer block group`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative h-40 bg-gradient-to-br from-gold/10 to-black overflow-hidden">
        <div className={`w-full h-full transition-transform duration-500 ${isHovered ? 'scale-105' : 'scale-100'}`}>
          {event.image ? (
            <img
              src={event.image}
              alt={event.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-4xl opacity-20">
              {event.icon}
            </div>
          )}
        </div>

        {/* Category Badge */}
        <span className="absolute top-3 left-3 text-xs font-bold tracking-wider uppercase px-2 py-1 bg-gold/90 text-black rounded">
          {event.category}
        </span>

        {/* Spots Tag */}
        <span className={`absolute top-3 right-3 text-xs font-semibold tracking-wider uppercase px-2 py-1 bg-black/70 border border-gold/40 rounded ${spotsClass}`}>
          {spotsRemaining > 0 ? `${spotsRemaining} left` : 'Sold Out'}
        </span>
      </div>

      {/* Content */}
      <div className="px-6 py-5">
        <div className="text-xs font-bold tracking-widest uppercase text-gold mb-2">
          {event.location}
        </div>

        <h3 className="font-serif text-xl font-normal leading-tight mb-3 min-h-12 text-white group-hover:text-gold transition-colors">
          {event.name}
        </h3>

        {/* Meta Info */}
        <div className="flex gap-4 mb-4 text-xs text-muted">
          <span className="flex items-center gap-1">
            📅 {new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
          </span>
          <span className="flex items-center gap-1">
            👥 {event.capacity} spots
          </span>
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-white/8 flex justify-between items-end">
          <span className="text-xs text-muted font-semibold tracking-wider uppercase">
            {new Date(event.date).toLocaleDateString('en-US', { year: 'numeric' })}
          </span>
          {event.price && (
            <span className="text-gold font-serif text-lg">
              ${event.price.toLocaleString()}
            </span>
          )}
        </div>
      </div>
    </a>
  )
}
