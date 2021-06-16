import Link from 'next/link';
interface NavItemProps {
    x: string,
    y: string,
    width: string,
    height: string,
    path: string,
    href: string
}

function NavigationItem({x, y, width, height, path, href}:NavItemProps) {
    return (
    <>
        <path d={path} fill="white"></path>
        <Link href={href}>
            <a>
                <rect x={x} y={y} width={width} height={height} fill="#0000"></rect>
            </a>
        </Link>
    </>)
}

export default NavigationItem