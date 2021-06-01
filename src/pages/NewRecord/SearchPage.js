import React, { useState, useEffect } from "react";
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash, fas, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import '../../css/search.css'

const SearchPage = ({ match }) => {

    return (
        <div className="container">
            <div class="d-flex justify-content-around align-items-center pt-3 pb-3">
                <Link to={`${'/selectVaccine'}`}>
                    <button className="" style={{ backgroundColor: "#3273dc00", borderColor: "transparent", color: "green", fontSize: "1.6rem" }} >
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                </Link>
                <img src="../../images/logo.png" class="img-fluid " style={{ width: "170px" }} alt=""></img>
                <div>&nbsp;&nbsp;</div>
            </div>
            <br />
            <div class="">
                <img src="../../images/bg.png" class="img-fluid" alt="" />
                <section class="container d-flex justify-content-center">

                    <div style={{width:"77%"}}>
                        <form autocomplete="off" action="./vaccine.php">
                            <div class="autocomplete" style={{width:"77%"}}>

                                <input id="myInput" type="text" name="myCountry" placeholder="Immuniztion/Brand Name" />
                            </div>

                            <input type="submit" />
                        </form>
                        <p class="text-center " style={{color:"gray"}}>Start typing the immunization above and then select the one that matches.</p>
                    </div>
                </section>
            </div>



            <div style={{ height: "100px" }}></div>

        </div>
    );
}


export default SearchPage;