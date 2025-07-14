import Image from 'next/image';

export default function Sidebar() {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <aside className="hidden lg:block w-[350px] fixed top-0 left-0 h-screen pt-[3em] pb-[40px] overflow-y-auto bg-[#f2f3f7]">
            <div className="flex flex-col items-center pb-[2em]">
                <div className='pb-[30px]'>
                    <div className="relative w-[150px] h-[150px] rounded-full overflow-hidden bg-red-200">
                        <Image
                            src="/images/yusufekoanggoro.jpg"
                            alt="Foto Profil"
                            fill
                            sizes="150px"
                            className="object-cover"
                        />
                    </div>
                </div>
                <h1 className='font-playfair font-bold text-[22px] mb-2'>Yusuf Eko Anggoro</h1>
                <span className='text-[12px] uppercase'><a className='text-[#2c98f0]' href='#'>Backend Engineer</a> In Indonesia</span>
            </div>
            <nav className='mb-[20px]'>
                <ul className="flex flex-col items-center space-y-2.5 list-none text-[12px] font-medium uppercase tracking-[1px]">
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Experience</a></li>
                    <li><a>Education</a></li>
                    <li><a>Certifications</a></li>
                    <li><a>Skills</a></li>
                    <li><a>Portfolio</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </nav>
            <div className='text-center pl-[20px] pr-[20px]'>
                <p>
                    <small>
                        &copy;Copyright {year} All rights reserved<br></br>This web is made with <span className="text-red-500 mx-1">❤︎</span> by <a>Yusuf</a>
                    </small>
                </p>
            </div>
        </aside>
    )
}