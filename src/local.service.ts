import { Todo } from './models/todo';

class LocalService {
  get(key: string): Array<Todo> | undefined {
    let result: string | null = localStorage.getItem(key);
    let todos: Array<Todo>;
    if (result !== null) {
      todos = JSON.parse(result);
      return todos ? todos : [];
    }
    else {
      return undefined;
    }
  }

  save(key: string, todos: Array<Todo>) {
    localStorage.setItem(key, JSON.stringify(todos));
  }

  load(key: string): object | undefined {
    let result = localStorage.getItem(key);

    if (result !== null) {
      return JSON.parse(result);
    }
    else {
      return undefined;
    }
  }

  remove(key: string) {
    localStorage.removeItem(key);
  }
}

export const localService = new LocalService();