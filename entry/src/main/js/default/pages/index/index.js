import fetch from '@system.fetch';
import item4 from '../../i18n/weather_api.json';
export default {
    data: {
    },
    weather_api(e){
        var data4 = JSON.stringify(item4);
        this.weather_api_input = JSON.parse(data4);
        //console.log(this.weather_api_input[0].api_key);
        //const url =  "https://api.openweathermap.org/data/2.5/weather?lat="+this.weather_api_input[0].latitude+"&lon="+this.weather_api_input[0].longitude+"&appid="+this.weather_api_input[0].api_key;
        //console.log(url);

        let data;
        fetch.fetch({
            url :  "https://api.openweathermap.org/data/2.5/weather?lat="+this.weather_api_input[0].latitude+"&lon="+this.weather_api_input[0].longitude+"&appid="+this.weather_api_input[0].api_key,
            responseType:"json",
            method: 'GET',
            success:function(resp)
            {
                data = JSON.parse(resp);
            },
            fail:(data,code) => {
                console.log("fail data: "+ JSON.stringify(data) + " fail code: "+ code );
            },
            complete: ()=>{
                this.weather = data.weather.main ;
                console.log("Weather :"+data.weather.main)
            }
        })

        //console.log(this.weather_api_output);

        this.weather_icon = "http://openweathermap.org/img/w/"+"50n"+".png";

    },
}
