'use strict'

const env = process.env.BABEL_ENV || process.env.NODE_ENV || 'development'

// require.resolve('@babel/register')

const preset23 = () => ({
    comments: true,
    presets: [
        [
            require.resolve('@babel/preset-env', {
                modules: 'auto',
                'targets': { browsers: ['> 1%', 'last 2 versions', 'not ie <= 8'] }
            })
        ],
        require.resolve('@babel/preset-react')
    ],
    plugins: [
        require.resolve('@babel/plugin-transform-runtime'),
        [require.resolve('@babel/plugin-proposal-decorators'), { 'legacy': true }],
        require.resolve('@babel/plugin-proposal-class-properties', { 'loose' : true }),
        require.resolve('@babel/plugin-transform-react-constant-elements'),
        require.resolve('@babel/plugin-proposal-export-default-from'),
        // Adds support for import()
        // require.resolve('@babel/plugin-syntax-dynamic-import'), // clientside import()
        require.resolve('babel-plugin-dynamic-import-node') // serverSide import() for SSR
    ]
})

module.exports = preset23

/*
TODOS:
  + dev / prod
  + some other conditional plugins/presets
  + dynamic import use latest method


let env = process.env.BABEL_ENV || process.env.NODE_ENV || 'development'

// TBD: check process args for --production param

if (env === 'development' || env === 'test') {
    // Adds component stack to warning messages
    preset23.plugins.push(
        require.resolve('@babel/plugin-transform-react-jsx-source')
    )
}

if (env === 'test') {
    // preset23.plugins.push(
    //  TBD
    // )
}

if (env === 'production') {
    preset23.plugins.push(
        require.resolve('babel-plugin-transform-react-remove-prop-types')
    )
}
    
module.exports = function() {
    return preset23
}
*/
