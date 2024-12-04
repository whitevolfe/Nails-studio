import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa'; // Import social media icons
import './Footer.css'; // Import CSS for styling

const Footer = () => {
  return (
    
    <footer className='footer-bg'>
      <div className="footer-content" style={{ color: 'white',display:"flex",marginTop:30,marginLeft:50}}>
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
          <p>Email: info@nailsbymi.com</p>
          <p>Phone: +1 (555) 555-5555</p>
          <p>Address: 123 Nail Studio Ave, City, State, ZIP</p>
        </div>

        <div className="footer-section newsletter">
          <h3>Subscribe to Our Newsletter</h3>
          <input type="email" placeholder="Enter your email" />
          <button style={{backgroundColor:"#DB2777",marginTop:20}}>Subscribe</button>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="social-media-icons">
          <a href="https://www.facebook.com/your-page" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaFacebook size={30} color="#3b5998" />
          </a>
          <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaInstagram size={30} color="#E1306C" />
          </a>
          
        </div>
        <p>&copy; {new Date().getFullYear()} Nails By MI. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 