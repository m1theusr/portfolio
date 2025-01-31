export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
    hmr: {
      host: 'matheusrodrigues.sytes.net',
      protocol: 'wss',
    },
  },
  base: '/',
});