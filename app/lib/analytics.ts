// Utility functions for tracking custom events in Google Analytics

declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, any>
    ) => void
  }
}

// Track custom events
export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, any>
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams)
  }
}

// Track button/link clicks
export const trackClick = (elementName: string, elementType?: string) => {
  trackEvent('click', {
    element_name: elementName,
    element_type: elementType || 'button',
  })
}

// Track product views
export const trackProductView = (productId: string, productName: string) => {
  trackEvent('view_item', {
    item_id: productId,
    item_name: productName,
  })
}

// Track product clicks
export const trackProductClick = (productId: string, productName: string) => {
  trackEvent('select_item', {
    item_id: productId,
    item_name: productName,
  })
}

// Track external link clicks
export const trackExternalLink = (url: string, linkName: string) => {
  trackEvent('click_external_link', {
    link_url: url,
    link_name: linkName,
  })
}

// Track navigation
export const trackNavigation = (destination: string) => {
  trackEvent('navigation', {
    destination: destination,
  })
}

// Track social media clicks
export const trackSocialClick = (platform: string) => {
  trackEvent('social_click', {
    platform: platform,
  })
}
