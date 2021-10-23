import React from 'react';

const Footer = () => {
    return (
        <footer className="alert-primary mt-5">
            <div className="d-flex">             
               <h4 className=" h1  ms-5">Newsletter</h4>

                {/* <div className="col-6 d-block">
                    <textarea className="mt-2 foot-mess col-md-6" rows="2">Message</textarea>
                </div> */}
                <div className="bg-circle-outline d-block mt-3 ms-5">
                    <a href="https://twitter.com/" className="text-white d-block">
                        <i className="fa fa-2x fa-fw fa-twitter  d-block"style={{color:"blue"}}></i></a>
                </div>
                <div className=" bg-circle-outline d-block mt-3 ms-5">
                    <a href="https://instagram.com/" className="text-white d-block">
                        <i className="fa fa-2x fa-fw fa-instagram d-block ml-5 "style={{color:"pink"}}></i></a>
                </div>
                <div className="bg-circle-outline d-block mt-3 ms-5">
                    <a href="https://www.whatsapp.com/company/" className="text-white d-block">
                        <i className="fa fa-2x fa-fw fa-whatsapp d-block"style={{color:"green"}}></i></a>
                </div>

            </div>


            <div class="mt-3 text-center">©@osh__foods
            </div>

        </footer>
    );
};

export default Footer;