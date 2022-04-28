import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

import {MyFormModule} from './my-form/my-form.module'
import {InputPropertyModule} from './input-property/input-property.module'

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { LiveClycleComponent } from './live-clycle/live-clycle.component';
import { DirectiveNgClassComponent } from './directive-ng-class/directive-ng-class.component';
import { DirectiveNgStyleComponent } from './directive-ng-style/directive-ng-style.component';
import { ExempleNgContentComponent } from './exemple-ng-content/exemple-ng-content.component';
import { YellowBackgroundDirective } from './shared/yellow-background.directive';
import { CustomDirectivesComponent } from './custom-directives/custom-directives.component';
import { HightlightDirective } from './shared/hightlight.directive';
import { HightlightMouseDirective } from './shared/hightlight-mouse.directive';
import { NgElseDirective } from './shared/ng-else.directive';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    EventBindingComponent,
    TwoWayDataBindingComponent,
    OutputPropertyComponent,
    LiveClycleComponent,
    DirectiveNgClassComponent,
    DirectiveNgStyleComponent,
    ExempleNgContentComponent,
    YellowBackgroundDirective,
    CustomDirectivesComponent,
    HightlightDirective,
    HightlightMouseDirective,
    NgElseDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MyFormModule,
    InputPropertyModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
