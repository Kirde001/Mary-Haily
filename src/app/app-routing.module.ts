import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitleComponent } from './entities/components/title/title.component';
import { TableComponent } from './entities/components/table/table.component';

const routes: Routes = [
  {path: '', redirectTo: '/Title', pathMatch: 'full'},
  { path: 'Title', component: TitleComponent },
  { path: 'Table', component: TableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
