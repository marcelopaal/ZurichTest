import { Component } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';

import { Cliente } from './cliente.model';
import { ClientsState } from './cliente.state';
import { AddClient, UpdateClient, DeleteClient, ClearClients } from './cliente.actions';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-cliente',
  imports: [CommonModule, FormsModule],
  templateUrl: './cliente.component.html'
})
export class ClientsComponent {

  @Select(ClientsState.getClients)
  clients$!: Observable<Cliente[]>;

  name = '';
  email = '';
  phone = '';

  editMode = false;
  editId: number | null = null;

  constructor(private store: Store) {}

  // ➕ CREATE
  addClient() {
    const client: Cliente = {
      id: Date.now(),
      name: this.name,
      email: this.email,
      phone: this.phone
    };

    this.store.dispatch(new AddClient(client));
    this.clearForm();
  }

  // ✏️ EDIT START
  startEdit(client: Cliente) {
    this.editMode = true;
    this.editId = client.id;

    this.name = client.name;
    this.email = client.email;
    this.phone = client.phone;
  }

  // ✏️ UPDATE
  updateClient() {
    const client: Cliente = {
      id: this.editId!,
      name: this.name,
      email: this.email,
      phone: this.phone
    };

    this.store.dispatch(new UpdateClient(client));

    this.cancelEdit();
  }

  // ❌ DELETE
  deleteClient(id: number) {
    this.store.dispatch(new DeleteClient(id));
  }

  // 🧹 CLEAR FORM
  clearForm() {
    this.name = '';
    this.email = '';
    this.phone = '';
  }

  // 🔁 CANCEL EDIT
  cancelEdit() {
    this.editMode = false;
    this.editId = null;
    this.clearForm();
  }

  // 🧨 CLEAR ALL
  clearAll() {
    this.store.dispatch(new ClearClients());
  }
}