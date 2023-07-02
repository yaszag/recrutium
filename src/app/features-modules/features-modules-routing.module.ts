import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { ErrorfoundComponent } from '../auth/errorfound/errorfound.component';
import { FeaturesModulesComponent } from './features-modules.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { 
    path: '', 
    component: FeaturesModulesComponent,
    children: [
      { 
        path: 'home4', 
        loadChildren: () => import('./homes/home/home.module').then((m) => m.HomeModule) 
      },
      { 
        
        path: 'home3', 
        loadChildren: () => import('./homes/home3/home3.module').then((m) => m.Home3Module) 
      },
      { 
        
        path: 'home2', 
        loadChildren: () => import('./homes/home2/home2.module').then((m) => m.Home2Module) 
      },
      { 
        
        path: 'home', 
        loadChildren: () => import('./homes/home4/home4.module').then((m) => m.Home4Module) 
      },
      { 
        
        path: 'home5', 
        loadChildren: () => import('./homes/home5/home5.module').then((m) => m.Home5Module) 
      }, 
      { 
        path: 'employer', 
        // canActivate: [EmployerGuard],
        loadChildren: () => import('./employer/employer.module').then((m) => m.EmployerModule) 
      },
      { 
        path: 'freelancer', 
        // canActivate: [FreelancerGuard],
        loadChildren: () => import('./freelancer/freelancer.module').then((m) => m.FreelancerModule) 
      },
      { 
        path: 'pages', 
        // canActivate: [PageGuard],
        loadChildren: () => import('./pages/pages.module').then((m) => m.PagesModule) 
      },
      { 
        path: 'blog', 
        // canActivate: [BlogGuard],
        loadChildren: () => import('./blog/blog.module').then((m) => m.BlogModule) 
      },
      { 
        path: 'admin',
        // canActivate: [AdminGuard], 
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) 
      },
    ] 
  },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesModulesRoutingModule { }
