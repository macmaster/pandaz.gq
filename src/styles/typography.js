import Typography from 'typography';
import oceanBeach from 'typography-theme-ocean-beach';
import fairyGates from 'typography-theme-fairy-gates';

// ocean beach overrides
oceanBeach.overrideThemeStyles = ({ rhythm }, options) => ({
  'h1,h2,h3,h4,h5,h6': {
    marginTop: rhythm(1),
  },
  'h1': {
    marginTop: rhythm(1),
  },
});

// fairy's gates overrides
fairyGates.overrideThemeStyles = ({ rhythm }, options) => ({
});

Object.assign(fairyGates, {
  headerFontFamily: ['Roboto Slab', 'sans-serif'],
  bodyFontFamily: ['Roboto Mono', 'sans-serif'],
  googleFonts: [
    {
      name: 'Roboto Slab',
      styles: [
        '700',
      ],
    }, {
      name: 'Roboto Mono',
      styles: [
        '400',
        '400i',
        '700',
        '700i',
      ],
    },
  ],
});

const typography = new Typography(fairyGates);
export const { scale, rhythm, options } = typography;
export default typography;
