import Link from 'next/link';
import { SiPivotaltracker} from 'react-icons/si'

const NavBar = () => {

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
            <Link key={link.url} href={link.url} className='text-zinc-500 hover:text-zinc-800 transition-colors'>{link.label}</Link>
          ))
        }
      </ul>
    </nav>
  )
}

export default NavBar;