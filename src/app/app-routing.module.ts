import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { GenGuard } from './_guards/gen.guard';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'repositories', component: RepositoriesComponent , canActivate: [GenGuard]},
  {path: '**', component: HomeComponent, pathMatch: 'full'},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
