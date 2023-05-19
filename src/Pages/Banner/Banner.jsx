

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full max-h-screen">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://img.freepik.com/free-vector/playground-park-scene-with-equipment_1308-36530.jpg?w=740&t=st=1684514087~exp=1684514687~hmac=6fb1fa38d9bbab3cded35805c04aef8e09b98ae727b90977ae2c424c97a005f4" className="w-full " />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://img.freepik.com/free-vector/kid-zone-flat-design-background_52683-77168.jpg?w=740&t=st=1684514003~exp=1684514603~hmac=a1c623019cdcdcac412ce7485f57c75a9fea61202a02608d718dd32972ff321c" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://img.freepik.com/free-vector/kids-playground-park-with-rainbow-sky-daytime-cartoon-style_1308-50390.jpg?w=360&t=st=1684514237~exp=1684514837~hmac=2273b8dc49b63224c2a52e5cb6b055ee7f0d5c4e978938111a8854d39e3adfc5" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;