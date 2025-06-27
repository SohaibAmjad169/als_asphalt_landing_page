'use client';

import { useEffect } from 'react';

const UTMTracker = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const utmParams: { [key: string]: string } = {};
      let hasUtmParams = false;

      ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach((key) => {
        const value = params.get(key);
        if (value) {
          utmParams[key] = value;
          hasUtmParams = true;
        }
      });

      if (hasUtmParams) {
        localStorage.setItem('utm_data', JSON.stringify(utmParams));
      }
    }
  }, []);

  return null;
};

export default UTMTracker;
