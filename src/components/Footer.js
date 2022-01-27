import React from 'react'
import {Link} from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/Footer.css';

function Footer() {
    return (
            <div className='footer-section'>
            <div className="footer-links">
                <h4>INFORMATION FOR PATIENTS</h4>
                <p>Clinic Locations</p>
                <p>Better Medical & SmartClinics Privacy </p>
                <p>Terms and Policy</p>
                <p>Fees at SmartClinics</p>
                <p>Health Alerts and TIPS</p>
            </div>
            <div className="footer-links">
                <h4>INFORMATION FOR PATIENTS</h4>
                <p>Clinic Locations</p>
                <p>Better Medical & SmartClinics Privacy </p>
                <p>Terms and Policy</p>
                <p>Fees at SmartClinics</p>
                <p>Health Alerts and TIPS</p>
            </div>
            <div className="social-media">
                {/* <h4>Social Media </h4> */}
                <Link to="https://www.facebook.com/"><FacebookIcon /> </Link>
                <Link to="https://twitter.com/?lang=en"><TwitterIcon /> </Link>
                <Link to="https://www.instagram.com/"><InstagramIcon /> </Link>
                <Link to="https://au.linkedin.com/"><LinkedInIcon /> </Link>
            </div>
        </div>
    )
}

export default Footer
{/* <div>
<h4>INFORMATION FOR PATIENTS</h4>
<Link>Clinic Locations</Link>
<Link>Better Medical & SmartClinics Privacy </Link>
<Link>Terms and Policy</Link>
<Link>Fees at SmartClinics</Link>
<Link>Health Alerts and TIPS</Link>
</div>
<div>
<h4>INFORMATION FOR PATIENTS</h4>
<Link>Clinic Locations</Link>
<Link>Better Medical & SmartClinics Privacy </Link>
<Link>Terms and Policy</Link>
<Link>Fees at SmartClinics</Link>
<Link>Health Alerts and TIPS</Link>
</div> */}