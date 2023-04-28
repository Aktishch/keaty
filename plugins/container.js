const plugin = require('tailwindcss/plugin')

module.exports = plugin(

  ({ addComponents, theme }) => {

    addComponents({

      '.container': {
        '--padding-block': '40px',
        '--padding-inline': '100vw - 30px',
        padding: 'var(--padding-block) calc(50% - ((var(--padding-inline)) / 2))'
      },

      [`@media(min-width: ${theme('screens.xs')})`]: {
        '.container--xs': {
          '--padding-inline': 'var(--xs)'
        }
      },

      [`@media(min-width: ${theme('screens.sm')})`]: {
        '.container': {
          '--padding-block': '50px',
          '--padding-inline': 'var(--sm)'
        }
      },

      [`@media(min-width: ${theme('screens.md')})`]: {
        '.container': {
          '--padding-block': '60px',
          '--padding-inline': 'var(--md)'
        }
      },

      [`@media(min-width: ${theme('screens.lg')})`]: {
        '.container': {
          '--padding-block': '70px',
          '--padding-inline': 'var(--lg)'
        }
      },

      [`@media(min-width: ${theme('screens.xl')})`]: {
        '.container': {
          '--padding-block': '80px',
          '--padding-inline': 'var(--xl)',

          '&--distance': {
            '--width': 'var(--xl)',
            '--distance': '20px',
            '--padding-inline': 'calc(var(--width) + (var(--distance) * 2))',
            marginInline: 'var(--distance)',
            borderRadius: 'var(--distance)'
          }
        }

      }

    })

  }

)