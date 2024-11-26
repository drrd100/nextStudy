'use client'

import Button from "../common/Button"

export default function Floating(){

    const handelScrollTop = () => {
        window.scroll({behavior: "smooth", top:0})
    }

    return (
        <>
            <div className="fixed bottom-[30px] right-[30px]">
                <Button content="스크롤탑 버튼" onClick={handelScrollTop}></Button>
            </div>
        </>
    )
}