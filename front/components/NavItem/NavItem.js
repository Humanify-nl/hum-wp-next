import Link from 'next/link';

const NavItem = ( {item} ) => {

  return (
    <li className="nav-item" key={item.ID}>            
      <Link        
        href={item?.slug || ''}
        title={item.title}
        className="nav-item-link underline hover:no-underline"           
      >
        {item.title}
      </Link>
      
      {item.child_items && (
        <ul className="nav-submenu">
          {item.child_items?.map((childItem) => {
            return(
              <NavItem key={childItem.ID} item={childItem} />
            )
          })}
        </ul>
      )}
      
  </li>
  )
}

export default NavItem;