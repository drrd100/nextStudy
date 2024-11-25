'use client'

import { useState } from "react";
import Button from "../common/Button";
import { button } from "@/components/primitives";
import xior from 'xior';
import Input from "../common/Input";

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
    const [isModify, setIsModify] = useState(false)
    const [value, setValue] = useState('');
 
    const handleInputChange = (e : any) => {
        setValue(e.target.value)
    }

    const handleIsDone = () => {
        setIsDone(!isDone)
    }

    const handleModify = () => {
        setIsModify(!isModify)
    }

    const handleDelete = async () => {

        const res = await xiorInstance.delete(`/api/todos/${data.id}`)
            .then((res) => {
                const data = res

                return data
            })
            .catch((error) => console.log("에러! : ", error))

        setTodos(prev => prev.filter(item => item.id !== data.id))
    }

    return (
        <>
            <div className={`flex gap-[20px] items-center`}>
                <span>{data.id}</span>

                {/* 내용 */}
                {isModify ? 
                    (<>
                       <Input attr={{placeholder:"todo 입력해주세요.", type:"text", value: value}} handleInputChange={handleInputChange}/>
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
                        <span>{isDone ? "완료" : "미완료"}</span>
                    </>)
                }

                <span>{data.created_at}</span>

                {/* 버튼 */}
                {isModify ? 
                    (<>
                        <Button className={button({type:"done"})} content={"완료"}/>
                        <Button className={button({type:"cancel"})} onClick={handleModify} content={"취소"}/>
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