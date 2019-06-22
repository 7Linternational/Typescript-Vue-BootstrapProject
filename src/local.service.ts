import { Todo } from './models/todo';

class LocalService {
  get(): Array<Todo> {
    let todos = JSON.parse(localStorage.getItem('todos'));
    return todos ? todos : [];
  }

  add(title: string) {
    let todos = this.get();
    if (!todos) todos = [];
    let maxId = Math.max(...todos.map(t => t.id));
    todos.push({ id: maxId > 0 ? maxId + 1 : 1, title: title });
    this.save(todos);
  }

  remove(id: number) {
    let todos = this.get();
    let indexToDelete = todos.findIndex(t => t.id == id);
    todos.splice(indexToDelete, 1);
    this.save(todos);
  }

  save(todos: Array<Todo>) {
    localStorage.setItem('todos', JSON.stringify(todos));
  }
}

export const localService = new LocalService();