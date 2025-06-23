import { defineConfig } from 'vite';
import plugin from '@vitejs/plugin-react';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
//export default defineConfig({
//    plugins: [plugin()],
//    server: {
//        port: 61199,
//    }
//})

export default defineConfig({
    plugins: [react()],
    server: {
        watch: {
            usePolling: true,
        },
        host: true, // needed for the Docker Container port mapping to work
        strictPort: true,
        port: 8080, // you can replace this port with any port
        allowedHosts: true,
    }
})