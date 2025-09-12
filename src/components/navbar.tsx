const links = [
    {
        title:"Guide",
        linc:"#"
    },
    {
        title:"Pricing",
        linc:"#"
    },{
        title:"Log in",
        linc:"#"
    }
]

export const Navbar = ()=>{
    return <div className="navbar-root">
        <div className="brand-logo">
            logo
        </div>
        <div className="nav_functionality">
            {links.map((value,idx)=>{
                return <a className="nav_links" key={idx}href={value.linc}>{value.title}</a>
            })}
            <button className="nav_button">Get started</button>
        </div>
    </div>
}