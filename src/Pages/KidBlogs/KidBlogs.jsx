
const KidBlogs = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/little-girl-playing-with-toys-living-room_329181-9334.jpg?size=626&ext=jpg&ga=GA1.2.1941617285.1627660604&semt=ais)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center w-2/3 flex flex-col">
                    <h1 className="text-3xl text-white">Recent Blogs</h1>
                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="text-white text-left">
                                <img src="https://img.freepik.com/free-photo/little-girl-playing-with-toys-living-room_329181-9334.jpg?size=626&ext=jpg&ga=GA1.2.1941617285.1627660604&semt=ais" alt="kids playing" />
                                <div>
                                    <h2 className="text-3xl text-bold my-4"><i>Activities Improves Minds</i></h2>
                                    <p>Kid toy cars are timeless playthings that have captured the hearts and imaginations of children for generations. These miniature replicas of real automobiles bring joy, excitement, and a sense of adventure to the little ones who play with them.</p>
                                    <button className="btn  btn-accent my-2">Read More</button>
                                </div>
                            </div>
                            <div className=" text-white text-left">
                                <img src="https://img.freepik.com/free-photo/child-having-fun-during-playtime_23-2149382686.jpg?size=626&ext=jpg&ga=GA1.2.1941617285.1627660604&semt=ais" alt="kids playing" />
                                <div>
                                    <h2 className="text-3xl text-bold my-4"><i>Weekly Reader Zone</i></h2>
                                    <p>One of the most appealing aspects of toy cars is their ability to spark creativity and encourage imaginative play. Children often find themselves in a world of make-believe, zooming around in their toy vehicles, pretending to be race car drivers,</p>
                                    <button className="btn  btn-accent  my-2">Read More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KidBlogs;