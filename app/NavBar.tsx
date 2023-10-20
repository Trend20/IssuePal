'use client';
import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SiPivotaltracker} from 'react-icons/si'

const NavBar = () => {

  // get current route
  const currentRoute = usePathname();
  console.log(currentRoute);

  // define the nav_links array
  const navLinks =[
    {
      label:'Dashboard',
      url:'/'
    },
    {
      label:'Issues',
      url:'/issues'
    }
  ]

  return (
    <nav className='flex space-x-6 mb-5 px-5 h-14 border-b items-center'>
      <Link href='/'><SiPivotaltracker size={30}/></Link>
      <ul className='flex space-x-6'>
        {
          navLinks.map((link) =>(
            <Link key={link.url} href={link.url} className={classNames({
            'text-zinc-900' :  link.url === currentRoute,
            'text-zinc-500':  link.url !== currentRoute,
            'text-zinc-500 hover:text-zinc-800 transition-colors': true
            })}>{link.label}</Link>
          ))
        }
      </ul>
    </nav>
  )
}

export default NavBar;