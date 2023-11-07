import React from 'react'
import AC from "./images/air_conditioner.jpg"
import TV from "./images/smartTV.jpg"
import Fridge from "./images/refrigerator.jpg"

function Carousel() {
  return (
    <div><div id="carouselExampleIndicators" class="carousel slide">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner" style={{height: "400px"}}>
      <div class="carousel-item active">
        <img src={TV} class="w-100,h-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src={AC} class=" w-100,h-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src={Fridge} class="w-100, h-100" alt="..."/>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div></div>
  )
}

export default Carousel