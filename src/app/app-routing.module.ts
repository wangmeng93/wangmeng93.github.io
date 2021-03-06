import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [

  {path: "home", loadChildren: './home/home.module#HomeModule'},
  {path: "articles", loadChildren: './articles/articles.module#ArticlesModule'},
  {path: "contact", loadChildren: './contact/contact.module#ContactModule'},
  {path: "problems", loadChildren: './problems/problems.module#ProblemsModule'},
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
