import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperationBomHomeComponent } from './operation-bom-home/operation-bom-home.component';
import { CreateOperationRoutingComponent } from './create-operation-routing/create-operation-routing.component';

const routes: Routes = [
  { path: '', component: OperationBomHomeComponent },
  { path: 'create', component: CreateOperationRoutingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
