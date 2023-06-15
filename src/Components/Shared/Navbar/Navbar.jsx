import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu gap-3 menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li className='text-sm bg-slate-900 text-white hover:border-l-2 hover:border-slate-900 hover:text-slate-900 hover:bg-white rounded-xl font-serif uppercase font-semibold'>
                            <Link to='/'>Home</Link>
                        </li>
                        <li className='text-sm bg-slate-900 text-white hover:border-l-2 hover:border-slate-900 hover:text-slate-900 hover:bg-white rounded-xl font-serif uppercase font-semibold'>
                            <Link to='/products'>Products</Link>
                        </li>
                        <li className='text-sm bg-slate-900 text-white hover:border-l-2 hover:border-slate-900 hover:text-slate-900 hover:bg-white rounded-xl font-serif uppercase font-semibold'>
                            <Link to='/admin'>Admin</Link>
                        </li>
                    </ul>
                </div>
                <Link to='/' className="border-b-4 border-dashed border-slate-900 p-3 rounded-2xl text-xl font-sans font-bold">BuyWise</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-3 px-1">
                    <li className='text-sm bg-slate-900 text-white hover:border-l-2 hover:border-slate-900 hover:text-slate-900 hover:bg-white rounded-xl font-serif uppercase font-semibold'>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className='text-sm bg-slate-900 text-white hover:border-l-2 hover:border-slate-900 hover:text-slate-900 hover:bg-white rounded-xl font-serif uppercase font-semibold'>
                        <Link to='/products'>Products</Link>
                    </li>
                    <li className='text-sm bg-slate-900 text-white hover:border-l-2 hover:border-slate-900 hover:text-slate-900 hover:bg-white rounded-xl font-serif uppercase font-semibold'>
                        <Link to='/admin'>Admin</Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <ul className="menu menu-horizontal gap-3 px-1">
                    <li className='text-sm bg-slate-900 text-white hover:border-l-2 hover:border-slate-900 hover:text-slate-900 hover:bg-white rounded-xl font-serif uppercase font-semibold'>
                        <Link to='/login'>Login</Link>
                    </li>
                    <li className='text-sm bg-slate-900 text-white hover:border-l-2 hover:border-slate-900 hover:text-slate-900 hover:bg-white rounded-xl font-serif uppercase font-semibold'>
                        <Link to='/register'>Register</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;