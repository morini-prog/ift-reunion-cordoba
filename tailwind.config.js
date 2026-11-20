/** Configuración de Tailwind CSS para compilar assets/tailwind.css */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        leibnitz: {
          navy: '#0F294A',
          blue: '#1E40AF',
          cyan: '#0EA5E9',
          amber: '#D97706',
          bg: '#F8FAFC',
          card: '#FFFFFF'
        }
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif']
      },
      boxShadow: {
        subtle: '0 4px 20px -2px rgba(15, 41, 74, 0.06), 0 2px 6px -1px rgba(15, 41, 74, 0.04)',
        cardHover: '0 12px 30px -4px rgba(15, 41, 74, 0.12), 0 4px 10px -2px rgba(15, 41, 74, 0.06)'
      }
    }
  },
  plugins: []
};
