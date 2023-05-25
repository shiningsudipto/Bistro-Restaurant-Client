
const UnderLineBtn = ({ btnText }) => {
    return (
        <div>
            <div className="text-center mt-6">
                <button className="border-b-4 rounded-xl bg-transparent p-4 border-black uppercase">{btnText}</button>
            </div>
        </div>
    );
};

export default UnderLineBtn;