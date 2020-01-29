import React from 'react';
import propsType from 'prop-types';


function Movie({id,year,title,summary,poster}){
return<h5>{id}<br/>{title}</h5>
}

Movie.prototype = {
    id:propsType.number.isRequired,
    year:propsType.number.isRequired,
    title:propsType.string.isRequired,
    summary:propsType.string.isRequired,
    poster:propsType.string.isRequired
}
export default Movie;