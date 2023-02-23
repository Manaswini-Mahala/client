import React, { useState } from 'react';
// import {useParams} from 'react-router-dom';
import './Apps.scss';
import List from '../../comps/List/List';
import { useParams } from 'react-router-dom';
import './../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import useFetch from '../../hooks/useFetch';
import Container from 'react-bootstrap/Container';

export default function Apps() {

  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(50);
  const [sort, setSort] = useState("");
  const [sort2, setSort2] = useState("");
  const [selectedSubCats, setSelectedSubCats] = useState([])


  const { data, loading, error } = useFetch(`sub-categories?[filters][categories][id][$eq]=${catId}`)

  // console.log(data);

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(isChecked 
      ? [...selectedSubCats, value] 
      : selectedSubCats.filter((item) => item !== value)
    );
};

console.log(selectedSubCats);

// console.log(param);
return (
  // <Container className="container-item">
  <div className='apps'>
    <div className="left">
      <div className="filterItem">
        <h2>Pricing</h2>

        {data?.map((item) => (
          <div className="inputItem" key={item.id}>
            <input type="checkbox" id="1" value={item.id} onChange={handleChange} />
            <label htmlFor={item.id}>{item.attributes.title}</label>
          </div>
        ))}

      </div>

      <div className="filterItem">
        <h2>Sort by Ratings</h2>
        <div className="inputItem">
          <input type="radio" id="asc" name="rating" onChange={e => setSort("asc")} />
          <label htmlFor="acs">Ratings (Lowest first)</label>
        </div>
        <div className="inputItem">
          <input type="radio" id="desc" name="rating" onChange={e => setSort("desc")} />
          <label htmlFor="desc">Ratings (Highest first)</label>
        </div>
      </div>

      <div className="filterItem">
        <h2>Sort by Price</h2>
        <div className="inputItem">
          <input type="radio" id="asc" name="price" onChange={e => setSort2("asc")} />
          <label htmlFor="acs">Price (Lowest first)</label>
        </div>
        <div className="inputItem">
          <input type="radio" id="desc" name="price" onChange={e => setSort2("desc")} />
          <label htmlFor="desc">Price (Highest first)</label>
        </div>
      </div>

      <div className="filterItem">
        <h2>Price</h2>
        <div className="inputItem">
          <span>0</span>
          <input type="range" min={0} max={50} onChange={(e) => setMaxPrice(e.target.value)} />
          <span>{maxPrice}</span>

        </div>
      </div>



    </div>
    <div className='right'>

      <h2></h2>
      <div className='row'>
     

        <List catId={catId} maxPrice={maxPrice} sort={sort} sort2={sort2} subCats={selectedSubCats} />



      </div>

    </div>

   

    

    

  </div>

  // </Container>
)
}
