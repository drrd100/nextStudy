import { create } from "zustand";
import {getTodos, addTodos, deleteTodos, updateTodos} from '@/data/api'
interface todoStore{
    todos: any[];
    getTodosState : {
        LOADING : boolean
        SUCCES : boolean
        FAILUE : boolean
    }
    getTodos : any
    addTodos : any
    deleteTodos : any
    updateTodos : any
 
  }
  
  const todoStore = create<todoStore>((set) => ({
    todos: [],
    getTodosState : {
        LOADING : false,
        SUCCES : false,
        FAILUE : false,
    },
    

    getTodos : async (e) => {
        console.info(e,"????")
        
        set((state) => ({ getTodosState : {...state.getTodosState, LOADING : true }}))
        
        const res = await getTodos()
        
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
        
        if(res && res.data){
            set(() => ({todos : [...todoStore.getState().todos, res.data.data]}))
        }
    },

    deleteTodos : async (data) => {
        const res = await deleteTodos(data)

        if(res && res.data){
            set(() => (
                 {todos : todoStore.getState().todos.filter((item) => item.id !== res.data.data.id)}
            ))
        }
    },

    updateTodos : async (data, options) => {
        await updateTodos(data, options)
        const res = await getTodos()
        
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
  }));
  
  export default todoStore;