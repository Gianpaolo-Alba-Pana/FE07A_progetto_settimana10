import { Todo } from './models/todo';

export let tasks: Todo[] = []
export let completed: Todo[] = [];
let id = 0;


export function get(): Promise<Todo[]>{
  return new Promise((res, rej) =>{
    setTimeout(() => {
      res(tasks);
    },2000);
  });
}

export function complete(): Promise<Todo[]> {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(completed);
    }, 2000);
  });
}


export function aggiungiTask(newTaskTitle: string){
  return new Promise<void>((res, rej)=>{
    setTimeout(()=>{
      let newTask: Todo ={
        id: id,
        title: newTaskTitle,
        completed: false
      };
      tasks.push(newTask);
      id++;
      res();
    }, 2000);
  });
}

export function elimina(task:Todo){
  tasks.splice(tasks.indexOf(task), 1)
}

export function aggiungi(task: Todo){
  completed.push(task);
}


