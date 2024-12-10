import Link from "next/link";

export default function Header(){
    return (
        <>
            <header className="">
                <div className="inner max-w-[1280px] mx-auto flex justify-between py-[20px]">
                    <h1><Link href={"/"}>홈</Link></h1>

                    <nav>
                        <ul className="flex gap-[20px]">
                            <li><Link href={"/todos"}>Todos page</Link></li>
                            <li><Link href={"/myTodos"}>myTodos page</Link></li>
                            <li><Link href={"/zustandDemo"}>zustandDemo page</Link></li>
                            <li><Link href={"/reducerDemo"}>reducerDemo page</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}