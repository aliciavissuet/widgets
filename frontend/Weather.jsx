import React from 'react';

class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: {
                latitude:37,
                longitude:122,
                city: 'San Francisco'
            },
            currentWeather: '',
            zip:94107
        };
        this.getCurrentLocation = this.getCurrentLocation.bind(this);
        this.updateLocation = this.updateLocation.bind(this);
        this.handleZipChange = this.handleZipChange.bind(this);
        this.getWeather = this.getWeather.bind(this);
        this.getWeatherZip = this.getWeatherZip.bind(this);
    
    }
    getWeather(){
        let weatherUrl;
        const apiKey = '9abaeb396dda107176d85da618ec359d';
        weatherUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${this.state.location.latitude}&lon=${this.state.location.longitude}&APPID=${apiKey}`;
        
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = () => {
            //ready state of DONE means this is complete
            if (xmlhttp.status === 200 && xmlhttp.readyState === XMLHttpRequest.DONE) {
                const data = JSON.parse(xmlhttp.responseText);
                console.log(data.main.temp);
                let currentWeather = parseInt((data.main.temp - 273.15) * 1.8000 + 32);

                this.setState({ currentWeather});
            }
        };
        
        xmlhttp.open('GET', weatherUrl, true);
        xmlhttp.send();
    }
    
    getCurrentLocation(){
        navigator.geolocation.getCurrentPosition((res) => {
            console.log(res);
            this.setState({location:{
                latitude:parseInt(res.coords.latitude), 
                longitude:parseInt(res.coords.longitude)
            }
            
            });
            this.getWeather();
        });
        
    }
    componentDidMount(){
        this.getCurrentLocation()
    }

    getWeatherZip(){
        let weatherUrl;
        const apiKey = '9abaeb396dda107176d85da618ec359d';
        weatherUrl = `http://api.openweathermap.org/data/2.5/weather?zip=${this.state.zip}&APPID=${apiKey}`;

        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = () => {
            //ready state of DONE means this is complete
            if (xmlhttp.status === 200 && xmlhttp.readyState === XMLHttpRequest.DONE) {
                const data = JSON.parse(xmlhttp.responseText);
                console.log(data.main.temp);
                let currentWeather = parseInt((data.main.temp - 273.15) * 1.8000 + 32);
                this.setState({ currentWeather });
            }
        };

        xmlhttp.open('GET', weatherUrl, true);
        xmlhttp.send();
    }
    
        

    updateLocation(e){
        e.preventDefault();
        fetch(`https://www.zipcodeapi.com/rest/KcZ2vwCg6lGnF3SNeX5U5w3XYCZHF8xeiTYkscBwWxKiG8FjQacq29hdB9hh9X87/info.json/${this.state.zip}/degrees`)
        .then((res)=>{
            console.log(res);
            this.setState({location: {latitude: parseInt(res.lat), longitude: parseInt(res.lng), city: res.city}});
        });
    }

    handleZipChange(e) {
        this.setState({zip: e.target.value});
    }
    
    render() {
        return (
            <div className='weather'>
                <h3>Location: {this.state.zip}</h3>
                <h4>The weather is: {this.state.currentWeather} degrees.</h4>
                <section>
                    <div>
                        <input id="zip" name="zip" type="text" onChange={this.handleZipChange}/>
                        <label>Zip Code</label>
                    </div>
                </section>
                <button id='zip' onClick={this.getWeatherZip}>Get current location weather</button>
            </div>
        );
    }
}

export default Weather;