import xior from 'xior';

const xiorInstance = xior.create({
    baseURL:`${process.env.NEXT_PUBLIC_BASE_URL}`,
    headers: { "Content-Type": "application/json", },
});


 export const getTodos = async () => {
    try {
        const res = await xiorInstance.get('/api/todos/')
        console.info("getTodos 통신성공 : ", res)
        return res
        
    } catch (error) {
        console.info("Error : ", error)
        return new Error(error)
    }
}

export const addTodos = async (options) => {
    const res = await xiorInstance.post('/api/todos/', options)
    .then((res) => {
        console.log("add 통신성공", res.status)
        return res
    })
    .catch((err) => {
        console.log('add 통신실패', err)
    })

    return res
}

export const deleteTodos = async (data) => {
    const res = await xiorInstance.delete(`/api/todos/${data.id}`)
            .then((res) => {
                console.info("dalete 통신성공", res.status)
                return res
            })
            .catch((error) => console.log("dalete 통신에러", error))

    return res
}

export const updateTodos = async (data, options) => {
     const res = await xiorInstance.put(`/api/todos/${data.id}`, options)
        .then((res) => {
            console.info("update 통신성공",res, res.status)
            return res
        })
        .catch((error) => console.log("update 통신에러", error))
}