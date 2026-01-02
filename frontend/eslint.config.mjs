// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  [
    {
      rules: {
        // Disable formatting rules handled by Prettier
        'comma-dangle': 'off',
        'vue/comma-dangle': 'off'
      }
    }
  ]
)
