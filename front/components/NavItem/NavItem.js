import Link from 'next/link';

const NavItem = ( {item} ) => {

  const nestedItems = (item.child_items || []).map((item) => {
    return <NavItem key={item.ID} item={item} href={item.menu_slug} />;
  });

  return (
    <li className="nav-item" key={item.ID}>            
      <Link
        href={item.menu_slug || ''}
        title={item.slug}
        className="nav-item-link underline hover:no-underline"           
      >
        {item.title}
      </Link>
      {nestedItems.length > 0 && (
        <ul className="nav-submenu">{nestedItems}</ul>
      )}
    </li>
  )
}

export default NavItem;