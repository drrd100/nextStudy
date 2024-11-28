'use client'

import TodoContainer from "@/components/myTodos/TodoContainer";
import { title } from "@/components/primitives";
import {getTodos} from '@/data/api'
import todoStore from "@/store/todoStore";
import { useEffect } from "react";

// import xior from 'xior';

// const getTodos = async () => {
// 	const res = await fetch(`${process.env.BASE_URL}/api/todos/`)

	
// 	if(!res.ok) console.error('error??')
// 	return res.json();
// }

// export const xiorInstance = xior.create({
// 	baseURL:`${process.env.BASE_URL}`,
// 	headers: { "Content-Type": "application/json", },
//   });


//   const getTodos = async () => {
// 	const res = await xiorInstance.get('/api/todos/')

// 	return res
//   }
 

export default function TodosPage() {

	
	  
	// 넥스트 퍼블릭 안붙이면 클라 컴포에서 읽을 수 없음.
	// console.log('server compo?????????????', process.env.BASE_URL)
	// console.log('data???', `${process.env.NEXT_PUBLIC_BASE_URL}/api/todos/`)

	// const res = await getTodos();
	
	// const todosState = todoStore((state) => state.todos);
	// const getTodos = todoStore((state) => state.getTodos);
	// const getTodosState = todoStore((state) => state.getTodosState);

	

	// console.info('store', todosState)

	return (
		<div>
			<h1 className={title({size: "sm"})}>todos Page</h1>
			{/* <TodosTable todos={res.data ?? []}/> */}
			<TodoContainer />

			{/* <p>{process.env.TEST}</p> */}
		</div>
	);
}
