import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'
import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'
import typescript from 'rollup-plugin-typescript'

//  system, amd, cjs, es, iife, umd

const tps = ['system', 'amd', 'cjs', 'es', 'iife', 'umd']

let cfgs = []

tps.map(item => {
    cfgs.push({
        input: 'src/zax-url.ts',
        external: ['jquery', 'moment', 'lodash'],
        output: {
            format: item,
            file: `libs/${item}.js`,
            name: 'zaxUrl',
            globals: {
                jquery: '$',
                lodash: '_',
                getCurrentPages: 'getCurrentPages'
            }
        },
        plugins: [
            typescript({}),
            nodeResolve({
                brower: true,
                module: true,
                jsnext: true,
                main: true,
                customResolveOptions: {
                    moduleDirectory: 'node_modules'
                }
            }),
            commonjs({
                extensions: ['.js', '.ts'],
                include: 'node_modules/**',
                exclude: []
            }),
            babel({
                exclude: 'node_modules/**',
                runtimeHelpers: true
            }),
            terser({
                sourcemap: false,
                output: {
                    comments: false
                }
                //  numWorkers: os.cpus().length - 1
            })
        ]
    })
})

export default cfgs
