
/// <reference types="vite/client" />

// Service Worker TypeScript definitions
interface ServiceWorkerGlobalScope extends Window {
  __WB_MANIFEST: Array<{
    revision: string | null;
    url: string;
  }>;
}

