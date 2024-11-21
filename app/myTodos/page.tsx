
import TodoContainer from "@/components/myTodos/TodoContainer";
import { title } from "@/components/primitives";
import TodosTable from '@/components/todos/TodosTable';
import xior from 'xior';

// const getTodos = async () => {
// 	const res = await fetch(`${process.env.BASE_URL}/api/todos/`)

	
// 	if(!res.ok) console.error('error??')
// 	return res.json();
// }

export const xiorInstance = xior.create({
	baseURL:`${process.env.BASE_URL}`,
	headers: { "Content-Type": "application/json", },
  });


  const getTodos = async () => {
	const res = await xiorInstance.get('/api/todos/')

	return res
  }
 

export default async function TodosPage() {
	
	// 넥스트 퍼블릭 안붙이면 클라 컴포에서 읽을 수 없음.
	// console.log('server compo?????????????', process.env.BASE_URL)
	// console.log('data???', `${process.env.NEXT_PUBLIC_BASE_URL}/api/todos/`)

	const res = await getTodos();
	

	return (
		<div>
			<h1 className={title({size: "sm"})}>todos Page</h1>
			{/* <TodosTable todos={res.data ?? []}/> */}
			<TodoContainer data={res.data.data ?? []}/>

			{/* <p>{process.env.TEST}</p> */}
		</div>
	);
}
