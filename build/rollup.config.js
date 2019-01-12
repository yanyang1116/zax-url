import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser'
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';

//  system, amd, cjs, es, iife, umd

const tps = ['system', 'amd', 'cjs', 'es', 'iife', 'umd'];

let cfgs = [];

tps.map(item => {
    cfgs.push({
        input: 'src/zax-url.js',
        external: ['jquery', 'moment', 'lodash'],
        output: {
            format: item,
            file: `libs/${item}.js`,
            name: 'zaxUrl',
            globals: {
                jquery: '$',
                lodash: '_',
                getCurrentPages: "getCurrentPages",
            }
        },
        plugins: [
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
                include: 'node_modules/**',
                exclude: [],
            }),
            babel({
                exclude: 'node_modules/**',
                runtimeHelpers: true
            }),
            terser({
                sourcemap: false,
                output: {
                    comments: false,
                },
                //  numWorkers: os.cpus().length - 1
            })
        ],
    })
})

export default cfgs;