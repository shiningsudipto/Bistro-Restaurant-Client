
const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="w-4/12 text-center mx-auto my-14">
            <h3 className="text-[#D99904] mb-3 text-xl">---{subHeading}---</h3>
            <h2 className="text-4xl font-semibold border-y-4 py-4 uppercase">{heading}</h2>
        </div>
    );
};

export default SectionTitle;