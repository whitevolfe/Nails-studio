import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa'; // Import social media icons
import './Footer.css'; // Import CSS for styling

const Footer = () => {
  return (
    
    <footer className='footer-bg'>
      <div className="footer-content" style={{ color: 'white',display:"flex",marginTop:30,marginLeft:20}}>
        <div className="footer-section about">
          <h2>Nails By MI</h2>
          <p>Your one-stop destination for luxurious nail care. We offer a variety of services to pamper your nails and enhance your beauty.</p>
        </div>

        <div className="footer-section services">
          <h3>Our Services</h3>
          <ul>
            <li>Manicure</li>
            <li>Pedicure</li>
            <li>Nail Art</li>
            <li>Gel Nails</li>
            <li>Acrylic Nails</li>
            <li>Nail Enhancements</li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: nailsbymi6@gmail.com</p>
          <p>Phone: +94-77-955-6605</p>
          <p>Address: 55 Vidyalayam Rd, Trincomalee</p>
        </div>

        <div className="footer-section newsletter">
          <h3>Subscribe to Our Newsletter</h3>
          <input type="email" placeholder="Enter your email" />
          <button style={{backgroundColor:"#DB2777",marginTop:20}}>Subscribe</button>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="social-media-icons">
          <a href="https://www.facebook.com/profile.php?id=100084894760221" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaFacebook size={30} color="#3b5998" />
          </a>
          <a href="https://www.instagram.com/nails_by_mi6?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaInstagram size={30} color="#E1306C" />
          </a>
          
        </div>
        <p>&copy; {new Date().getFullYear()} Nails By MI. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 