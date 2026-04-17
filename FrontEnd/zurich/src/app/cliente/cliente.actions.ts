import { Cliente } from './cliente.model';

export class AddClient {
  static readonly type = '[Clients] Add';
  constructor(public payload: Cliente) {}
}

export class UpdateClient {
  static readonly type = '[Clients] Update';
  constructor(public payload: Cliente) {}
}

export class DeleteClient {
  static readonly type = '[Clients] Delete';
  constructor(public id: number) {}
}

export class ClearClients {
  static readonly type = '[Clients] Clear';
}