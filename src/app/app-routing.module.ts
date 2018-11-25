import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TestComponent} from './test/test.component';
import {SousTestComponent} from './test/sous-test/sous-test.component';
import {AppComponent} from './app.component';

const routes: Routes = [

  {path: 'test', component: TestComponent, children: [{path: 'sousTest', component: SousTestComponent, outlet: 'issma'}]},
  {path: '', component: AppComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
