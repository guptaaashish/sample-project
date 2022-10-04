const HomePage = () => {
    const doctorDetails = [
        { img: "/star.png", value: "4.7", title: "Rating" },
        { img: "/bag.png", value: "4+", title: "Year Exp" },
        { img: "/human.png", value: "5k+", title: "Patients" },
        { img: "/awards.png", value: "15+", title: "Awards" }
    ]
    const ratings = [
        { logo: "/realself-inc-logo.svg", rating: "8 Out of 10", description: "Ratings On RealSelf By Our 5768 Patients." },
        { logo: "/seek.svg", rating: "4.4 Out of 5", description: "Ratings On RealMDs By Our 6587 Patients." },
        { logo: "/heart.svg", rating: "8.5 Out of 10", description: "Ratings On Healthgrades By Our 8345 Patients." },
        { logo: "/vitals.svg", rating: "4 Out of 5", description: "Ratings On Vitals By Our 9945 Patients." }
    ]
    return (
        <>
            <div className="flex flex-col gap-8">
                <div className="flex justify-between items-center ">
                    <div >
                        <h1 className="text-[32px]">Hello,  <span className="text-[#62BBCB]">Charles Miller</span></h1>
                    </div>
                    <div >
                        <img className=" rounded-lg" src="/Pexels Photo by Edgar Serrano.png" alt="image" />
                    </div>
                </div>

                <div className="flex items-center w-full border-[#62BBCB] border-2 h-[44px] p-[6px] rounded-lg" >
                    <input className="w-full bg-transparent" placeholder="Search Doctor" />
                    <button className="bg-[yellow] h-[34px] w-[58px] rounded-xl"><img className="px-4" src="/Layer 2.png" /></button>
                </div>

                <div className="bg-[#62BBCB] rounded-lg  flex justify-between items-center">
                    <div className="p-[10px] flex flex-col gap-4 ml-2">
                        <div className="flex flex-col ">
                            <div><h1 className="text-[white] font-bold text-bold text-[20px]">Explore Top Doctors</h1></div>
                            <div><p className="text-[12px] ">with rating and reviews</p></div>
                        </div>
                        <div>
                            <button className="bg-[yellow] rounded-lg h-[34px] w-[58px]"><img className="px-4" src="/Arrow.png" /></button>
                        </div>
                    </div>
                    <div>
                        <img className="mt-[-25px] h-[180px]" src="/banner-img.png" />
                    </div>
                </div>
                <div>
                    <h1>Doctor of the month</h1>
                    <div className="border-2 border-[#62BBCB] w-full p-4 rounded-lg flex flex-col gap-4 ">
                        <div className="flex gap-2 items-center">
                            <div>
                                <img src="/doctor.png" alt="doctor" />
                            </div>
                            <div>
                                <div><h1 className="text-[#62BBCB] font-bold text-[20px]">Dr. John Gibbs</h1></div>
                                <div>BDS, MDS</div>
                                <div>Dental Surgeon</div>
                            </div>
                        </div>
                        <div className="flex justify-around">
                            {doctorDetails.map((item, id) => {
                                return (
                                    <>
                                        <div className="flex flex-col items-center gap-[2px]" key={id}>
                                            <div className="h-[40px] w-[40px] bg-[#62BBCB] rounded-lg flex justify-center items-center">
                                                <img src={item.img} />
                                            </div>
                                            <h3 className="text-[#62BBCB]">{item.value}</h3>
                                            <p className="text-[12px]">{item.title}</p>
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="bg-section-highlighted rounded-lg p-5">
                    <h1 className="text-black font-extrabold text-[20px] leading-[25px] pb-2">Ratings</h1>
                    <div className="flex flex-col gap-4 py-2">
                        {ratings.map((rating, index) => {
                            return (
                                <>
                                    <div className="flex gap-4" key={`rating-${index}`}>
                                        <div className="flex justify-center items-center bg-yellow rounded-lg h-[62px] w-[71px]"><img src={rating.logo} alt="company-logo" /></div>
                                        <div className="flex flex-col justify-center gap-1">
                                            <div className="text-[white] font-extrabold text-[16px] leading-5">{rating.rating}</div>
                                            <div className="text-black text-[10px] font-extrabold leading-[13px]">{rating.description}</div>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
export default HomePage;