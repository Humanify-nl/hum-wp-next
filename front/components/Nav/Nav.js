import NavItem from 'components/NavItem';

const Nav = ( {menu} ) => {

  {console.log('new log')}
  
  menu.items.forEach((item) => {
   
    if (item.child_items) {

      // the parent page      
      item.menu_slug = item.slug;

      // child pages with parent page slug
      item.child_items.forEach((childItem) => {   
        childItem.menu_slug = `${item.slug}/${childItem.slug}`
      });

    } else {

      if ( !item.slug ) {

        // no slug = homepage
        item.menu_slug = '/';

      } else {
        // not a parent
        item.menu_slug = item.slug;
      }
    }

  });

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
                  path={item.menu_slug}
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