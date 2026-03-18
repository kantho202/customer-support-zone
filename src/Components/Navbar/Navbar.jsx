import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar  max-w-[1200px] mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
         <div className='flex items-center menu-vertical space-y-2 p-2'>
      <ol className='flex px-3 space-x-3 font-normal menu-vertical space-y-2'>
        <li><a href="">Home</a></li>
        <li><a href="">FAQ</a></li>
        <li><a href="">Changelog</a></li>
        <li><a href="">Blog</a></li>
        <li><a href="">Download</a></li>
        <li><a href="">Contact</a></li>
      </ol>
      <a className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-bold">New Ticket</a>
    </div>
      </ul>
    </div>
    <a href='' className=" text-xl font-bold">CS — Ticket System</a>
  </div>
 
  <div className="navbar-end hidden lg:flex">

    <div className='flex items-center'>
      <ol className='flex px-3 space-x-3 font-normal'>
        <li><a href="">Home</a></li>
        <li><a href="">FAQ</a></li>
        <li><a href="">Changelog</a></li>
        <li><a href="">Blog</a></li>
        <li><a href="">Download</a></li>
        <li><a href="">Contact</a></li>
      </ol>
      <a className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-bold">New Ticket</a>
    </div>
  </div>
</div>
    );
};

export default Navbar;