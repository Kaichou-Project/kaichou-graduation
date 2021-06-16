interface NavItemProps {
    style: string
}

function NavigationItem({style}:NavItemProps) {
    return (
    <div className={style}></div>)
}

export default NavigationItem