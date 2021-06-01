import React, { useState, useEffect } from "react";
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash, fas, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


const NewRecordPage = ({ match }) => {

    return (
        <div className="container">
            <div class="d-flex justify-content-around align-items-center pt-3 pb-3">
                <Link to={`${'/home'}`}>
                    <button className="" style={{ backgroundColor: "#3273dc00", borderColor: "transparent", color: "green", fontSize: "1.6rem" }} >
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                </Link>
                <img src="../../images/logo.png" class="img-fluid " style={{ width: "170px" }} alt=""></img>
                <div>&nbsp;&nbsp;</div>
            </div>


            <div class="d-flex justify-content-center w-100 p-3">
                <form action="">
                    <h3 style={{ fontSize: "24px", fontWeight: "700", textTransform: "uppercase" }}>New Record</h3>

                    <input type="text" placeholder="Firstname" />
                    <input type="text" placeholder="Lastname" />
                    <input type="email" placeholder="example@mail.com" />
                    <hr />


                    <div class="row m-0 p-0">

                        <div class="col-6 m-0 p-0">
                            <label for="male">
                                <img src="../../images/man.png" class="img-fluid w-50" style={{ border: "5px solid rgb(91, 148, 91)", borderRadius: "100px" }} alt="" />
                                <input type="radio" id="male" name="gender" value="male" />
                            Male</label>
                        </div>

                        <div class="col-6 m-0 p-0">
                            <label for="female">
                                <img src="../../images/woman.png" for="female" class="img-fluid w-50" style={{ border: "5px solid rgb(91, 148, 91)", borderRadius: "100px" }} alt="" />
                                <input type="radio" id="female" name="gender" value="female" />
                           Female</label>
                        </div>

                    </div>
                    <a className="active" href="/selectVaccine" className="fixed-bottom footer-bg footer-next a-text">
                        NEXT
                    </a>
                </form>
            </div>




            <div style={{ height: "100px" }}></div>

        </div>
    );
}


export default NewRecordPage;