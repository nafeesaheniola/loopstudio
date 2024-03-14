/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{html,js}"];
export const theme = {
  extend: {
    backgroundImage: {
      'headerbg': "url('/src/images/mobile/image-hero.jpg')",
    }
  },
};
export const plugins = [];