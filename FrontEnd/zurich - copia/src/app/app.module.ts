import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { CounterState } from './state/counter.state';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    NgxsModule.forRoot([CounterState])
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {}