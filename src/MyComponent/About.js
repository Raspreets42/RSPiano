import React from 'react'
import '../App.css';
import image from "../raspreet.jpg";

export default function About() {
    return (
        <div className="about ">
            <div className="texted">
                <h1 className="my-2 text-center">About</h1>
                <hr />
                <h5 className="text-center">"Music is the wine that fills the cup of silence."</h5>
                <br />
                
                <p><b>Piano</b>, also called <b>pianoforte</b>, French piano or pianoforte, German Klavier, a keyboard musical instrument having wire strings that sound when struck by felt-covered hammers operated from a keyboard. The standard modern piano contains 88 keys and has a compass of seven full octaves plus a few keys.</p>
                <br />
                
                <h6>Mr. Raspreet Singh Pasrija words :</h6>
                
                <p> I had made this <b><i> The RS Piano Website </i></b> which is full responsive and its colour themes are cool. I used an animated headline for Piano. Buttons are used for making piano keys and added two picture both side of pinao. I added <b><i>Sa Re Ga Ma Pa Da Ni Sha</i></b> Audios to different Piano keys to play same as original onces.</p>
                <br />
                
                <p><b><i> About Me :</i></b><br /> I'm a <b><i> BE 3<sup>rd</sup> year student</i></b> studying <b>Computer Science Engineering</b> at <b>Rungta College of Engineering and Technology , Bhilai.</b> I like Programmings and will soon start an Bloging on the Programmings. </p>

                <div className="text-center my-4 crdspace ">
                    <div className="card crd">
                        <img src={image} className="card-img-top" alt="Not Found" />
                        <div className="card-body">
                            <h5 className="card-title crdhead">Raspreet Singh Pasrija</h5>
                            <h5 className="card-text crdhead" >Designed <b><i> The RS Piano Website</i></b></h5>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item crdli"><b>Age : </b>21</li>
                            <li className="list-group-item crdli"><b>Education: </b>Bachelor of Engineering</li>
                            <li className="list-group-item crdli"><b>Project: </b>RS Piano Website</li>
                            <li className="list-group-item crdli"><b>Framework : </b>ReactJs</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}