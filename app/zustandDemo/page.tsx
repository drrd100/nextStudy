import { title } from "@/components/primitives";
import Demo01 from "@/components/zustandDemo/demo01";
import Demo02 from "@/components/zustandDemo/demo02";

export default async function zustandDemo() {
	// console.log('res???', res)
	return (
		<div>
			<h1 className={title()}>zustand Demo</h1>

			<Demo01 />
			<br/>
			<Demo02 />
		</div>
	);
}
