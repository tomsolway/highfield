import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserAgeComponent } from './src/user-age/user-age.component';
import { UserColoursComponent } from './src/user-colours/user-colours.component';

const routes: Routes = [{
  path: 'HighFieldAge', component: UserAgeComponent,
}, {
  path: 'HighFieldColours', component: UserColoursComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
