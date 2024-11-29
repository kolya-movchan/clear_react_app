/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    screens: {
      'small-mobile': '360px',     
      'mobile': '480px',     
      'tablet': '768px',  
      'leptop': '1024px',  
      'desktop': '1280px', 
      'large-desktop': '1536px',  
    },
    extend: {
      spacing: {
        'mobile-gutter': '16px',
        'mobile-margin': '24px',
        
        'tablet-gutter': '32px',
        'tablet-margin': '48px',
        
        'desktop-gutter': '48px',
        'desktop-margin': '64px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          xs: '1rem',
          sm: '1.5rem',
          md: '2rem',
          lg: '2.5rem',
          xl: '3rem',
          '2xl': '4rem',
        },
        screens: {
          xs: '100%',
          sm: '100%',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
        },
      },
      fontSize: {
        'mobile-h1': ['24px', '32px'],
        'mobile-h2': ['20px', '28px'],
        'mobile-h3': ['18px', '26px'],
        'mobile-body': ['16px', '24px'],
        'mobile-small': ['14px', '20px'],
        
        'tablet-h1': ['32px', '40px'],
        'tablet-h2': ['24px', '32px'],
        'tablet-h3': ['20px', '28px'],
        'tablet-body': ['16px', '24px'],
        
        'desktop-h1': ['40px', '48px'],
        'desktop-h2': ['32px', '40px'],
        'desktop-h3': ['24px', '32px'],
        'desktop-body': ['16px', '24px'],
      },
    },
  },
  plugins: [],
};
