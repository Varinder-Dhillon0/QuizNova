

export default function HamburgerLink({icon, title, action}) {

    return (
        <button className="flex items-center cursor-pointer p-2 pt-1 pb-1" onClick={action}>
            <img src={icon} className="mr-2" alt="" />
            {title}
        </button>
    )
}