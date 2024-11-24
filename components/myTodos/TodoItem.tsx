'use client'

import { useState } from "react";
import Button from "../common/Button";
import { button } from "@/components/primitives";
import xior from 'xior';

// useState set 함수도 프롭으로 전달?
// idDelete로 hidden 처리는 DOM수정 안됌
// 

type TodoItemProp = {
    data : {
        created_at: string
        id: string
        is_done : boolean
        title : string
    }
    setTodos:any
}

const xiorInstance = xior.create({
    baseURL:`${process.env.NEXT_PUBLIC_BASE_URL}`,
    headers: { "Content-Type": "application/json", },
  });

  

export default function TodoItem({ data , setTodos} : TodoItemProp){
    console.info(setTodos)
    const [isDone, setIsDone] = useState(data.is_done)
    const [idDelete, setIsDelete] = useState(false)

    const handleIsDone = () => {
        setIsDone(!isDone)
    }

    const handleDelete = async () => {

        const res = await xiorInstance.delete(`/api/todos/${data.id}`)
            .then((res) => {
                const data = res
                console.log(data)
                // setIsDelete(!idDelete)

                return data
            })
            .catch((error) => console.log("에러! : ", error))
            setTodos(prev => prev.filter(item => item.id !== data.id))

    }

    return (
        <>
            <div className={`flex gap-[20px] items-center ${idDelete && "hidden"}`}>
                <span>{data.id}</span>
                <span>{data.title}</span>
                <Button className={button({type:"default"})} content={isDone ? "완료" : "미완료"} onClick={handleIsDone}/>
                <span>{data.created_at}</span>
                <Button className={button({type:"modify"})} content={"수정"}/>
                <Button className={button({type:"delete"})} onClick={handleDelete} content={"삭제"}/>
            </div>
        </>
    )
}