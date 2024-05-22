// import React from 'react'
// import Button from 'react-bootstrap/Button';
// import "bootstrap-icons/font/bootstrap-icons.css";
// function Poster() {
//   return (
//     <div className='App'> 
//         <div className='Container'>
//             <div className="row">
//                 <div className="col-6">
//                     <div className="context">
//                     <h3>Hi, I'm JAY MISTRY</h3>
//                     <h1>WEB DEVLOPER</h1>
//                     <p>I'm a professional web Developer. our main goal to help & <br/>satisficed the local & global clients by web Development
//                         <br/> solutions</p>           
//                     </div>
//                     <div className="button">
//                     <Button variant="outline-primary" size='sm' className='w-25 rounded' >Contect</Button>{' '}
//                     </div>
//                     <div class="social-buttons">
//                         <a href="https://www.instagram.com" class="social-button social-button--instagram" aria-label="Instagram">
//                             <i class="bi bi-instagram"></i>
//                         </a>
//                         <a href="https://www.linkedin.com/home" class="social-button social-button--linkedin" aria-label="LinkedIn">
//                             <i class="bi bi-linkedin"></i>
//                         </a>
//                         <a href="https://github.com/signup?user_email=&source=form-home-signup" class="social-button social-button--instagram" aria-label="Instagram">
//                             <i class="bi bi-github"></i>
//                         </a>
//                         <a href="https://x.com/?lang=en" class="social-button social-button--linkedin" aria-label="LinkedIn">
//                             <i class="bi bi-twitter"></i>
//                         </a>
//                         <a href="https://www.facebook.com/login/device-based/regular/login?_rdc=1&_rdr" class="social-button social-button--instagram" aria-label="Instagram">
//                         <i class="bi bi-facebook"></i>
//                         </a>
//                     </div>
//                 </div>
//                 <div className="col-6">
//                 <div class="vision">
//                     <div class="image">
//                         <img src="jayy.jpg" alt="" className='img-fluid'/>
//                     </div> 
//                 </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Poster
import React from 'react';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../Poster.css"; // Import custom CSS file if needed

function Poster() {
  return (
    <div className='App' style={{ backgroundColor: '#f8f9fa', padding: '50px 0' }}> 
        <div className='container'>
            <div className="row align-items-center">
                <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
                    <div className="context">
                        <h3>Hi, I'm <span className="text-primary">JAY MISTRY</span></h3>
                        <h1 className="display-4 fw-bold">WEB DEVELOPER</h1>
                        <p className="lead">With over 2 years of experience in PHP development,<br></br> I am skilled in PL/SQL, Forms, Reports and APEX, <br></br>with a robust track record in system integrations and optimizations.<br></br> My greatest achievement includes leading a successful <br></br>Oracle Forms upgrade that enhanced system performance.</p>           
                    </div>
                    <div className="button my-3">
                        <Button variant="outline-primary" size='lg' className='rounded'>Contact</Button>
                    </div>
                    <div className="social-buttons mt-3">
                        <a href="https://www.instagram.com" className="social-button mx-2" aria-label="Instagram">
                            <i className="bi bi-instagram fs-3"></i>
                        </a>
                        <a href="https://www.linkedin.com/home" className="social-button mx-2" aria-label="LinkedIn">
                            <i className="bi bi-linkedin fs-3"></i>
                        </a>
                        <a href="https://github.com/signup?user_email=&source=form-home-signup" className="social-button mx-2" aria-label="GitHub">
                            <i className="bi bi-github fs-3"></i>
                        </a>
                        <a href="https://x.com/?lang=en" className="social-button mx-2" aria-label="Twitter">
                            <i className="bi bi-twitter fs-3"></i>
                        </a>
                        <a href="https://www.facebook.com/login/device-based/regular/login?_rdc=1&_rdr" className="social-button mx-2" aria-label="Facebook">
                            <i className="bi bi-facebook fs-3"></i>
                        </a>
                    </div>
                </div>
                <div className="col-md-6 text-center">
                    <div className="vision">
                        <div className="image">
                            <img src="jayy.jpg" alt="Jay Mistry" className='img-rounded shadow'/>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Poster;
