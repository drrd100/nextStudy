'use client'

import { title } from "@/components/primitives";
import Msg from "@/components/reducerDemo/msg";
import { useContext } from "react";
// import { TestProvider } from "@/store/context";
import { TestContext } from "@/store/context";

export default function reducerDemo() {
	// const {state, dispatch} = useContext(TestContext)

	// console.info(state, dispatch, "zzz")
	return (
		<div>
			<h1 className={`${title()}`}>reducerDemo</h1>
			<Msg />
		</div>
	);
}
 
