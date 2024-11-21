'use client'

import { useState } from "react";
import Button from "../common/Button";
import { button } from "@/components/primitives";

type TodoItemProp = {
    data : {
        created_at: string
        id: string
        is_done : boolean
        title : string
    }
}

export default function TodoItem({ data } : TodoItemProp){

    const [isDone, setIsDone] = useState(data.is_done)

    const handleIsDone = () => {
        setIsDone(!isDone)
    }

    return (
        <>
            <div className="flex gap-[20px] items-center">
                <span>{data.id}</span>
                <span>{data.title}</span>
                <Button className={button({type:"default"})} content={isDone ? "완료" : "미완료"} onClick={handleIsDone}/>
                <span>{data.created_at}</span>
                <Button className={button({type:"modify"})} content={"수정"}/>
                <Button className={button({type:"delete"})} content={"삭제"}/>
            </div>
        </>
    )
}