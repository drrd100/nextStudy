'use client'

import { useContext } from "react";
import Button from "@/components/common/Button";
import { TestContext } from "@/store/context";

export default function Msg() {
	const {state, dispatch} = useContext(TestContext)
	const handleTestDispatch = () => {
        console.info("zz")
		dispatch({type:"TEST_REDUCER"})
	}
	console.info(state)
	return (
        <>
            <p>{state.msg ? "true" : "false"}</p>
            <Button onClick={handleTestDispatch} content="버튼"></Button>
        </>
	);
}
 