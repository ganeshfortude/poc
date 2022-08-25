import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperationBomHomeComponent } from './operation-bom-home/operation-bom-home.component';
import { CreateOperationRoutingComponent } from './create-operation-routing/create-operation-routing.component';
import { CreateOpBomComponent } from './create-op-bom/create-op-bom.component';

const routes: Routes = [
  { path: '', component: OperationBomHomeComponent },
  // { path: 'create', component: CreateOperationRoutingComponent }
  { path: 'create', component: CreateOpBomComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
