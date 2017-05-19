import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [

  {path: "home", loadChildren: './home/home.module#HomeModule'},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  declarations: [
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
