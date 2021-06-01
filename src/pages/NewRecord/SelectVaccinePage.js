import React, { useState, useEffect } from "react";
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash, fas, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Tab, Tabs, Sonnet } from 'react-bootstrap';



const Modal = ({ children, closeModal, modalState, title }) => {
    if (!modalState) {
        return null;
    }
    return (
        <div className="modal is-active" style={{flexDirection:"unset"}}>
            <div className="modal-background" onClick={closeModal} />
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">{title}</p>
                    <button className="delete" onClick={closeModal} />
                </header>
                <section className="modal-card-body">
                    <div className="content">
                        {children}
                    </div>
                </section>
                {/* <footer className="modal-card-foot">
                    <button className="button is-primary ">เพิ่ม</button>
                    <button className="button is-primary" onClick={closeModal}>Cancel</button>
                </footer> */}
            </div>
        </div>
    );
}

const SelectVaccinePage = ({ match }) => {
    const [modalState, setModalState] = useState(false)

    const toggleModal = () => {
        setModalState(!modalState)
    }

    return (
        <div >
            <div className="container" style={{ paddingRight: "0px", paddingLeft: "0px" }}>
                <div class="d-flex justify-content-around align-items-center pt-3 pb-3">
                    <Link to={`${'/newrecord'}`}>
                        <button className="" style={{ backgroundColor: "#3273dc00", borderColor: "transparent", color: "green", fontSize: "1.6rem" }} >
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </button>
                    </Link>
                    <img src="../../images/logo.png" class="img-fluid " style={{ width: "170px" }} alt=""></img>
                    <div>&nbsp;&nbsp;</div>
                </div>
                <div style={{ background: "#ffffffd4" }}>
                    <br />

                    <div class="d-flex justify-content-around align-items-center">
                        <div>
                            <h2>Jakkapong</h2>
                            <p>data:content</p>
                        </div>
                        <img src="../../images/man.png" class="img-fluid w-25" alt="" srcset="" />
                    </div>
                    <br />

                    <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="a-w50" style={{}}>
                        <Tab eventKey="home" title="TIMELINE" >
                            <div class="d-flex justify-content-center p-3 align-items-center h-50">
                                <div class="text-center ">
                                    <img src="https://image.flaticon.com/icons/png/512/4666/4666915.png" class="img-fluid w-25" alt="" />
                                    <p class="pt-4">get started by entering vaccinations you has received, or consult the schedule
                                    to see what
                            vaccinations are comming up!</p>
                                    <br />
                                    <div onClick={(e) => { toggleModal(); }} class="btn btn-success rounded-pill" style={{ fontWeight: "bold", fontSize: "20px" }} data-bs-toggle="modal" data-bs-target="#staticBackdrop"> ADD VACCINE </div>
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="profile" title="DOCUMENT">
                            z
                    </Tab>
                    </Tabs>

                    {/* 
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Profile</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Contact</a>
                    </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">.1</div>
                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">.1</div>
                    <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">.1</div>
                </div>


                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item w-50" role="presentation ">

                        <button class="nav-link w-100 active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true" style={{ fontWeight: "bold" }}><i class="fas fa-list"></i>
                    &nbsp;TIMELINE</button>
                    </li>
                    <li class="nav-item w-50" role="presentation">
                        <button class="nav-link w-100" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false" style={{ fontWeight: "bold" }}><i class="fas fa-file-import"></i> &nbsp;DOCUMENT</button>
                    </li>
                </ul>

                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <div class="d-flex justify-content-center p-3 align-items-center h-50">
                            <div class="text-center ">
                                <img src="https://image.flaticon.com/icons/png/512/4666/4666915.png" class="img-fluid w-25" alt="" />
                                <p class="pt-4">get started by entering vaccinations you has received, or consult the schedule
                                to see what
                            vaccinations are comming up!</p>
                                <br />
                                <div class="btn btn-success rounded-pill" style={{ fontWeight: "bold", fontSize: "20px" }} data-bs-toggle="modal" data-bs-target="#staticBackdrop"> ADD VACCINE </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">2</div>
                    <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">2</div>
                </div> */}

                </div>





                <div style={{ height: "100px" }}></div>
            </div>
            <form onSubmit={(e) => {
                toggleModal();
            }}>
                <Modal closeModal={toggleModal}
                    modalState={modalState}
                    title="Add Vaccination"
                >
                    <div class="modal-body-card-add-vacci">
                        <Link to={`${'/search'}`}>
                            <div class="row pt-3 pb-3" onclick="window.location ='search.php'">
                                <div class="col-3">
                                    <img src="https://image.flaticon.com/icons/png/512/4336/4336785.png" class="img-fluid" alt="" />

                                </div>
                                <div class="col-9">
                                    <h4> Search for vaccine </h4>
                                    <p>Ex. DTaP-IPV-Hib,Twinrix, Measles, etc.</p>

                                </div>
                            </div>
                        </Link>
                        <hr />
                        <div class="row pt-3 pb-3">
                            <div class="col-3">
                                <img src="https://image.flaticon.com/icons/png/512/534/534074.png" class="img-fluid" alt="" />

                            </div>
                            <div class="col-9">
                                <h4>Upload/Capture Document</h4>
                                <p>Have an immunization card or document you want to store in ISS Tap here to upload it.</p>
                            </div>
                        </div>
                        <hr />
                        <div class="row pt-3 pb-3">
                            <div class="col-3">
                                <img src="https://image.flaticon.com/icons/png/512/2234/2234769.png" class="img-fluid" alt="" />

                            </div>
                            <div class="col-9">
                                <h4>Bulk Enter Vaccines</h4>
                                <p>Bulk Enter Vaccines</p>
                            </div>
                        </div>
                        <hr />
                        <div class="row pt-3 pb-3">
                            <div class="col-3">
                                <img src="https://image.flaticon.com/icons/png/512/3742/3742804.png" class="img-fluid" alt="" />

                            </div>
                            <div class="col-9">
                                <h4>Proof of Vaccination Form</h4>
                                <p>Capture a healthcare provider's signature to prove you received the vaccine</p>
                            </div>
                        </div>

                    </div>


                    <br />


                </Modal>
            </form>
        </div>
    );
}


export default SelectVaccinePage;