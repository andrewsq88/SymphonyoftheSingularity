/// <reference types="vite/client" />

interface Window {
  gtag?: (
    command: 'event' | 'config' | 'js',
    targetId: string | Date,
    config?: {
      event_category?: string;
      event_label?: string;
      send_page_view?: boolean;
      [key: string]: any;
    }
  ) => void;
  dataLayer?: any[];
}
