const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  
  name: 'mfe2',
  filename: 'remoteEntry.js',

 
    exposes: {
      './Component': './projects/mfe2/src/app/app.component.ts', // Expose AppComponent
      './MainComponent': './projects/mfe2/src/app/components/main/main.component.ts',
      './Component1': './projects/mfe2/src/app/components/component-1/component-1.component.ts',
      './Component2': './projects/mfe2/src/app/components/component-2/component-2.component.ts',
      './Component3': './projects/mfe2/src/app/components/component-3/component-3.component.ts',
      './Component4': './projects/mfe2/src/app/components/component-4/component-4.component.ts',
    },
    

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
