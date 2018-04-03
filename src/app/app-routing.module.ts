import {NgModule} from '@angular/core';
import {HomeComponent} from "./home/home.component";
import {AdminComponent} from "./admin/admin.component";
import {RouterModule, Routes} from "@angular/router";
import {Code404Component} from "./code404/code404.component";
import {AdminInfoComponent} from "./admin-info/admin-info.component";
import {HomeDaveComponent} from "./home-dave/home-dave.component";

const routes: Routes = [
    /*路由重定向*/
    { path: '',redirectTo: '/home',pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    // { path: 'product', component: AdminComponent },
    /*url里传参*/
    { path: 'product/:id', component: AdminComponent,
        //子路由
      children:[
          {path: '',component: AdminInfoComponent},
          {path:'homeDave/:id',component:HomeDaveComponent}
      ],
    },
    { path: '**', component: Code404Component }
];

@NgModule({
    exports:[RouterModule],
    imports:[RouterModule.forRoot(routes)]
})
export class AppRoutingModule {
}
