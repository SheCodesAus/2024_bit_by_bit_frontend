import "../../index.css";

function AboutPage() {
    return (
            <div className="px-10 flex flex-col items-center">
                <div className="w-full bg-white border-t border-b p-4 shadow-sm" style={{ borderColor: '#00bcd4' }}>
                    <h1 className="text-4xl font-bold text-slate-800 underline text-center mb-5">ABOUT US</h1>
                </div>

                <div className="flex flex-col items-center w-full">
                    <br/>
                    <p>Welcome to !</p>
                </div>
                <br/>
            </div>
    );
}

export default AboutPage;