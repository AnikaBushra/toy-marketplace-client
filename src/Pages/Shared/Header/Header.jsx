import { Link } from "react-router-dom";

const Header = () => {
    const user = { name: "anika" }

    const navList = <>
        <li><Link to='/'></Link></li>
        <li><Link to='/allToys'>All Toys</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>

        {
            user && <><li><Link to='/myToys'>My Toys</Link></li>
                <li><Link to='/addToy'>Add a Toy</Link></li>

            </>



        }

    </>
    return (
        <div className="navbar bg-sky-100  text-primary">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
                        {navList}
                    </ul>
                </div>

                <Link to='/' className="btn btn-ghost normal-case text-2xl  font-bold">
                    <img className="h-10" src="https://img.freepik.com/free-vector/kids-zone-fun-play-banner-design_1017-33753.jpg?w=740&t=st=1684429807~exp=1684430407~hmac=8db30de4bfe90822aca583c4c456f54d2a39c042f4fa55f7034bfd9730a2064f" alt="" />
                    <span>Kids Zone</span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-xl">
                    {navList}
                </ul>
            </div>
            <div className="navbar-end">
                <ul className="flex">
                    {
                        user ? <><li className="my-auto">Log Out</li>
                            <li className="w-14 mx-3 rounded-full ring "> <img title={user.name} className=" p-2 " src="https://img.freepik.com/free-vector/kids-zone-fun-play-banner-design_1017-33753.jpg?w=740&t=st=1684429807~exp=1684430407~hmac=8db30de4bfe90822aca583c4c456f54d2a39c042f4fa55f7034bfd9730a2064f" /></li></>
                            :
                            <li> <Link to='/login'>Log In</Link></li>
                    }
                </ul>
            </div>
        </div>
    );
};

export default Header;