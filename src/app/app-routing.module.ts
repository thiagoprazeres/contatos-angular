import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContatosComponent } from './pages/contatos/contatos.component';
import { AddComponent } from './pages/contatos/add/add.component';

const routes: Routes = [
  { path: 'contatos', component: HomeComponent },
  { path: 'contatos/add', component: AddComponent },
  { path: 'contatos/:id', component: ContatosComponent },
  {path: '', redirectTo: '/contatos', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
