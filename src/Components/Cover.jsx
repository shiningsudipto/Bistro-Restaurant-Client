import { Parallax } from 'react-parallax';
const Cover = ({ img, title, subTitle }) => {
    return (

        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={img}
            bgImageAlt="the dog"
            strength={-200}
        >

            <div>
                <div className="hero lg:h-[600px]">
                    <div className="bg-black bg-opacity-60 hero-content text-center text-neutral-content w-2/3 p-16">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                            <p className="mb-5 uppercase text-2xl">{subTitle}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;