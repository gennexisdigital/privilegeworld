import { useState } from 'react'

interface FilterProps {
  categories: string[]
  activeCategory: string
  onFilterChange: (category: string) => void
}

export function Filter({ categories, activeCategory, onFilterChange }: FilterProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onFilterChange(category)}
          className={`px-4 py-2 border text-xs font-semibold tracking-widest uppercase transition-all duration-200 ${
            activeCategory === category
              ? 'bg-gold text-black border-gold'
              : 'bg-transparent text-muted border-white/8 hover:text-white hover:border-white/20'
          }`}
        >
          {category === 'all' ? 'All' : category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </div>
  )
}
