'use client'

import { useEffect, useState } from "react";
import Button from "../common/Button";
import Input from "../common/Input";
import TodoItem from "./TodoItem";
import { button } from "@/components/primitives";
import todoStore from "@/store/todoStore";

export default function TodoContainer(){
    const todosState = todoStore((state) => state.todos);
	const getTodos = todoStore((state) => state.getTodos);
	const getTodosState = todoStore((state) => state.getTodosState);
    const addTodos = todoStore((state) => state.addTodos);

    const [value, setValue] = useState('');
 
    const handleInputChange = (e : any) => {
        setValue(e.target.value)
    }
    
    const handleSubmit = async () => {
        const options = {
            title : value,
            is_done : false
        }
        addTodos(options)
        setValue("")
    }
    console.log("zzz ", getTodosState)

    useEffect(() => {
		console.log("이펙트", getTodosState)
		getTodos();
	},[])

    return (
        <>
            <div className="flex gap-[20px]">
                <span>아이디</span>
                <span>할일내용</span>
                <span>완료여부</span>
                <span>생성일</span>
            </div>

            <div className="py-[20px]">
                
                {getTodosState.LOADING && (
                    <>
                    {console.log(getTodosState.LOADING, "?????")}
                     <p>로딩중로딩중로딩중로딩중로딩중로딩중</p>
                    </>
                )}
           
                {getTodosState.SUCCES && (
                  <>
                    {todosState && todosState.map((item, key) => {
                        return <TodoItem key={key} data={item} />
                    })}
                  </>
                )}
                    
                {getTodosState.FAILUE && (
                     <p>시스템에러가 발생했습니다.</p>
                )}    

                       
                
               
            </div>

            <div className="absolute bottom-20">
                <Input attr={{placeholder:"todo 입력해주세요.", type:"text", value : value}} handleInputChange={handleInputChange}/>
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