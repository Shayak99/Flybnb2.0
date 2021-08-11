function LargeCard(props) {
    return (
        <section className="relative py-16 cursor-pointer">
            <div className="relative cursor-pointer h-90 min-w-[290px]">
                <img src={props.img} className="rounded-2xl" />
            </div>
            <div className="absolute top-32 left-12">
                <h3 className="text-4xl mb-3 w-64">{props.title}</h3>
                <p>{props.description}</p>

                <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5">{props.buttonText}</button>
            </div>
        </section>
    )
}

export default LargeCard
