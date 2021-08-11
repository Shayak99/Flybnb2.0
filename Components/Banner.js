

function Banner() {
    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
            <img className="w-full h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]" src="https://a0.muscache.com/im/pictures/57b9f708-bb12-498c-bc33-769f8fc43e63.jpg"/>            
        <div className="absolute top-1/2 w-full text-center">
            <h3 className="text-sm sm:text-lg font-bold">Not Sure Where To Go ? Perfect.</h3>
            <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full 
            font-bold my-3 hover:shadow-xl active:scale-90 transition duration-300">
                I'm Flexible</button>
        </div>
        </div>
    )
}

export default Banner
