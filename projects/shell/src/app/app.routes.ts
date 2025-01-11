import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { MainComponent } from '../../../mfe1/src/app/components/main/main.component';

export const routes: Routes = [
  {
    path: 'mfe1',
    loadComponent: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:2000/remoteEntry.js',
        exposedModule: './Component',  // Make sure this matches the exposed module/component in mfe1
      }).then((m) => m.AppComponent),
  },


  // {
  //   path: 'mfe2',
  //   loadComponent: () =>
  //     loadRemoteModule({
  //       type: 'module',
  //       remoteEntry: 'http://localhost:3000/remoteEntry.js', // mfe1's remote entry
  //       exposedModule: './APP_ROUTES', // Exposing AppComponent
  //     }).then((m) => m.default),
  // },


  {
    path: 'mfe2',
    loadComponent: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:3000/remoteEntry.js', // mfe2's remote entry
        exposedModule: './Component', // Exposing AppComponent
      }).then((m) => m.AppComponent), // Load AppComponent as the root
    children: [
      {
        path: '', // Default route to load MainComponent
        loadComponent: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: 'http://localhost:3000/remoteEntry.js', // mfe2's remote entry
            exposedModule: './MainComponent', // Exposing MainComponent
          }).then((m) => m.MainComponent),
        children: [
          {
            path: 'component1',
            loadComponent: () =>
              loadRemoteModule({
                type: 'module',
                remoteEntry: 'http://localhost:3000/remoteEntry.js',
                exposedModule: './Component1', // Exposing Component1
              }).then((m) => m.Component1Component),
          },
          {
            path: 'component2',
            loadComponent: () =>
              loadRemoteModule({
                type: 'module',
                remoteEntry: 'http://localhost:3000/remoteEntry.js',
                exposedModule: './Component2', // Exposing Component2
              }).then((m) => m.Component2Component),
          },
          {
            path: 'component3',
            loadComponent: () =>
              loadRemoteModule({
                type: 'module',
                remoteEntry: 'http://localhost:3000/remoteEntry.js',
                exposedModule: './Component3', // Exposing Component3
              }).then((m) => m.Component3Component),
          },
          {
            path: 'component4',
            loadComponent: () =>
              loadRemoteModule({
                type: 'module',
                remoteEntry: 'http://localhost:3000/remoteEntry.js',
                exposedModule: './Component4', // Exposing Component4
              }).then((m) => m.Component4Component),
          },
        ],
      },
    ],
  },
];
