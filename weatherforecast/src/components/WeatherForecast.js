import Card from './Card'

function WeatherForecast(props){

    return(<>
        {props.data.map((item, index) => <Card item={item} key={index} />)}
    </>)
}

export default WeatherForecast