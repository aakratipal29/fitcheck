import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Explicitly use Vite's React transform so JSX uses the automatic runtime.
// This prevents generated production code from expecting a global `React`.
export default defineConfig({
  plugins: [react()],
});
