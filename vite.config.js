import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // opcional, define a porta do Vite
    proxy: {
      // qualquer requisição para /tasks será redirecionada para sua API
      '/tasks': {
        target: 'https://taskflow-u543.onrender.com',
        changeOrigin: true,
        secure: false, // se estiver usando https
      },
      // se quiser redirecionar outras rotas, pode adicionar aqui
      '/auth': {
        target: 'https://taskflow-u543.onrender.com',
        changeOrigin: true,
        secure: false,
      },
      '/users/me': {
        target: 'https://taskflow-u543.onrender.com',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});