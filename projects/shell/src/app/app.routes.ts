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
  {
    path: 'mfe2',
    loadComponent: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:3000/remoteEntry.js',
        exposedModule: './MainComponent',
      }).then((m) => m.MainComponent),
    children: [
      {
        path: 'component1',
        loadComponent: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: 'http://localhost:3000/remoteEntry.js', // mfe1 remote entry
            exposedModule: './Component1',
          }).then((m) => m.Component1Component),
      },
      {
        path: 'component2',
        loadComponent: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: 'http://localhost:3000/remoteEntry.js',
            exposedModule: './Component2',
          }).then((m) => m.Component2Component),
      },
      {
        path: 'component3',
        loadComponent: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: 'http://localhost:3000/remoteEntry.js',
            exposedModule: './Component3',
          }).then((m) => m.Component3Component),
      },
      {
        path: 'component4',
        loadComponent: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: 'http://localhost:3000/remoteEntry.js',
            exposedModule: './Component4',
          }).then((m) => m.Component4Component),
      },
    ],
  },
  
];
