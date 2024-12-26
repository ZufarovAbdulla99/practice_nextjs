"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Nav = () => {
  const pathName = usePathname()

  return (
    <div>
        <Link href="/"
        className={`${pathName === "/" ? "underline" : ""}`}>
            Root
        </Link>
        <Link href="/blog"
        className={`${pathName === "/blog" ? "underline" : ""}`}>
            Blog
        </Link>
    </div>
  )
}

export default Nav