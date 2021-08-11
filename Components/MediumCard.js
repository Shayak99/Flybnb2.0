export default function MediumCard(props) {
    return (
        <div className="cursor-pointer hover:scale-105
        transition duration-300 ease-out">
            <div className="relative h-80 w-80">
            <img className="rounded-2xl" src={props.img}/>
            </div>
            <h3 className="text-2xl mt-3">{props.title}</h3>
        </div>
    )
}
