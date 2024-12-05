import react from 'react';
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';

const Thumb = ({location}) => {
    return (
        location.map((location) => (
        <Link to = {`/Loc/${location.id}`} className='thumb' key={location.id}>
            <img src = {location.cover} alt={location.title}/>
            <h3>{location.title}</h3>
        </Link>
    ))
    )
};


Thumb.propTypes = {
      location : PropTypes.array.isRequired  
}

export default Thumb;