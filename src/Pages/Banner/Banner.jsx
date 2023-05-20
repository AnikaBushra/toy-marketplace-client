

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full max-h-screen">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://img.freepik.com/free-photo/high-angle-siblings-playing-with-toys_23-2148355142.jpg?w=740&t=st=1684588696~exp=1684589296~hmac=0e74eaf9f63af12c2c323a52e3c42635abde62bacc21de9b739e5d45852c07d9" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2  top-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full h-full items-center p-10">

                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <div>
                            <div className="text-5xl text-center text-white ">
                                <p>Kids Are The Best </p>
                                <p>Explorer In The World</p>
                            </div>
                            <p className="text-center text-2xl my-4 text-white">Fun Toys For Your Kids</p>
                        </div>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://img.freepik.com/free-vector/pink-frame-with-children-toys_1308-27192.jpg?w=360&t=st=1684588365~exp=1684588965~hmac=5e821518890900f1cf9837dfc60695ed4adb18ea2eb85171b17011febc5961b6" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2  top-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full h-full items-center  p-10">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <div>
                            <div className="text-5xl text-center text-white ">
                                <p>Kids Are The Best </p>
                                <p>Explorer In The World</p>
                            </div>
                            <p className="text-center text-2xl my-4 text-white">Fun Toys For Your Kids</p>
                        </div>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://img.freepik.com/free-vector/kids-playground-park-with-rainbow-sky-daytime-cartoon-style_1308-50390.jpg?w=360&t=st=1684514237~exp=1684514837~hmac=2273b8dc49b63224c2a52e5cb6b055ee7f0d5c4e978938111a8854d39e3adfc5" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2  top-1/2 bg-gradient-to-r from-[#3d3737] to-[rgba(21, 21, 21, 0)] w-full h-full items-center  p-10">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <div>
                            <div className="text-5xl text-center text-white ">
                                <p>Kids Are The Best </p>
                                <p>Explorer In The World</p>
                            </div>
                            <p className="text-center text-2xl my-4 text-white">Fun Toys For Your Kids</p>
                        </div>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;