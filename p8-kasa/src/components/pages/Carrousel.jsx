import React, { useState } from 'react';

const Carrousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="carrousel-container" style={{ position: 'relative', width: '100%', maxWidth: '600px', margin: '0 auto' }}>
            <img
                src={images[currentIndex]}
                alt={`Image ${currentIndex + 1}`}
                style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '8px',
                    objectFit: 'cover',
                    transition: 'opacity 0.5s ease',
                }}
            />
            
            {/* Boutons pour naviguer */}
            <button
                onClick={goToPrevious}
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '10px',
                    transform: 'translateY(-50%)',
                    background: 'rgba(0, 0, 0, 0.5)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    padding: '10px',
                    cursor: 'pointer',
                    zIndex: 10,
                }}
            >
                ◁
            </button>

            <button
                onClick={goToNext}
                style={{
                    position: 'absolute',
                    top: '50%',
                    right: '10px',
                    transform: 'translateY(-50%)',
                    background: 'rgba(0, 0, 0, 0.5)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    padding: '10px',
                    cursor: 'pointer',
                    zIndex: 10,
                }}
            >
                ▷
            </button>
        </div>
    );
};

export default Carrousel;
