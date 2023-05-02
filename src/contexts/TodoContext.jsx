import { useState,useEffect, createContext } from 'react';
import * as TodoAPIServices from '../services/todoServices'
// Create Context => Context Object (NAME)  ใช้ได้ 2 ที่
// #1 Provider : Wrapper Component => Shared Data,Logic ได้
// #2 Consumer : Component ที่ต้องการใช้ Data,Logic (Subscribe Component)
export const TodoContext = createContext();

// สร้าง Provider : Wrapper Component
function TodoContextProvider(props) {
    const [todos, setTodos] = useState([]);
    const [todosFilter, setTodosFilter] = useState([]);


    async function fetchAllTodo() {
        try {
            // #1 : Sync with External Service
            const response =  await TodoAPIServices.getAllTodos()

            // #2 : Sync with Internal State
            setTodos(response.data.todos);
            setTodosFilter(response.data.todos);
        } catch (error) {
            // #3 Error handler
            console.log(error.response.status);
        }
    }

    useEffect(()=>{
        fetchAllTodo();
    },[])

    
    const sharedObj = { magic: 42, todos: todos, todosFilter: todosFilter };
    return <TodoContext.Provider value={sharedObj}>{props.children}</TodoContext.Provider>;
}

export default TodoContextProvider;
