import json from '@rollup/plugin-json'
import typescript from '@rollup/plugin-typescript'

export default {
  input: 'src/module.ts',
  output: {
    dir: 'dist',
    entryFileNames: '[name].mjs'
  },
  plugins: [
    json(),
    typescript({
      compilerOptions: {
        noEmitOnError: true
      },
      exclude: ['**/*.test.ts', '**/*.test.tsx', '**/*.spec.ts', '**/*.spec.tsx', 'specs/**/*'],
      tsconfig: './tsconfig.json'
    })
  ]
}
