import './index.scss';
import React from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import {MapContainer,Marker,TileLayer,Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

const Contact= () => {
    return (
        <>

        <div className='about-page'>
        <div className='container'>
        <div class="left-side">
     <h1><AnimatedLetters strArray={"Contact Me".split('')} starIdx={1}/></h1>
    <div className='contact-form'>

    
    <form>
        <div className='form-row'>
            <input type="text" name="name" placeholder='Name'></input>
            <input type="email" name="email" placeholder='Email'></input>
        </div>
        <div className='form-row'>
            <textarea name="message " placeholder='Message'></textarea>
        </div>
        <div className='form-row'>
        <input type="submit" className="form-submit" ></input>
        </div>
    </form>
    </div>
    </div>
    <div class="right-side">

    <div className='map-info'>
    <p>Based in Milton Keynes <br/>
    United Kingdom.<br/>
    <span> adjeley60@gmail.com</span></p>

    </div>

<div className='map-wrapper'>
    <MapContainer center={[52.038137,-0.7751537]} zoom={11}>
    <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
    <Marker position={[52.038137,-0.7751537]} icon={DefaultIcon}>
    <Popup>
        It all starts with a line of Code!!!
    </Popup>
</Marker>
    </MapContainer>
</div>
    </div>
    </div>
    </div>
     <Loader type="ball-scale" color='#fc4cd3' width={500} />
    </>
    );
}

export default Contact;