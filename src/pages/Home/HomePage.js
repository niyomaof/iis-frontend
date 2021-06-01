import React, { useState, useEffect } from "react";
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


const HomePage = ({ match }) => {

    return (
        <div className="container">
            <br />

            <div className="d-flex justify-content-center w-100 p-3">
                <img src="https://via.placeholder.com/350x250" className="img-fluid" alt="Cinque Terre" />
            </div>

            <div className="d-flex justify-content-center">
                <h4 style={{ fontWeight: "bold" }}>MY RECORDS</h4>
            </div>

            <div className="text-center">
                <div className="d-flex justify-content-center w-100 p-3" >
                    <img src="../../images/f.png" width="250" className="animation-pulse" />
                </div>
                <p class="text-center">Start by creating records for each of family members</p>
                <br />
                <a href="/newrecord">
                    <button className="btn btn-success" style={{ borderRadius: "50rem" }}>
                        <span > NEW RECORD</span>
                    </button>
                </a>
            </div>

            <br />
            <div className="container">
                <div className="">
                    <h3 style={{ fontWeight: "bold", fontSize: "1.3rem" }}>ALL ABOUT IMMUNIZATION</h3>
                </div>
                <p style={{ fontWeight: "100" }}>Have a question about immunization ? The information below comes from sources you can trust!</p>
            </div>

            <div className="row p-0 m-0 ">
                <div className="col-6   border p-2 d-flex justify-center-center">
                    <div className="text-center">
                        <img src="https://image.flaticon.com/icons/png/512/145/145852.png" class="img-fluid w-50" alt="" />
                        <p>Protecting Yourself &amp; Those Around You</p>
                    </div>
                </div>
                <div class="col-6  m-0  border p-2 d-flex justify-center-center align-items-center">
                    <div class="text-center">
                        <img src="https://image.flaticon.com/icons/png/512/727/727574.png" class="img-fluid w-50" alt="" />
                        <p>Outbreaks Map</p>
                    </div>
                </div>
                <div class="col-6  m-0  border p-2 d-flex justify-center-center align-items-center">
                    <div class="text-center">
                        <img src="https://image.flaticon.com/icons/png/512/2996/2996659.png" class="img-fluid w-50" alt="" />
                        <p>For Kids!</p>
                    </div>
                </div>
                <div class="col-6  m-0  border p-2 d-flex justify-center-center align-items-center">
                    <div class="text-center">
                        <img src="https://image.flaticon.com/icons/png/512/2784/2784530.png" class="img-fluid w-50" alt="" />
                        <p>Frequestly Asked Questions</p>
                    </div>
                </div>
                <div class="col-6  m-0  border p-2 d-flex justify-center-center align-items-center">
                    <div class="text-center">
                        <img src="https://image.flaticon.com/icons/png/512/2044/2044731.png" class="img-fluid w-50" alt="" />
                        <p>Pregnancy and Immuniztion</p>
                    </div>
                </div>
                <div class="col-6  m-0  border p-2 d-flex justify-center-center align-items-center">
                    <div class="text-center">
                        <img src="https://image.flaticon.com/icons/png/512/1497/1497064.png" class="img-fluid w-50" alt="" />
                        <p>Pain Management</p>
                    </div>
                </div>
            </div>





            <div style={{ height: "100px" }}></div>

        </div>
    );
}


export default HomePage;