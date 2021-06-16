import React from 'react'
import image from '../tunes/innerpic1.png';
import w1 from '../tunes/sa.mp3';
import w2 from  "../tunes/re.mp3";
import w3 from  "../tunes/ga.mp3";
import w4 from  "../tunes/ma.mp3";
import w5 from  "../tunes/pa.mp3";
import w6 from  "../tunes/dha.mp3";
import w7 from  "../tunes/ni.mp3";
import w8 from  "../tunes/sha.mp3";
import b1 from  "../tunes/b1.mp3";
import b2 from  "../tunes/b2.wav";
import b3 from  "../tunes/b3.WAV";
import b4 from  "../tunes/b4.mp3";
import b5 from  "../tunes/b5.mp3";

export default function PianoUI() {
    function oneplay() {
        const one = new Audio(w1);
        one.play();
    }
    function twoplay() {
        const two = new Audio(w2);
        two.play();
    }
    function threeplay() {
        const three = new Audio(w3);
        three.play();
    }
    function fourplay() {
        const four = new Audio(w4);
        four.play();
    }
    function fiveplay() {
        const five = new Audio(w5);
        five.play();
    }
    function sixplay() {
        const six = new Audio(w6);
        six.play();
    }
    function sevenplay() {
        const seven = new Audio(w7);
        seven.play();
    }
    function eightplay() {
        const eight = new Audio(w8);
        eight.play();
    }
    function boneplay() {
        const bone = new Audio(b1);
        bone.play();
    }
    function btwoplay() {
        const btwo = new Audio(b2);
        btwo.play();
    }
    function bthreeplay() {
        const bthree = new Audio(b3);
        bthree.play();
    }
    function bfourplay() {
        const bfour = new Audio(b4);
        bfour.play();
    }
    function bfiveplay() {
        const bfive = new Audio(b5);
        bfive.play();
    }
    function changeblue() {
        let elements = document.getElementsByClassName("btnwhite");
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.background = 'rgb(150, 150, 250)';
        }
    }
    function changewhite() {
        let elements = document.getElementsByClassName("btnwhite");
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.background = 'white';
        }
    }
    function changegreen() {
        let elements = document.getElementsByClassName("btnwhite");
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.background = 'rgb(95, 240, 95)';
        }
    }
    function changered() {
        let elements = document.getElementsByClassName("btnwhite");
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.background = 'rgb(240, 120, 120)';
        }
    }
    function changeyellow() {
        let elements = document.getElementsByClassName("btnwhite");
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.background = 'rgb(245, 245, 105)';
        }
    }
    function changecyan() {
        let elements = document.getElementsByClassName("btnwhite");
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.background = 'cyan';
        }
    }

    return (
        <div>
            <h2 className="my-4 text-center" id="heading">Welcome to Virtual Piano</h2>
            <div className="container cont" align="center">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-3 col-lg-3">
                        <img src={image} alt="not found" className="innerimage" />
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6" >
                        <button className="btnwhite"  onClick={oneplay}> Sa </button>
                        <button className="btnwhite"  onClick={twoplay}> Re </button>
                        <button className="btnwhite"  onClick={threeplay}> Ga </button>
                        <button className="btnwhite"  onClick={fourplay}> Ma </button>
                        <button className="btnwhite"  onClick={fiveplay}> Pa </button>
                        <button className="btnwhite"  onClick={sixplay}> dha </button>
                        <button className="btnwhite"  onClick={sevenplay}> Ni </button>
                        <button className="btnwhite"  onClick={eightplay}> Sa </button>

                        <button className="btnblack" id="btnb1" onMouseDown={boneplay} ></button>
                        <button className="btnblack" id="btnb2" onMouseDown={btwoplay} ></button>
                        <button className="btnblack" id="btnb3" onMouseDown={bthreeplay} ></button>
                        <button className="btnblack" id="btnb4" onMouseDown={bfourplay} ></button>
                        <button className="btnblack" id="btnb5" onMouseDown={bfiveplay} ></button>
                    </div>
                    <div className="col-12 col-sm-12 col-md-3 col-lg-3">
                        <img src={image} alt="not found" className="innerimage" />
                    </div>
                </div>
            </div>
            <div className="container-fluid my-4 bg-dark cont2" align="center">
                <br />
                <h3 align="center" id="chnging">Change the Piano Colour</h3>
                <button type="button" className="btn btn-primary bbttnn" onClick={changeblue}>Blue</button>
                <button type="button" className="btn btn-light bbttnn" onClick={changewhite}>White</button>
                <button type="button" className="btn btn-success bbttnn" onClick={changegreen}>Green</button>
                <button type="button" className="btn btn-danger bbttnn" onClick={changered}>Red</button>
                <button type="button" className="btn btn-warning bbttnn" onClick={changeyellow}>Yellow</button>
                <button type="button" className="btn btn-info bbttnn" onClick={changecyan}>Cyan</button>
                <br />
            </div>
        </div>
    )
}
