'use client'

import React from 'react'
import { AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

interface ProvidersProps {
  children: React.ReactNode
}

export function Providers({ children }: ProvidersProps) {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait">
      <div key={pathname}>
        {children}
      </div>
    </AnimatePresence>
  )
} 