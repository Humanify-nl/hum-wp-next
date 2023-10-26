import NavItem from 'components/NavItem';
      /*

      */
const Nav = ( {menu} ) => {

  console.log(menu);



  return (
    <header className="navbar">
      <div className="container p-4 flex">
        <nav className="nav">
          <ul className="nav-container flex flex-nowrap gap-4">
            {menu.items.map((item) => {
                return (
                  <NavItem
                    className="nav-item"
                    key={item.ID}
                    item={item}
                  />
                )
              })}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Nav;