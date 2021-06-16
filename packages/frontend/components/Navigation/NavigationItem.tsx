import Link from 'next/link';
interface NavItemProps {
    style: string,
    href: string
}

function NavigationItem({style, href}:NavItemProps) {
    return (
    <Link href={href}>
        <a className={style}></a>
    </Link>)
}

export default NavigationItem