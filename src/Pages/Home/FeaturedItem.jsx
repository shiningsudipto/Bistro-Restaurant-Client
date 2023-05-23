import SectionTitle from '../../Components/SectionTitle';
import img1 from '../../assets/home/featured.jpg'
const FeaturedItem = () => {
    return (
        <div style={{ backgroundImage: `url(${img1})`, backgroundSize: 'cover' }} className=' my-14 bg-fixed'>
            <div className='hero-overlay p-16 bg-opacity-40 text-white'>
                <SectionTitle
                    subHeading="Check it out"
                    heading="from our menu"
                ></SectionTitle>
                <div className='flex items-center'>
                    <img src={img1} className='lg:w-[600px]' alt="" />
                    <div className='space-y-5 text-white ms-3'>
                        <p className='text-xl'>March 20, 2023</p>
                        <p className='text-xl'>WHERE CAN I GET SOME?</p>
                        <p>These food quality attributes include appearance, including size, shape, gloss, colour, and consistency, texture, flavour, and nutritional content.</p>
                        <div className="text-center mt-6">
                            <button className="border-b-4 rounded-xl bg-transparent p-4 border-black uppercase">Read More</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FeaturedItem;