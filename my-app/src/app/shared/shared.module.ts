import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavComponent } from './components/nav/nav.component';
import { StateDirective } from './directives/state/state.directive';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    NgbCollapseModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [NavComponent, StateDirective, FormComponent],
  exports: [NavComponent, StateDirective, FormComponent]
})
export class SharedModule { }
