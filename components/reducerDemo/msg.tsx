'use client'

import { useContext } from "react";
import Button from "@/components/common/Button";
import { TestContext } from "@/store/context";

export default function Msg() {
	const {msg, dispatch} = useContext(TestContext)
	const handleTestDispatch = () => {
        console.info("zz")
		dispatch({type:"TSET_REDUCER"})
	}
	console.info(msg,dispatch)
	return (
        <>
            <p>{msg ? "true" : "false"}</p>
            <Button onClick={handleTestDispatch} content="버튼zz"></Button>
        </>
	);
}
 