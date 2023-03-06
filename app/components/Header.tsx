import Link from 'next/link'

function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/">
             Logo
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/">
                Home
              </Link>
              <Link href="/about">
                About
              </Link>
              <Link href="/contact">
                contact
              </Link>
            </div>
         
          </div>
          
        </div>
      </div>
  
    </nav>
  )
}

export default Navbar
