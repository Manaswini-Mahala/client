import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Item.scss';
import './../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import StarRateIcon from '@mui/icons-material/StarRate';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import useFetch from '../../hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartReducer';
import Container from 'react-bootstrap/Container';
import Star from '../../comps/Star/Star';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Reviews from '../../comps/Reviews/Reviews';

const Item = () => {

  const id = useParams().id;

  const dispatch = useDispatch();

  const { data, loading, error } = useFetch(
    `/items/${id}?populate=*`);


  console.log(data);

  const [open, setOpen] = useState(false);
  
  const clickHandler = () => {

    if (open) {
        setOpen(false)
    }



}



  if (data?.attributes?.reviewContent === null) {

    return (


      <div className='itemApp'>

        <Container className="container-item">

          {loading
            ? "loading"
            : (<><div className="row">
              <div className="col-md-4">

                <div className="left">

                  <div className="image1">
                    <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img?.data?.attributes?.url} alt="" />
                  </div>

                </div>



              </div>

              <div className="col-md-8">

                <div className="right">

                  <div className="description">
                    <h1>{data?.attributes?.title}</h1>
                    <span className='price'>${data?.attributes?.price}</span>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis beatae aliquid doloremque expedita. Tempora dignissimos est neque laboriosam dolor dolores!</p>
                    <span> <Star stars={data?.attributes?.rating} reviews={data?.attributes?.reviews} /></span><br />
                    <button className='btn btn-outline-primary' onClick={() => dispatch(addToCart({
                      id: data.id,
                      title: data.attributes.title,
                      desc: data.attributes.desc,
                      price: data.attributes.price,
                      img: data.attributes.img.data.attributes.url,

                    }))}><AddShoppingCartIcon /> <span>Purchase</span></button>
                  </div>

                  <div className='info'>

                    <div className="row">
                      <div className="col-md-6">

                        <h6>Published by</h6>
                        <p>Microsoft</p>

                        <h6>Released Date</h6>
                        <p>2/21/2018</p>


                      </div>


                      <div className="col-md-6">

                        <h6>Approximate size</h6>
                        <p>12.0 MB</p>

                        <h6>Category</h6>
                        <p>Utility & Tools</p>

                      </div>
                    </div>






                  </div>


                  <div className='feedback'>

                    <h4 className='heading'>Ratings and Reviews</h4>



                    <div className='row'>
                      <div className='col-md-1'>
                        <h2>{data?.attributes?.rating}</h2>
                      </div>
                      <div className='col-md-4'>
                        <p><Star stars={data?.attributes?.rating} /></p>
                        <p>{data?.attributes?.reviews} ratings</p>
                      </div>
                    </div>

                    <p>No reviews yet. Be the first one to review this App!</p>
                    <div onClick={() => setOpen(!open)}><button className='reviewCompButton'>Add review</button></div>
                    {open && <Reviews />}





                  </div>

                </div>

              </div>
            </div>
            </>
            )
          }

        </Container>

      </div >
    )

  }



  else {
    return (


      <div className='itemApp'>

        <Container className="container-item">

          {loading
            ? "loading"
            : (<><div className="row">
              <div className="col-md-4">

                <div className="left">

                  <div className="image1">
                    <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img?.data?.attributes?.url} alt="" />
                  </div>

                </div>



              </div>

              <div className="col-md-8">

                <div className="right">

                  <div className="description">
                    <h1>{data?.attributes?.title}</h1>
                    <span className='price'>${data?.attributes?.price}</span>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis beatae aliquid doloremque expedita. Tempora dignissimos est neque laboriosam dolor dolores!</p>
                    <span> <Star stars={data?.attributes?.rating} reviews={data?.attributes?.reviews} /></span><br />
                    <button className='btn btn-outline-primary' onClick={() => dispatch(addToCart({
                      id: data.id,
                      title: data.attributes.title,
                      desc: data.attributes.desc,
                      price: data.attributes.price,
                      img: data.attributes.img.data.attributes.url,

                    }))}><AddShoppingCartIcon /> <span>Purchase</span></button>
                  </div>

                  <div className='info'>

                    <div className="row">
                      <div className="col-md-6">

                        <h6>Published by</h6>
                        <p>Microsoft</p>

                        <h6>Released Date</h6>
                        <p>2/21/2018</p>


                      </div>


                      <div className="col-md-6">

                        <h6>Approximate size</h6>
                        <p>12.0 MB</p>

                        <h6>Category</h6>
                        <p>Utility & Tools</p>

                      </div>
                    </div>






                  </div>


                  <div className='feedback'>

                    <h4 className='heading'>Ratings and Reviews</h4>



                    <div className='row'>
                      <div className='col-md-1'>
                        <h2>{data?.attributes?.rating}</h2>
                      </div>
                      <div className='col-md-4'>
                        <p><Star stars={data?.attributes?.rating} /></p>
                        <p>{data?.attributes?.reviews} reviews</p>
                      </div>
                    </div>


                    {/* {[data?.attributes].map(item => (




                      item?.reviewContent?.reviews.map(val => (

                        <div className='reviewPerson' key={val.user}>
                          <p className='userName'><PersonOutlineIcon className='personIcon' /> {val.user}</p>
                          <p className='userDate'>{val.date}</p>
                          <p className='userRating'>{val.rating} <Star stars={val.rating} /></p>
                          <p className='userDesc'>{val.description}</p>
                        </div>


                      ))




                    ))} */}

                    {/* <h6>{data?.attributes?.reviewContent.reviews[0].user}</h6> */}


                    <div onClick={() => setOpen(!open)}><button className='reviewCompButton'>View & Add reviews</button></div>
                    {open && <Reviews />}





                  </div>

                </div>

              </div>
            </div>
            </>
            )
          }

        </Container>

      </div >
    )
  }


}

export default Item;