'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";


const NavLink = ({ href, ...rest }) => {
    const pathName = usePathname()
    const isActive = href === pathName

    return(
        <Link className={isActive? 'bg-gray' : ''} href={href} {...rest} />
    )
}
export default NavLink;