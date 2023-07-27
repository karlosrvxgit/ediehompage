import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

function Nav() {
  return (
    <nav>
        <h3>Edie</h3>
        <div>
            <Image src='./menu.svg' alt='Menu' width={30} height={30} />
            <ul>
          <li>
          <Link href='#'>Home</Link>
          </li>
          <li>
          <Link href='#'>Services</Link>
          </li>
          <li>
          <Link href='#'>Our Work</Link>
          </li>
          <li>
          <Link href='#'>Client</Link>
          </li>
          <li>
          <Link href='#'>Contac</Link>
          </li>
          
        </ul>
        </div>
    </nav>
  )
}

export default Nav;
