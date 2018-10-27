'use strict'

var preset23 = {
    presets: [
        [require.resolve('@babel/preset-env'), { modules: false }],
        require.resolve('@babel/preset-react')
    ],
    plugins: [
        require.resolve('@babel/register'),
        require.resolve('@babel/plugin-transform-runtime'),
        require.resolve('@babel/plugin-proposal-class-properties'),
        require.resolve('@babel/plugin-transform-react-constant-elements'),
        // Adds syntax support for import()
        require.resolve('@babel/plugin-syntax-dynamic-import')
        // Add support for async/await
    ]
}

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
