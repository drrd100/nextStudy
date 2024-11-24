'use client'

import { useEffect, useState } from "react";
import Button from "../common/Button";
import Input from "../common/Input";
import TodoItem from "./TodoItem";
import { button } from "@/components/primitives";
import xior from 'xior';

const xiorInstance = xior.create({
    baseURL:`${process.env.NEXT_PUBLIC_BASE_URL}`,
    headers: { "Content-Type": "application/json", },
  });

export default function TodoContainer({data}){
    const [todos, setTodos] = useState(data);
    const [value, setValue] = useState('');
 
    const handleInputChange = (e : any) => {
        setValue(e.target.value)
    }
    
    const handleSubmit = async () => {
        const options = {
            title : value,
            is_done : false
        }

        const res = await xiorInstance.post('/api/todos/', JSON.stringify(options))
            .then((res) => {
                const data = res.data.data
                console.log(data)
                return data
            })
            .catch((error) => console.log(error))

        // console.info("handleSubmit : ", [...todos])
        setTodos([...todos, res])
    }


    // console.info("TodoContainer : ",data)

    return (
        <>
            <div className="flex gap-[20px]">
                <span>아이디</span>
                <span>할일내용</span>
                <span>완료여부</span>
                <span>생성일</span>
            </div>

            <div className="py-[20px]">
                {todos && todos.map((item, key) => {
                    return <TodoItem key={key} data={item} setTodos={setTodos}/>
                })}
            </div>

            <div className="absolute bottom-20">
                <Input attr={{placeholder:"todo 입력해주세요.", type:"text", value:value}} handleInputChange={handleInputChange}/>
                <Button 
                    className={button({type:"add"})}
                    content="추가"
                    attr={{
                            type: 'button',
                        }}
                    onClick={handleSubmit}
                    >
                    
                </Button>
            </div>
        </>
    )
}