import React from 'react'
import logo from './logo.jpg';

export default function home() {
    return (
         <>
         <marquee behavior="scroll" direction="right" scrollamount="15" className="details">Contact NO:93737546XX , Email: Tushar@gmail.com</marquee>
         <h3 className="header1">Welcome to mini Bank</h3>
         <img className="center-image" src={logo}/>
         <footer class="page-footer font-small blue">

             <div class="footer-copyright text-center py-3">© 2021 Copyright:
              <a href="https://limitless-bastion-83164.herokuapp.com/">Mini Bank Sparks pvt ltd</a>
             </div>

        </footer>
         </>
    )
}
