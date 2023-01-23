import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Footer from "../components/layout/Footer";
import ServicesCard from "../components/layout/servicesCard";

const Container = styled.div`
.wrap {
  padding-left: 1rem;
  padding-right: 1rem;
  }
  .content{
    margin-top: 5rem;
  }
  .title{
    font-size: 1.5rem;
    font-weight: 600;
  }
  .about{
    gap: 1.5rem;
    align-items: center;
    margin-top: 1.5rem;
  }
  .firstImage{
    object-fit: cover;
    object-position: center;
    border-radius: 0.5rem;
  }
  .aboutContent{
    text-align: justify;
    line-height: 1.75rem;
    font-size: 1.125em;
    padding-top: 1rem;
  }
  .serviceCard{
    justify-content: space-around;
    margin-top: 2.5rem;
  }
  .serviceContent{
    padding-top: 1rem;
  }
  .serviceContentText{
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    font-size: 1.125rem; /* 18px */
    line-height: 1.75rem; /* 28px */
    text-align: justify;
  }
  .address{
    font-size: 2.25rem;
    font-weight: 600;
    padding-top: 1.25rem; /* 20px */
    padding-bottom: 1.25rem; /* 20px */
  }
  .address-container{
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2.5rem;
  }
  .address-image{
    border-radius: 0.5rem;
    height: 24rem;
    width: 100%;
    object-fit: cover;
    opacity: 0.4;
  }
  .address-content{
    position: absolute;
    font-size: 1.25rem; /* 20px */
    line-height: 1.75rem; /* 28px */
    text-align: center;
    font-weight: 600;
    text-transform: uppercase;
  }
  
  @media (min-width: 768px) {
    .wrap {
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  }
  .content{
    margin-top: 7rem;
    padding-left: 1rem;
    padding-right: 1rem;
    }
  .title{
    font-size: 2rem;
  }
  .about{
    display: flex;
  }
  .firstImage{
    width: 450px;
    height: 300px;
  }
  .serviceCard{
    display: flex;
    }
    .address-content{
      justify-content: center;
    font-size: 2.25rem; /* 36px */
    line-height: 2.5rem; /* 40px */
    }

  }

.nmtsourya{
color: black;
background: red;
}
`


const About = () => {

  const [content, setContent] = useState('')
  console.log(content)

  return (
    <>
      <Container>

        <div className="wrap">
          <div className="content">
            <div className="title">Who we are ?</div>
            <div className="about">
              <img src={'/assets/banner.png'} alt='Banner image' className="firstImage" />
              <div className="aboutContent">
                <p>We are Infrastructure brand management and consulting company. We provide optimised virtual solutions for the businesses for their marketing and operations needs. Such as Virtual Tours, Virtual Training Platforms, LMS Complient Virtual Ed-Tech Platforms and other VR based solutions.We are a gateway to digitaize any space to ensure engaging and close to real experince resulting in increased conversions and gain an edge over your competitors
                  <br />
                  <br />
                  At True Dimensions, we offer a wide range of digital marketing services to help businesses reach their target audience and achieve their marketing goals. Our services include
                  Social Media Marketing
                  Performance Marketing ( Google ads , Facebook ads, Instagram ads )
                  Email Marketing

                  With our expertise and proven track record, we can help you
                  to increase your online presence, drive traffic
                  to your website, and ultimately boost your sales.
                </p>

              </div>

            </div>


            <div className="title">Our Services</div>

            <div className="serviceCard">
              <div onClick={() => { setContent('number1') }} className={`cursor-pointer ${content === 'number1' ? 'scale-110 transition duration-150 ease-in-out' : 'opacity-30 hover:opacity-90'}`}>
                <ServicesCard image={"/assets/virtualtour.jpeg"} service='Virtual Tour' />
              </div>
              <div onClick={() => { setContent('number2') }} className={`cursor-pointer ${content === 'number2' ? 'scale-110 transition duration-150 ease-in-out' : 'opacity-30 hover:opacity-90'}`}>
                <ServicesCard image={"/assets/digitalmarketing.jpeg"} service='Digital Marketing' />
              </div>
              <div onClick={() => { setContent('number3') }} className={`cursor-pointer ${content === 'number3' ? 'scale-110 transition duration-150 ease-in-out' : 'opacity-30 hover:opacity-90'}`}>
                <ServicesCard image={"/assets/vtwebdesign.jpeg"} service='Virtual Tour Web Design' />
              </div>
              <div onClick={() => { setContent('number4') }} className={`cursor-pointer ${content === 'number4' ? 'scale-110 transition duration-150 ease-in-out' : 'opacity-30 hover:opacity-90'}`}>
                <ServicesCard image={"/assets/virtualtraining.jpeg"} service='Virtual Training' />
              </div>

            </div>
            <div className="serviceContent">

              {content === 'number1'
                ?
                <div className="serviceContentText">
                  We at True Dimensions provide<strong> Virtual Tour Services </strong> through which the businesses can give potential customers an immersive, interactive experience that allows them to learn more about the business and its offerings, and make informed decisions about booking a stay or enrolling in a program. Overall, virtual tour are the digital asset which can be used in various formats to promote businesses online.<br /><br />
                  Virtual tours can be a helpful marketing tool for infrastructure-dependent businesses, as they allow potential customers to explore the establishment and its facilities remotely, without having to physically visit the site.
                  By providing a virtual tour, businesses can give potential customers an immersive, interactive experience that allows them to learn more about the business and its offerings, and make informed decisions about booking a stay or enrolling in a program
                </div>
                : content === 'number2'
                  ?
                  <div className="serviceContentText">
                    We at True Dimensions provide <strong> Virtual Tour Services </strong> through which the businesses can give potential customers an immersive, interactive experience that allows them to learn more about the business and its offerings, and make informed decisions about booking a stay or enrolling in a program. Overall, virtual tour are the digital asset which can be used in various formats to promote businesses online.
                  </div>
                  :
                  content === 'number3'
                    ?

                    <div className="serviceContentText">
                      We at True Dimensions provide<strong> Virtual Tour Web-Design Services </strong>where in website is completely built in with the Virtual Platform allowing users not only to get immersive experience but also use this platform to use as a virtual website.

                      For example, A virtual website for a hotel would have a booking facility of rooms, banquet halls, receptions, party halls, concerts, dining etc....
                    </div>
                    :
                    content === 'number4'
                      ?

                      <div className="serviceContentText">
                        We at true dimensions provide<strong> Virtual Training Platforms</strong> for industries, businesses, educational institutions for training of their workforce, employees, and students. Virtual training platforms are cost effective and impactful solution for in-house training programs.

                        We are working towards digitization of training through incorporating latest technologies such as, virtual reality, augmented reality and artificial intelligence.
                      </div>
                      : null}
            </div>

            <div className="address">Address</div>
            <div className="address-container">
              <img src={"/assets/clite.jpeg"} alt="image" className="address-image" />
              <div className="absolute md:justify-center text-md text-center md:text-4xl font-semibold uppercase">C-lite building, KLE Technological University </div>
            </div>

          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default About;
