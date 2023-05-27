
const UnderLineBtn = ({ btnText }) => {
    return (
        <div>
            <div className="text-center mt-6">
                <button className="border-b-4 rounded-xl bg-transparent p-4 border-yellow-600 uppercase font-semibold text-yellow-600 hover:bg-slate-900">{btnText}</button>
            </div>
        </div>
    );
};

export default UnderLineBtn;