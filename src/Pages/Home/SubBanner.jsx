import bgImg from '../../assets/home/chef-service.jpg'
const SubBanner = () => {
    return (
        <div className='hero p-20 my-14' style={{ backgroundImage: `url(${bgImg})` }}>
            <div className='hero-overlay bg-opacity-60 py-12 px-24 text-white rounded-xl text-center'>
                <h2 className='text-3xl font-semibold mb-4'>Bistro Boss</h2>
                <p>A bistro or bistrot, is in its original Parisian incarnation, a small restaurant, serving moderately priced simple meals in a modest setting.
                    The etymology is unclear. The Dictionnaire de l'Académie française dates the word from the 19th century term, bistro, "innkeeper", and suggests that it may be linked to the Poitevin word "bistraud", or to "bistrouille" The word was used to describe a drinking establishment, estaminet or small popular local restaurant where alcoholic beverages were served. This is also what Emile Zola called "assommoir" in his famous novel.</p>
            </div>
        </div>
    );
};

export default SubBanner;