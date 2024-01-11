import React from 'react'

export default function BookMy() {
  return (
    <div>
   <div id="carouselWithIndicators" class="carousel slide" data-bs-ride="carousel">
  <ol class="carousel-indicators text-decoration-none">
    <li data-bs-target="#carouselWithIndicators" data-bs-slide-to="0" class="active"></li>
    <li data-bs-target="#carouselWithIndicators" data-bs-slide-to="1"></li>
    <li data-bs-target="#carouselWithIndicators" data-bs-slide-to="2"></li>
    <li data-bs-target="#carouselWithIndicators" data-bs-slide-to="3"></li>
    <li data-bs-target="#carouselWithIndicators" data-bs-slide-to="4"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://assetscdn1.paytm.com/images/catalog/view_item/2027329/1694055226012.jpeg?format=webp&imwidth=1024" class="d-block w-100 border border-secondary border-5" alt="slide 1"/>
    </div>
    <div class="carousel-item">
      <img src="https://assetscdn1.paytm.com/images/catalog/view_item/1968590/1692962571451.jpg?format=webp&imwidth=1024" class="d-block w-100 border border-5 border-secondary" alt="slide 2"/>
    </div>
    <div class="carousel-item">
      <img src="https://assetscdn1.paytm.com/images/catalog/view_item/1992891/1693391040391.jpg?format=webp&imwidth=1024" class="d-block w-100 border border-5 border-secondary" alt="slide 3"/>
    </div>
    <div class="carousel-item">
      <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1693899252341_inoxdesktop.avif" class="d-block w-100 border border-5 border-secondary" alt="slide 4"/>
    </div>
    <div class="carousel-item">
      <img src="https://assetscdn1.paytm.com/images/catalog/view_item/1858819/1690531009143.jpg?format=webp&imwidth=1024" class="d-block w-100 border border-5 border-secondary" alt="slide 5"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselWithIndicators" role="button" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselWithIndicators" role="button" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </a>
</div>
<div class="container"><br></br>      
<div><h1>Recommended Movies</h1></div>
<div class="card-group container">
    <div class="card border border-5 border-light">
      <a href="/chandramuki">
    <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/chandramukhi-2-et00341436-1695724082.jpg" class="card-img-top border border-5" alt="card-group-image"/></a>
    <div class="card-footer border border-5">
    <small class="text-dark fw-bolder px-4">Chandramukhi 2</small><br></br>
    <small class="text-muted px-4">Comedy/Horror</small>
    </div>
  </div>
  <div class="card border border-5 border-light ms-3">
    <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/mark-antony-et00367366-1692281157.jpg" class="card-img-top border border-5" alt="card-group-image"/>
    <div class="card-footer border border-5">
    <small class="text-dark fw-bold px-4">Mark Antony</small><br></br>
    <small class="text-muted px-4">Sci-Fi/Thriller</small>
    </div>
  </div>
  <div class="card border border-5 border-light ms-3">
    <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/dd-returns-et00364543-1689578736.jpg" class="card-img-top border border-5" alt="card-group-image"/>
    <div class="card-footer border border-5">
    <small class="text-dark fw-bold px-4">DD Returns</small><br></br>
    <small class="text-muted px-4">Horror/Comedy</small>
    </div>
  </div>
  <div class="card border border-5 border-light ms-3">
    <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/jawan-et00330424-1693892482.jpg" class="card-img-top border border-5" alt="card-group-image"/>
    <div class="card-footer border border-5">
    <small class="text-dark fw-bold px-5">Jawan</small><br></br>
    <small class="text-muted px-4">Action/Thriller</small>
    </div>
    </div>
    <div class="card border border-5 border-light ms-3">
    <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/iraivan-et00365489-1690444968.jpg" class="card-img-top border border-5" alt="card-group-image"/>
    <div class="card-footer border border-5">
    <small class="text-dark fw-bold px-5">Iraivan</small><br></br>
    <small class="text-muted px-4">Crime/Thriller</small>
    </div>
    </div>
    </div>
</div>

    </div>
  )
}
