import React from "react";
import "../css/App.css";
import profile from "../images/profile.jpg";
import Footer from "./Footer.js";
import EmailModal from "./EmailModal";
import TabsMenu from "../component/Tabs.js";
import Typography from "@mui/material/Typography";
import SimpleAccordion from "../component/SimpleAccordion.js";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.generateFooter = this.generateFooter.bind(this);
  }
  generateFooter() {
    return <Footer></Footer>;
  }

  render() {
    return (
      <div className="taxa-component">
        <div className="bg"></div>
        <br></br>
        <div className="container about-panel">
          <div className="row">
            <div className="col-4">
              <div className="row">
                <img
                  className="img-thumbnail img-responsive"
                  id="taxaProfile"
                  alt="profile of Arantxa"
                  src={profile}
                ></img>
              </div>
              <br></br>
              <div className="row">
                <SimpleAccordion></SimpleAccordion>
              </div>
            </div>
            <div className="main-content col-8">
              <div className="row">
                <Typography
                  sx={{
                    fontSize: {
                      lg: 100,
                      md: 50,
                      sm: 15,
                      xs: 10,
                    },
                  }}
                  variant="h1"
                >
                  <b>Arantxa Rodrigues</b>
                </Typography>
              </div>

              <div className="row">
                <Typography
                  sx={{
                    fontSize: {
                      lg: 30,
                      md: 25,
                      sm: 15,
                    },
                  }}
                  variant="h4"
                >
                  Software Tester (Capgemini)
                </Typography>
              </div>
              <div className="row">
                <div className="col-sm-7" style={{ padding: "15px" }}>
                  <i
                    className="fa fa-map-marker"
                    style={{ fontSize: "24px" }}
                  ></i>
                  <span className="location"> Navi Mumbai, India</span>
                </div>
              </div>
              <br></br>
              <br></br>
              <div className="row">
                <div className="col-4">
                  <a
                    href="https://www.instagram.com/sanchezz_francesca/"
                    className="fa fa-instagram"
                  >
                    Instagram
                  </a>
                </div>
              </div>
              <br></br>
              <div className="row">
                <div className="col-3">
                  <EmailModal></EmailModal>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <TabsMenu></TabsMenu>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        {this.generateFooter()}
      </div>
    );
  }
}
