import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { CounterState } from './state/counter.state';
import { ClientsState } from './cliente/cliente.state';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    NgxsModule.forRoot([CounterState]),
    NgxsModule.forRoot([ClientsState])
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {}

