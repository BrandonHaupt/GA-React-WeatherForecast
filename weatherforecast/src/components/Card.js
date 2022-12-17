
function Card({item, index}){
    return(<>
        <div className="card">
            <img src={item.img} alt={item.condition} />
            <p><strong>Conditions:</strong> {item.condition}</p>
            <p><strong>Time:</strong> {item.time}</p>
        </div>
    
    </>)
}

export default Card