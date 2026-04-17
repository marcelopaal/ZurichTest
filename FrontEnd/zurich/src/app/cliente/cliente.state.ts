import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Cliente } from './cliente.model';
import { AddClient, UpdateClient, DeleteClient, ClearClients } from './cliente.actions';

export interface ClientsStateModel {
  clients: Cliente[];
}

@State<ClientsStateModel>({
  name: 'clients',
  defaults: {
    clients: []
  }
})
export class ClientsState {

  @Selector()
  static getClients(state: ClientsStateModel) {
    return state.clients;
  }

  @Action(AddClient)
  add(ctx: StateContext<ClientsStateModel>, action: AddClient) {
    const state = ctx.getState();
    ctx.patchState({
      clients: [...state.clients, action.payload]
    });
  }

  @Action(UpdateClient)
  update(ctx: StateContext<ClientsStateModel>, action: UpdateClient) {
    const state = ctx.getState();

    ctx.patchState({
      clients: state.clients.map(c =>
        c.id === action.payload.id ? action.payload : c
      )
    });
  }

  @Action(DeleteClient)
  delete(ctx: StateContext<ClientsStateModel>, action: DeleteClient) {
    const state = ctx.getState();

    ctx.patchState({
      clients: state.clients.filter(c => c.id !== action.id)
    });
  }

  @Action(ClearClients)
  clear(ctx: StateContext<ClientsStateModel>) {
    ctx.setState({ clients: [] });
  }
}