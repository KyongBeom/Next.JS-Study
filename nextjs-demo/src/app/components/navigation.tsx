"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
export const Navigation = () => {
    const pathname = usePathname();
    // usePathname은 현재 경로 url을 나타냄

    return (
        <nav>
            <Link href="/" className={pathname === "/" ? "font-bold mr-4" : "text-blue-500 mr-4"}>
                {/* 삼항 연산자를 통해 현재 url에 따른 버튼의 css를 변경 */}
                Home
            </Link>
            <Link href="/about" className={pathname === "/about" ? "font-bold mr-4" : "text-blue-500 mr-4"}>
                About
            </Link>
            <Link href="/products/1" className={pathname === "/products/1" ? "font-bold mr-4" : "text-blue-500 mr-4"}>
                Codevolution
            </Link>

        </nav>
    )
}