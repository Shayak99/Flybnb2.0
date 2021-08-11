// import {SearchIcon} from '@heroicons/react/solid';

function Header() {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 
        bg-white shadow-md p-5 md:px-10">
            {/* <h1>I am the Header</h1> */}

            {/* left */}
            <div className="relative flex items-center h-10 w-28 cursor-pointer">
                <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
                layout='fill'
                objectFit="contain" 
                objectPosition ="left"
                />              
            </div>

            {/* middle - search*/}
            <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-xl">
                <input className="flex-grow bg-transparent outline-none pl-5 text-sm text-gray-600" type="text" placeholder="Start your search"/>
            <img className="h-8 bg-red-400 rounded-full cursor-pointer p-2 md:inline-flex md:mx-2" src="https://cdn3.iconfinder.com/data/icons/search-engine-optimization-seo-3/320/loupe_magnifier_magnifying_search-512.png" alt="logo"/>

            </div>

            {/* right */}
            <div className="flex items-center justify-end text-gray-500 space-x-4">
                <p className="hidden md:inline cursor-pointer">Become a host</p>
                <img className="h-6 cursor-pointer" src="https://ak.picdn.net/shutterstock/videos/26299637/thumb/1.jpg"/>
                <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
                    <img className="cursor-pointer h-6" src="https://cdn3.iconfinder.com/data/icons/mini-icon-set-general-office/91/General_-_Office_30-512.png"/>
                    <img className="cursor-pointer h-6" src="https://www.clipartmax.com/png/small/424-4242023_fa-user-circle-icon.png"/>
                </div>
            </div>

        </header>
    )
}

export default Header
