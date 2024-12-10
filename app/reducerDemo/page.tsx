import { title } from "@/components/primitives";
import Msg from "@/components/reducerDemo/msg";

export default function reducerDemo() {
	return (
		<div>
			<h1 className={`${title()}`}>reducerDemo</h1>
			<Msg />
		</div>
	);
}
 
