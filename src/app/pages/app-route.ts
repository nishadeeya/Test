import { Route } from '@angular/router';

export const routes: Route[] = [
    {path:'', loadChildren: () =>
        import('../pages/auth/auth-route').then(
          (mod) => mod.routes
        )},
   
    {
      path: 'pages',
      loadChildren: () =>
        import('../pages/route').then(
          (mod) => mod.ROUTES
        )
    },
  ];