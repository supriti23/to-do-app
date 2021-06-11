import create from "zustand";

export interface ToDo {
  id: number;
  task: string;
  done: string;
}
const addTodo = (toDoList: ToDo[], task: string): ToDo[] => [
  ...toDoList,
  {
    id: Math.max(0, Math.max(...toDoList.map(({ id }) => id))) + 1,
    task,
    done: "todo",
  },
];

const removeTodo = (toDoList: ToDo[], id: number): ToDo[] =>
  toDoList.filter((todo) => todo.id !== id);

const markDone = (toDoList: ToDo[], id: number): ToDo[] =>
  toDoList.map((item) => {
    if (item.id === id) {
      item.done = "done";
    }
    return item;
  });

const filterStatus = (toDoList: ToDo[], status: string, filterList: ToDo[]) => {
  let arr : ToDo[] = [];
  toDoList.map((item) => {
    if (item.done !== "all") {
      if (item.done === status) {
        arr.push(item)
      }
      filterList = [...arr];
    } else {
        filterList = [...toDoList]
    }
    
  });
  return filterList;
};


type Store = {
  toDoList: ToDo[];
  addTask: string;
  setNewTodo: (addTask: string) => void;
  addTodo: () => void;
  removeTodo: (id: number) => void;
  markDone: (id: number) => void;
  status: string;
  setStatus: (status: string) => void;
  filterList: ToDo[];
  filterStatus: (status: string) => void;
};

const useStore = create<Store>(
  (set): Store => ({
    toDoList: [],
    addTask: "",
    setNewTodo: (addTask: string) =>
      set((state) => ({
        ...state,
        addTask,
      })),
    addTodo: () =>
      set((state) => ({
        ...state,
        toDoList: addTodo(state.toDoList, state.addTask),
        addTask: "",
        filterList: [],
        status: "all",
      })),
    removeTodo: (id: number) =>
      set((state) => ({
        ...state,
        toDoList: removeTodo(state.toDoList, id),
      })),
    markDone: (id: number) =>
      set((state) => ({
        ...state,
        toDoList: markDone(state.toDoList, id),
      })),
    status: "all",
    setStatus: (status: string) =>
      set((state) => ({
        ...state,
        status,
      })),
      filterList: [],
      filterStatus: (status: string) =>
      set((state) => ({
        ...state,
        filterList: filterStatus(state.toDoList, status, state.filterList),
      })), 
  })
);

export default useStore;
