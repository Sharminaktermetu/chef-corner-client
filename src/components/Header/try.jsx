import { useState } from 'react'
import { Link } from 'react-router-dom'



const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div className='w-9/12 m-auto px-12 py-8'>
      <div className='relative flex items-center justify-between'>
        <Link to='/'>
          
          <span className='text-xl font-bold tracking-wide text-gray-800 '>
           <span className='text-blue-600'>Shine</span> life
          </span>
        </Link>
        <ul className='items-center hidden space-x-8 lg:flex'>
        <nav>
            <div >
                <Link to="/">Home</Link>
                <Link to="/statictis" className='p-4'>Statictis</Link>

                <Link to="/appliedjobs" className='p-4'>Applied Jobs</Link>
                <Link to="/blog">Blog</Link>
               
            </div>
        </nav>
        </ul>
    <button className='p-3 bg-indigo-400 rounded m-2 text-white font-semibold'>Start Applying</button>
    
        <div className='lg:hidden'>
          <button
            aria-label='Open Menu'
            title='Open Menu'
            className='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50'
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
              <path
                fill='currentColor'
                d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
              />
              <path
                fill='currentColor'
                d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
              />
              <path
                fill='currentColor'
                d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className='absolute z-10 top-0 left-0 w-full'>
              <div className='p-5 bg-white border rounded shadow-sm'>
                <div className='flex items-center justify-between mb-4'>
                  <div>
                    <Link to='/' className='inline-flex items-center'>
                     
                      <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                        Shine life
                      </span>
                    </Link>
                  </div>
                  <div>
                    <button                    
                      className='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                      onClick={() => setIsMenuOpen(false)}
                    >X </button>
                  </div>
                </div>
                <nav>
                  <ul className='space-y-4'>
                    <li>
                      <Link  to='/'> Home</Link>
                    </li>
                
                    <li>
                      <Link to='/statictis'>Statictis</Link>
                    </li>
                
                    <li>
                      <Link to='/appliedjobs'>Applied Jobs</Link>
                    </li>
                
                    <li>
                      <Link to='/blog'>Blog</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header