## @stackr23/babel-preset
> __! beta version !__

### core presets/plugins included

__presets__  
* `@babel/prset-env`
* `@babel/preset-react`

__plugins__  
* `@babel/plugin-transform-runtime`
* `@babel/plugin-proposal-decorators` - `legacy: true`
* `@babel/plugin-proposal-class-properties` - `loose: true`
* `@babel/plugin-transform-react-constant-elements`
* `@babel/plugin-proposal-export-default-from'`

* `@babel/plugin-syntax-dynamic-import`
* `babel-plugin-dynamic-import-node`

```javascript
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
```

### TODOS

+ dev / prod
+ some other conditional plugins/presets
+ clarify dynamic import plugins
