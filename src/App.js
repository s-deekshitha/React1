import logo from './Images/logo.png';
import london from './Images/london.png';
import newyork from './Images/newyork.png';
import washington from './Images/washington.png';
import library from './Images/library.png';
import basketball from './Images/basketball.png';
import cafeteria from './Images/cafeteria.png';
import user1 from './Images/user1.jpg';
import user2 from './Images/user2.jpg';
import './App.css';

function App() {

  var navLinks = document.getElementById("navLinks");

  function showMenu() {
      navLinks.style.right = "0";
  }
  function hideMenu() {
      navLinks.style.right = "-200px";
  }
  return (
    <div className="App">
      <section class="header">
        <nav>
            <a href="Index.html"><img src={logo}/></a>
            <div class="navbar">
                <div class="nav-links" id="navLinks">
                    <i class="fa fa-times" onclick={hideMenu}></i>
                    <ul>
                        <li class="hi"><a href="">HOME</a></li>
                        <li><a href="">ABOUT</a></li>
                        <li><a href="">SERVICES</a></li>
                        <li><a href="">TECHNOLOGIES</a></li>
                        <li><a href="">CONTACT</a></li>
                    </ul>
                </div>
                <i class="fa fa-bars" onclick={showMenu}></i>
            </div>
        </nav>

        <div class="text-box">
            <h1>Dee's Creation</h1>
            <p>Making website is now one of the easiest thing in the
                world.You just need to learn<br/> HTML,CSS,JAVASCRIP and
                you are good to go
            </p>
            <a href="" class="hero-btn">Visit Us To Know More</a>
        </div>

    </section>

    <section class="course">
        <h1>Courses We Offer</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <div class="row">
            <div class="course-col">
                <h3>Intermediate</h3>
                <p>Online classes have existed in our society for some time now, but the importance of online classes
                    was fully realised</p>
            </div>
            <div class="course-col">
                <h3>Degree</h3>
                <p>Online classes have existed in our society for some time now, but the importance of online classes
                    was fully realised</p>
            </div>
            <div class="course-col">
                <h3>Post Graduation</h3>
                <p>Online classes have existed in our society for some time now, but the importance of online classes
                    was fully realised</p>
            </div>
        </div>
    </section>

    <section class="campus">
        <h1>Our Campus</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <div class="row">
            <div class="campus-col">
                <img src={london}/>
                <div class="layer">
                    <h3>LONDON </h3>
                </div>
            </div>
            <div class="campus-col">
                <img src={newyork}/>
                <div class="layer">
                    <h3>NEWYORK</h3>
                </div>
            </div>
            <div class="campus-col">
                <img src={washington}/>
                <div class="layer">
                    <h3>WASHINGTON</h3>
                </div>
            </div>
        </div>
    </section>


    <section class="facilities">
        <h1>Our Facilities</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <div class="row">
            <div class="facilities-col">
                <img src={library}/>
                <h3>World Class Library</h3>
                <p>Online classes have existed in our society for some time now, but the importance of online classes
                    was fully realised
                </p>
            </div>

            <div class="facilities-col">
                <img src={basketball}/>
                <h3>Largest Playground</h3>
                <p>Online classes have existed in our society for some time now, but the importance of online classes
                    was fully realised
                </p>
            </div>

            <div class="facilities-col">
                <img src={cafeteria}/>
                <h3>Tasty & Healthy Food</h3>
                <p>Online classes have existed in our society for some time now, but the importance of online classes
                    was fully realised
                </p>
            </div>
        </div>
    </section>


    <section class="testimonials">
        <h1>What Our Student Says</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <div class="row">
            <div class="testimonial-col">
                <img src={user1}/>
                <div>
                    <p>They has a 360 overall view and support cross different workstream and phases of the end to end
                        development, from the upstsream, discovery, ideation to deliver the final product and evolution.
                    </p>
                    <h3>Berkley</h3>
                </div>
            </div>

            <div class="testimonial-col">
                <img src={user2}/>
                <div>
                    <p>They has a 360 overall view and support cross different workstream and phases of the end to end
                        development, from the upstsream, discovery, ideation to deliver the final product and evolution.
                    </p>
                    <h3>David</h3>

                </div>
            </div>
        </div>
    </section>

    <section class="cta">
        <h1>Enroll For Our Various Online Courses</h1>
        <a href=" " class="hero-btn">CONTACT US</a>
    </section>




    <section class="footer">
        <div class="container">
            <div class="rows">
                <div class="footer-cols">
                    <h4> About Us </h4>
                    <p> <b>The about us page is commonly used by all types of businesses
                         to give customers more insight into who is involved with a given
                         business and exactly what it doe 
                        </b> 
                    </p>
                </div>
                <div class="footer-cols">
                    <h4>Get Help</h4>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>
                <div class="footer-cols">
                    <div class="social-links">
                        <h4> Follow Us</h4>
                        <i class="bi bi-facebook"></i>
                        <i class="bi bi-twitter"></i>
                        <i class="bi bi-instagram"></i>
                        <i class="bi bi-linkedin"></i>
                    </div>
                </div>
            </div> 
        </div>    
    </section>








    
    </div>
  );
}

export default App;
