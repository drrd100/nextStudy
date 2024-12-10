'use client'

import { useState } from "react";
import Button from "../common/Button";
import { button } from "@/components/primitives";
import todoStore from "@/store/todoStore";

import Input from "../common/Input";

type TodoItemProp = {
    data : {
        created_at: string
        id: string
        is_done : boolean
        title : string
    }
    setTodos ?:any
}

export default function TodoItem({ data} : TodoItemProp){
    const deleteTodos = todoStore((state) => state.deleteTodos);
    const updateTodos = todoStore((state) => state.updateTodos);

    const [inputValue, setinputValue] = useState(data.title) 
    const [isDone, setIsDone] = useState(data.is_done)
    const [isModify, setIsModify] = useState(false)
 
    const handleInputChange = (e : any) => {
        setinputValue(e.target.value)
    }

    const handleIsDone = () => {
        setIsDone(!isDone)
    }

    // 업데이트
    const handleSubmit = async() => {
        const options = {
            title : inputValue,
            is_done : isDone
        }
        await updateTodos(data, options)
        setIsModify(!isModify)
    }

    // 수정
    const handleModify = () => {
        setIsModify(!isModify)
    }

    // 취소
    const handleCancel = () => {
            setIsModify(!isModify)
    }

    // 삭제
    const handleDelete = async () => {
        deleteTodos(data)
    }

    return (
        <>
            <div className={`flex gap-[20px] items-center`}>
                <span>{data.id}</span>

                {/* 내용 */}
                {isModify ? 
                    (<>
                       <Input attr={{placeholder:"todo 입력해주세요.", type:"text", value: inputValue}} handleInputChange={handleInputChange}/>
                    </>) : 
                    (<>
                        <span>{data.title}</span>
                    </>)
                }
                
                {/* 완료여부 */}
                {isModify ? 
                    (<>
                        <Button className={button({type:"default"})} content={isDone ? "완료" : "미완료"} onClick={handleIsDone}/>
                    </>) : 
                    (<>
                        <span>{data.is_done ? "완료" : "미완료"}</span>
                    </>)
                }

                <span>{data.created_at}</span>

                {/* 버튼 */}
                {isModify ? 
                    (<>
                        <Button className={button({type:"done"})} onClick={handleSubmit} content={"완료"}/>
                        <Button className={button({type:"cancel"})} onClick={handleCancel} content={"취소"}/>
                    </>) : 
                    (<>
                        <Button className={button({type:"modify"})} onClick={handleModify} content={"수정"}/>
                        <Button className={button({type:"delete"})} onClick={handleDelete} content={"삭제"}/>
                    </>)
                }
            </div>
        </>
    )
}