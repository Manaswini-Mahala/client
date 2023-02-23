import React from 'react';
import './List.scss';
import Card from '../Card/Card';
import './../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import useFetch from '../../hooks/useFetch';

const List = ({subCats, maxPrice, sort, sort2, catId}) => {


    // const { data, loading, error } = useFetch(
    //     `/items?populate=*&[filters][categories][id]=${catId}${subCats.map(
    //         (item)=>`&[filters][sub_categories][id][$eq]=${item}`
    //         )}&[filters][price][$lte]=${maxPrice}`
    // );

    let reqURL = `/items?populate=*&[filters][categories][id]=${catId}${subCats.map(
        (item)=>`&[filters][sub_categories][id][$eq]=${item}`
        )}&[filters][price][$lte]=${maxPrice}`

    if((sort==="")&&(sort2!=="")){
        reqURL = reqURL + `&sort=price:${sort2}`;
    }else if((sort!=="")&&(sort2!=="")){
        reqURL = reqURL + `&sort=rating:${sort}&sort=price:${sort2}`
    }else if((sort!=="")&&(sort2==="")){
        reqURL = reqURL + `&sort=rating:${sort}`
    }

    const { data, loading, error } = useFetch(reqURL);



    console.log(data);




    return (
        <div className='list'>
            {loading
                ? "loading"
                : data?.map(item => (
                    <Card item={item} key={item.id} />
                ))}
        </div>
    )
}

export default List