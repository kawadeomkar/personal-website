import React, { Component } from 'react';

class Homepage extends Component {
  render() {
    return (
      <homePage>
        <div className="container-fluid">
          <h1>OMKAR KAWADE</h1>
          <h2>
            Programmer <br/>
            Car Enthusiast <br/>
            Phone Photographer <br/>
          </h2>
          <p>
            Hello, I'm Omkar and I'm currently a junior studying Computer
            Science at the University of California, Irvine. Aside from that
            I love cars and taking photos on my Samsung S7 Edge (not sponsored).
            Connect with me below and let's work together!
          </p>
          <div className="contact-images">
            <ul>
              <li>
                <a href="https://www.instagram.com/oxkawa/" target="_blank">
                <img src="https://image.flaticon.com/icons/png/512/69/69366.png"
                height="50" width="50" alt="instagram">
                </img>
              </a>
              </li>
              <li>
                <a href="https://github.com/kawadeomkar" target="_blank">
                  <img src="https://image.flaticon.com/icons/svg/25/25231.svg"
                  height="49" width="49" alt="github">
                  </img>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/kawadeomkar/" target="_blank">
                  <img src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_black-256.png"
                  height="56" width="56" alt="linkedin" ></img>
                </a>
              </li>
              <li>
                <a href="mailto:okawade@uci.edu" target="_blank">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Contact_vmc2015.png/480px-Contact_vmc2015.png"
                  height="60" width="60" alt="email" ></img>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/omkar.kawade.37" target="_blank">
                  <img src="http://www.quirkvwnh.com/wp-content/uploads/2015/03/FB-Icon1.png"
                  height="53" width="53" alt="facebook" ></img>
                </a>
              </li>
              <li>
                <a href="https://www.flickr.com/photos/157602664@N07/" target="_blank">
                  <img src="https://image.freepik.com/free-icon/flickr-circle_318-52808.jpg"
                  height="53" width="53" alt="flickr" ></img>
                </a>
              </li>

            </ul>
          </div>
        </div>
      </homePage>
    );
  }
}

export default Homepage;
