import react from 'react';
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';

const Thumb = ({location}) => {
    return (
        location.map((location) => (
        <Link to = {`/Loc/${location.id}`} className='thumb' key={location.id}>
            <div className="logementCard" style={{backgroundImage:`url(${location.cover})`}}>
             <div className='logementCardOver'><h2>{location.title}</h2></div>
            </div>
        </Link>
    ))
    )
};


Thumb.propTypes = {
      location : PropTypes.array.isRequired  
}

export default Thumb;