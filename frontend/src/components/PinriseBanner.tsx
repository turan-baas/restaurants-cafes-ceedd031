'use client';
import { useEffect } from 'react';

export default function PinriseBanner() {
  useEffect(() => {
    // Load the dynamic banner script which reads the latest settings from the server.
    // This means any text/price/style changes in the dashboard apply immediately.
    const existing = document.getElementById('pinrise-banner-script');
    if (existing) return;
    const script = document.createElement('script');
    script.id = 'pinrise-banner-script';
    script.src = "https://portal.pinrise.io/api/portal/banner.js?id=ceedd031-0d13-41be-8e8a-0d84cf012fb9";
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return null;
}
