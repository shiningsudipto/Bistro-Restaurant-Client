import img1 from '../../assets/home/homeCard.jpg'
import img2 from '../../assets/home/homeCard1.jpg'
import img3 from '../../assets/home/homeCard2.jpg'
const ChefRecommend = () => {
    return (
        <div className='grid lg:grid-cols-3 gap-8 my-14'>
            <div className="card glass">
                <figure><img src={img1} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Noodles</h2>
                    <p>Noodles are a type of food made from unleavened dough which is either rolled flat and cut, stretched, or extruded, into long strips or strings.</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary">Learn now!</button>
                    </div>
                </div>
            </div>
            <div className="card glass">
                <figure><img src={img2} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Pork Chop Dinner</h2>
                    <p>A pork chop, like other meat chops, is a loin cut taken perpendicular to the spine of the pig and is usually a rib or part of a vertebra.</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary">Learn now!</button>
                    </div>
                </div>
            </div>
            <div className="card glass">
                <figure><img src={img3} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Fish for Lunch</h2>
                    <p>Tender juicy baked fish with lemon cream sauce, all made in ONE baking dish in 15 minutes! The sauce is incredible</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary">Learn now!</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefRecommend;