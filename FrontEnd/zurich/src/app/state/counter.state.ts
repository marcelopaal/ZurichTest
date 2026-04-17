import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Incrementar, Decrementar, Reset } from './counter.actions';

@State<number>({
  name: 'counter',
  defaults: 0
})
export class CounterState {

  @Selector()
  static getCounter(state: number) {
    return state;
  }

  @Action(Incrementar)
  incrementar(ctx: StateContext<number>) {
    ctx.setState(ctx.getState() + 1);
  }

  @Action(Decrementar)
  decrementar(ctx: StateContext<number>) {
    ctx.setState(ctx.getState() - 1);
  }

  @Action(Reset)
  reset(ctx: StateContext<number>) {
    ctx.setState(0);
  }
}