import React from "react";

const Weather = props => (
  <div className="weather__info">
    {props.city &&
      props.country && (
        <p className='weather__key'>
          Location:
          <span className='weather__value'> {props.city}, {props.country} </span>
        </p>
      )}

    {props.temperature && (
      <p className='weather__key'>
        Temperature: 
        <span className='weather__value'> {Math.round(9 / 5 * (props.temperature - 273) + 32)}&deg;F, {(props.temperature - 273.15).toFixed(2)}&deg;C, {props.temperature.toFixed(2)}&deg;K</span>
      </p>
    )}

    {props.min_temp && (
      <p className='weather__key'>
        Minimum Temp:
        <span className='weather__value'> {Math.round(9 / 5 * (props.min_temp - 273) + 32)}&deg;F, {(props.min_temp - 273.15).toFixed(2)}&deg;C, {props.min_temp.toFixed(2)}&deg;K</span>
      </p>
    )}

    {props.max_temp && (
      <p className='weather__key'>
        Maximum Temp:
        <span className='weather__value'> {Math.round(9 / 5 * (props.max_temp - 273) + 32)}&deg;F, {(props.max_temp - 273.15).toFixed(2)}&deg;C, {props.max_temp.toFixed(2)}&deg;K </span>
      </p>
    )}

    {props.humidity && (
      <p className='weather__key'>
        Humidity:
        <span className='weather__value'> {props.humidity}</span>
      </p>
    )}

    {props.description && (
      <p className='weather__key'>
        Condition:
        <span className='weather__value'> {props.description}</span>
      </p>
    )}

    {props.windSpeed && (<p className='weather__key'>
        Wind Speed:<span className='weather__value'> {Math.round(props.windSpeed.toFixed(1))} mph</span>
      </p>
    )}

    {props.error && 
    <p className='weather__error'>
        {props.error}
    </p>
    }

  </div>
);

export default Weather;
