import React from 'react'

export const Anasayfa = () => {
  return (
    <>
    <br />
    
    <div id="carouselExampleIndicators" className="carousel slide container-fluid"style={{width:"90%"}}>
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>

    
  </div>
  <div className="carousel-inner " >
    <a href="/Hayvan">
    <div className="carousel-item active " >
     
      <img src="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg"  className="d-block w-100"  alt="..."style={{height:600}}/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Hayvan Resimleri</h5>
      </div>
    </div>
    </a>

    <a href="/Doga">
    <div className="carousel-item">
      <img src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_640.jpg" className="d-block w-100" alt="..."style={{height:600}}/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Doğra Resimleri</h5>
      </div>
    </div>
    </a>

    <a href="/Manzara">
    <div className="carousel-item">
      <img src="https://cdn.pixabay.com/photo/2023/06/27/10/51/man-8091933_1280.jpg" className="d-block w-100" alt="..."  style={{height:600}}/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Manzara Resimleri</h5>
      </div>
    </div>
    </a>

    <a href="/Sehir">
    <div className="carousel-item">
      <img src="https://cdn.pixabay.com/photo/2015/02/24/13/23/buildings-647400_640.jpg" className="d-block w-100" alt="..."  style={{height:600}}/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Şehir Resimleri</h5>
      </div>
    </div>
    </a>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<br />



      <div className='row m-0'  >
    
    <div className='columun' style={{justifyContent:'center',alignItems:'center'}}>
          <img
            style={{ width: 400, height: 500 }}
            src="https://cdn.pixabay.com/photo/2023/03/26/10/46/flower-7878054_640.jpg"
            alt=""
          />
          <img
            style={{ width: 400, height: 500 }}
            src="https://cdn.pixabay.com/photo/2023/07/15/07/15/vulture-8128264_640.png"
            alt=""
          />
          <img
            style={{ width: 400, height: 500 }}
            src="https://cdn.pixabay.com/photo/2023/07/03/08/05/turkey-8103602_640.jpg"
            alt=""
          />
        </div>

        <div className="columun">
          <img
            style={{ width: 400, height: 500 }}
            src="https://cdn.pixabay.com/photo/2023/07/04/19/13/stuart-bailey-8106891_640.jpg"
            alt=""
          />
          <img
            style={{ width: 400, height: 500 }}
            src="https://cdn.pixabay.com/photo/2023/04/01/01/28/piano-7891138_640.jpg"
            alt=""
          />
          <img
            style={{ width: 400, height: 500 }}
            src="https://cdn.pixabay.com/photo/2023/06/01/13/12/background-8033597_640.png"
            alt=""
          />
        </div>

        <div className="columun">
          <img
            style={{ width: 400, height: 500 }}
            src="https://cdn.pixabay.com/photo/2023/07/12/18/21/croatia-8123037_640.jpg"
            alt=""
          />
          <img
            style={{ width: 400, height: 500 }}
            src="https://cdn.pixabay.com/photo/2023/07/03/14/36/horse-8104389_640.jpg"
            alt=""
          />
          <img
            style={{ width: 400, height: 500 }}
            src="https://cdn.pixabay.com/photo/2023/06/21/16/26/warnemunde-8079731_640.jpg"
            alt=""
          />
        </div>
        <div className="columun">
          <img
            style={{ width: 400, height: 500 }}
            src="https://cdn.pixabay.com/photo/2023/03/06/14/27/man-7833617_640.jpg"
            alt=""
          />
          <img
            style={{ width: 400, height: 500 }}
            src="https://cdn.pixabay.com/photo/2023/01/01/09/30/lonely-7689797_640.jpg"
            alt=""
          />
          <img
            style={{ width: 400, height: 500 }}
            src="https://cdn.pixabay.com/photo/2023/07/07/17/47/sushi-8113165_640.jpg"
            alt=""
          />
        </div>
        <div className="columun">
          <img
            style={{ width: 400, height: 500 }}
            src="https://cdn.pixabay.com/photo/2023/07/02/22/42/paragliding-8103063_640.jpg"
            alt=""
          />
          <img
            style={{ width: 400, height: 500 }}
            src="https://cdn.pixabay.com/photo/2023/07/11/10/40/tree-frog-8120111_640.jpg"
            alt=""
          />
          <img
            style={{ width: 400, height: 500 }}
            src="https://cdn.pixabay.com/photo/2023/07/08/11/01/czech-republic-8114188_640.jpg"
            alt=""
          />
        </div>

        <div className="columun">
          <img
            style={{ width: 400, height: 500 }}
            src="https://cdn.pixabay.com/photo/2023/07/11/08/50/fireworks-8119898_640.jpg"
            alt=""
          />
          <img
            style={{ width: 400, height: 500 }}
            src="https://cdn.pixabay.com/photo/2023/06/04/15/51/mountains-8040132_640.jpg"
            alt=""
          />
          <img
            style={{ width: 400, height: 500 }}
            src="https://cdn.pixabay.com/photo/2023/07/04/21/22/fritillary-butterfly-8107096_640.jpg"
            alt=""
          />
        </div>

        <div className="columun">
          <img
            style={{ width: 400, height: 500 }}
            src="https://cdn.pixabay.com/photo/2023/07/05/04/45/european-shorthair-8107433_640.jpg"
            alt=""
          />
          <img
            style={{ width: 400, height: 500 }}
            src="https://cdn.pixabay.com/photo/2023/06/04/23/47/rufus-8041082_640.jpg"
            alt=""
          />
          <img
            style={{ width: 400, height: 500 }}
            src="https://cdn.pixabay.com/photo/2023/05/14/09/39/boho-7992342_640.jpg"
            alt=""
          />
        </div>
        <div className="columun">
          <img
            style={{ width: 400, height: 500 }}
            src="https://cdn.pixabay.com/photo/2023/06/10/21/23/flower-8054861_640.jpg"
            alt=""
          />
          <img
            style={{ width: 400, height: 500 }}
            src="https://cdn.pixabay.com/photo/2023/06/22/02/25/motocross-8080377_640.jpg"
            alt=""
          />
          <img
            style={{ width: 400, height: 500 }}
            src="https://cdn.pixabay.com/photo/2023/06/28/08/13/public-speaking-8093767_640.png"
            alt=""
          />
        </div>
      </div>
      <br />
      <br />

    </>
  )
}
