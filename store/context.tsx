'use client'

import { createContext, useReducer } from 'react';
import TestReducer, { TestIntialState } from './reducer';


// 1. 컨텍스트 만들기
export const TestContext = createContext(null);

// 2. 공급자 함수(hoc)
export const TestProvider = ({children}) => {
    // 3. reducer 연결 useReducer가 (state, dispatch) 리턴해줌 
    const [ state, dispatch ] = useReducer(TestReducer, TestIntialState);

    return (
        <TestContext.Provider value={{ state, dispatch }}>
            {children}
        </TestContext.Provider>
    );
};