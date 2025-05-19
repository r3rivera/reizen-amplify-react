import Logo from '../shared/Logo'

export default function AppHeader() {
  return (
    <header className="relative isolate z-10 bg-white">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Logo sourceUrl='R2Logo.jpg' altName='  '/>
          </a>
        </div>
      </nav>
    </header>
  )
}