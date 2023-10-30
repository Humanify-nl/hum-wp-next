import Link from 'next/link';
import React from 'react';
// Import the SVG as a React component
import { ReactSVG } from 'react-svg';

const NavItem = ( {item} ) => {

  const nestedItems = (item.child_items || []).map((item) => {
    return <NavItem key={item.ID} item={item} href={item.menu_slug} />;
  });

  return (
    <li className="nav-item flex items-end relative group/item" key={item.ID}>            
      <Link
        href={item.menu_slug || ''}
        title={item.slug}
        className="nav-item-link underline hover:text-slate-500"           
      >
        {item.title}
      </Link>
      {nestedItems.length > 0 && (
        <ReactSVG src="/bs-chevron-down.svg" wrapper="div" />        
      )}
      {nestedItems.length > 0 && (
        <ul className="nav-submenu bg-white p-4 w-40 left-[-1rem] absolute top-[100%] hidden group-hover/item:block">{nestedItems}</ul>
      )}
    </li>
  )
}

export default NavItem;