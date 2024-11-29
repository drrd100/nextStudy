import { create } from "zustand";
import {getTodos, addTodos} from '@/data/api'

interface todoStore {
    todos: any[];
    getTodosState : {
        LOADING : boolean
        SUCCES : boolean
        FAILUE : boolean
    }
    getTodos : any
    addTodos : any
  }
  
  const todoStore = create<todoStore>((set) => ({
    todos: [],
    getTodosState : {
        LOADING : false,
        SUCCES : false,
        FAILUE : false,
    },
    getTodos : async () => {
     
        todoStore.getState().getTodosState.LOADING = true

        const res = await getTodos()

        console.log("1",todoStore.getState().getTodosState.LOADING)
        console.log("2",todoStore.getState().getTodosState.LOADING)
        
        if(res instanceof Error){
            todoStore.getState().getTodosState.FAILUE = true
            todoStore.getState().getTodosState.LOADING = false

            alert("에러발생 : " + res.message)
        }

        if(res instanceof Error === false && res.data.state === "SUCCES"){
            todoStore.getState().getTodosState.SUCCES = true
            todoStore.getState().getTodosState.LOADING = false

            set(() => ({todos : res.data.data}))
        }
    },
    addTodos : async (options) => {
        const res = await addTodos(options)
        // console.info(res, todoStore.getState().todos)
        set(() => ({todos : [...todoStore.getState().todos, res.data.data]}))
    }
  }));
  
  export default todoStore;