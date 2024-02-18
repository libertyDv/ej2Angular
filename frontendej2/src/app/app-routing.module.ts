import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponentComponent } from './components/cliente-component/cliente-component.component';
import { SaveComponentComponent } from './components/save-component/save-component.component';

const routes: Routes = [
  { path: '', component: ClienteComponentComponent },
  { path: 'save', component: SaveComponentComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
