import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

export default defineConfig({
    appType: 'spa',
    base: '/',
    envDir: 'root',
    envPrefix: 'VITE_',
    logLevel: 'info',
    publicDir: 'public',
    root: process.cwd(),
    plugins: [
        react(),
    ],
    build: {
        outDir: 'dist',
    },
    preview: {
        port: 3001,
    },
    server: {
        port: 3000,
    },
});
