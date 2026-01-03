// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  [
    {
      rules: {
        // Disable formatting rules handled by Prettier
        'comma-dangle': 'off',
        'vue/comma-dangle': 'off',
        'vue/singleline-html-element-content-newline': 'off',
        'vue/max-attributes-per-line': 'off',
        '@stylistic/semi': 'off',
        '@stylistic/comma-dangle': 'off'
      }
    }
  ]
)
