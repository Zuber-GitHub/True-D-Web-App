import React from 'react' 
import styled from "styled-components";

const Container = styled.div`
.container{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  }

  .card{
    position: relative;
    width: 12rem;
    height: 9rem;
    margin: 0.75rem;
    object-fit: cover;
    object-position: center;
  }
  .card-image{
    position: absolute;
    top: 0;
    width: 12rem;
    height: 7rem;
    z-index: 10;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 500ms;
    border-radius: 0.375rem; /* 6px */
  }

  .card:hover .card-image{
    position: absolute;
    transform: translate(-1.5rem, -1.5rem);
  }

  .image{
    border-radius: 0.5rem;
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
  }

  .service-container{
    margin-left: auto;
    margin-right: auto;
    width: 10rem;
    height: 3.5rem;
    margin-top: 2rem;
    object-fit: cover;
    object-position: center;
    resize: both;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 500ms;
    border-radius: 0.375rem; /* 6px */
    background-color: #e0e0e0;
  }

  .card:hover .service-container{
    transform: translate(3.5rem, 3.5rem);
  }

  .service-card{
    font-size: 0.875rem; /* 14px */
    line-height: 1.25rem; /* 20px */
    text-align: center;
    cursor: pointer;
    font-weight: 600;
    }

`

const ServicesCard = ({ image, service }) => {
  return ( 
    <Container>
    <div className="container">
      <div className="card">
        <div className="card-image">
          <img src={image} alt="image" className="image" />
        </div>
        <div className="service-container">
          <div className="service-card">
            {service}<br />
            <span>Click here</span>
          </div>
        </div>
      </div>
    </div>
    </Container>
  )
}

export default ServicesCard