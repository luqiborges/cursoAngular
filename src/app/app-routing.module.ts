import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';

const routes: Routes = [
  { path: 'primeiro-componente', component: DataBindingComponent },
  { path: 'segundo-componente', component: SegundoComponenteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
