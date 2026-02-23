import './BikeSkeleton.css'

function BikeSkeleton() {
    return (
        <>
            {Array.from({ length: 8 }).map((_, index) => (
                <div key={index} className="bike-card-container skeleton">
                    <div className='img load-animate' />
                    
                    <div className="description-container">
                        <div>
                            <p className="bike-name load-animate">
                               0 
                            </p>
                            <p className="bike-number load-animate">
                                0
                            </p>
                        </div>

                        <div>
                            <p className="rent-period load-animate">
                             0   
                            </p>
                            <p className="bike-price load-animate">
                               0 
                            </p>
                        </div>

                        <button className='load-animate'>
                            0
                        </button>
                    </div>
                </div>
            ))}
        </>
    )
}

export default BikeSkeleton;