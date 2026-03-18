import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-neutral text-neutral-content pt-20 px-20'>
      
         <div className="footer sm:footer-horizontal  ">
          <nav>
          <h6 className="footer-title">CS — Ticket System</h6>
         <p>Lorem Ipsum is simply dummy text of the <br />
          printing and typesetting industry. Lorem <br />
           Ipsum has been the industry's standard <br />
            dummy text ever since the 1500s, when an <br />
             unknown printer took a galley of type and <br /> 
             scrambled it to make a type specimen book.</p>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Our Mission</a>
          <a className="link link-hover">Contact Saled</a>
      
        </nav>
        <nav>
          <h6 className="footer-title">Service</h6>
          <a className="link link-hover">Products & Services</a>
          <a className="link link-hover">Customer Stories</a>
          <a className="link link-hover">Download Apps</a>
        </nav>
        <nav>
          <h6 className="footer-title">Information</h6>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Terms & Conditions</a>
          <a className="link link-hover">Join Us</a>
        </nav>
        <nav>
          <h6 className="footer-title">Social Links</h6>
          <a className="link link-hover">@CS — Ticket System</a>
          <a className="link link-hover">@CS — Ticket System</a>
          <a className="link link-hover">@CS — Ticket System</a>
          <a className="link link-hover">support@cst.com</a>
        </nav>
        
         </div>
       <div className='border-t-1 border-gray-100 py-3 mt-20 '>
          <h1 className='font-normal text-base text-white text-center'>© 2025 CS — Ticket System. All rights reserved.</h1>
        </div>
        
      </footer>
    );
};

export default Footer;