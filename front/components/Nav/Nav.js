import Link from 'next/link';

const Nav = () => {

  const menuData = [
    { name: 'Home', href: '/', current: true },
    { name: 'Posts', href: '/posts', current: false },
    { name: 'Contact', href: '#', current: false },
  ];

  return (
    <header className="navbar">
      <div className="container p-4 flex">
        <nav className="nav">
          <ul className="nav-container flex flex-nowrap gap-4">
            {menuData.map((item) => {
              return (
                <li className="nav-item" key={item.name}>            
                  <Link   
                    href={item.href}
                    className="nav-item-link underline hover:no-underline"           
                  >
                    {item.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Nav;