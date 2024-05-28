
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./WhitePaper.css";
import hamburger from "../assets/images/hamburger.png";
import cancel_Icon from "../assets/images/cancelIcon.png";
import poddle_logo from "../assets/images/logo_poddle.png";
import drop_down from "../assets/images/drop-down.png";
import Intro_Image from "../assets/images/Intro.jpeg";
import next_icon from "../assets/images/next_icon.png";
import go_left_icon from "../assets/images/go-left.jpeg";
import X_Icon from "../assets/images/X_Icon.png";
import T_Icon from "../assets/images/Telegram_Black.png";


const Governance = () => {
  const drops_down = document.getElementById("drop_down_icon");
  const lists = document.querySelector(".drops");

  // Show nav_Links Contents

  // Try show nav-contents
  const [isNavVisible, setIsNavVisible] = useState(false);
  useEffect(() => {
    const navLinks = document.querySelector(".nav_links");
    const menuIcon = document.getElementById("menu_icon");
    const cancelIcon = document.getElementById("cancel_Navs");

    if (isNavVisible) {
      navLinks.style.display = "block";
      cancelIcon.style.display = "block";
      menuIcon.style.display = "none";
    } else {
      navLinks.style.display = "none";
      cancelIcon.style.display = "none";
      menuIcon.style.display = "block";
    }
  }, [isNavVisible]);

  const show_Content = () => {
    setIsNavVisible(true);
  };

  const hide_Content = () => {
    setIsNavVisible(false);
  };

  //   Navigations Control

  // Introduction/Whitepaper navs
  const whiteP_Nav = useNavigate();

  const navigate_ToIntro = () => {
    whiteP_Nav("/");
  };

  // Navigation to Tokens page

  const navigate_Tokens = useNavigate();

  const Tokens_Nav = () => {
    navigate_Tokens("/Tokens");
  };

  // Navigate to RoadMaps(Phase1)
  const phase1Nav = useNavigate();

  const navigate_phase1 = () => {
    phase1Nav("/Phase1");
  };

  // Navigate to RoadMaps(Phase2)
  const nav_phase2 = useNavigate();

  const navigate_phase2 = () => {
    nav_phase2("/Phase2");
  };

  // Navigate to RoadMaps(Phase3)

  const nav_phase3 = useNavigate();

  const navigate_phase3 = () => {
    nav_phase3("/Phase3");
  };

  // Navigate to RoadMaps(Phase4)

  const nav_phase4 = useNavigate();

  const navigate_phase4 = () => {
    nav_phase4("/Phase4");
  };

  // // Navigate to Presale page

  // const Presale_nav = useNavigate();

  // const load_presale = () => {
  //   Presale_nav("/Presale");
  // };

  // Navigate to Staking page

  // const Staking_nav = useNavigate();

  // const load_Staking = () => {
  //   Staking_nav("/Staking");
  // };

  // Navigate to Buy-back page

  const buyBack_Nav = useNavigate();

  const load_buyBack = () => {
    buyBack_Nav("/Buy-back");
  };

  // Navigate to Presale page

  const Presale_nav = useNavigate();

  const load_presale = () => {
    Presale_nav("/Presale");
  };

  // Navigate to Staking page

  const Staking_nav = useNavigate();

  const load_Staking = () => {
    Staking_nav("/Staking");
  };

  //   Navigate to Governace page
  const GoverNance_nav = useNavigate();

  const load_Governance = () => {
    GoverNance_nav("/Governance");
  };

  const buyBack_nav = useNavigate();

  const LoadBuy_back = () => {
    buyBack_nav("/Buy-back");
  };
  // Navigate to Airdrop Page
  const AirDrop_nav = useNavigate();
  const load_Airdrop = () => {
    AirDrop_nav("/Airdrop");
  };

  // Navigate to Rewards Distribution Page
  const Rewards_nav = useNavigate();
  const load_Rewards = () => {
    Rewards_nav("/Rewards_Distribution");
  };

  // Navigate to Conclusion Page
  const Conclusion_nav = useNavigate();
  const load_Conclusion = () => {
    Conclusion_nav("/Conclusion");
  };

  return (
    <div className="container">
      <div className="nav">
        <div className="logo">
          <img src={poddle_logo} id="poddle_logo" alt="Poddle logo" />
          <span className="title_nav">Poodle Coin</span>
        </div>
        {/* harmbuger */}
        <div className="harmburger">
          <img src={hamburger} id="menu_icon" onClick={show_Content} alt="" />
          <img
            src={cancel_Icon}
            onClick={hide_Content}
            id="cancel_Navs"
            alt=""
          />
        </div>
        {/* Secondary Nav */}
        <div className="nav_Secondary">
          <div className="nav_links_Sec">
            <ul>
              <li>
                {" "}
                <button onClick={navigate_ToIntro}>Introduction</button>{" "}
              </li>
              <li>
                {" "}
                <button onClick={Tokens_Nav}>Tokenomics</button>{" "}
              </li>
              <li>
                {" "}
                <button id="pages_drop-down">
                  Roadmap{" "}
                  <span>
                    <img src={drop_down} id="drop_down_icon" alt="" />
                  </span>{" "}
                </button>{" "}
                <div className="drops">
                  <ul>
                    <li>
                      <button onClick={navigate_phase1}>Phase 1</button>
                    </li>
                    <li>
                      <button onClick={navigate_phase2}>Phase 2</button>
                    </li>
                    <li>
                      <button onClick={navigate_phase3}>Phase 3</button>
                    </li>
                    <li>
                      <button onClick={navigate_phase4}>Phase 4</button>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <button onClick={load_presale}>Pre-sale</button>
              </li>
              <li>
                <button onClick={load_Staking} >Staking</button>
              </li>
              <li>
                <button onClick={load_Governance}>Governance</button>
              </li>
              <li>
                <button onClick={LoadBuy_back}>Buy-back</button>
              </li>
              <li>
                <button onClick={load_Airdrop}>Airdrop</button>
              </li>
              <li>
                <button onClick={load_Rewards}>Rewards Distribution</button>
              </li>
              <li>
                <button onClick={load_Conclusion}>Conclusion</button>
              </li>
            </ul>
          </div>
        </div>
        {/* Secondary nav */}
        <div className="nav_links">
          <ul>
            <li>
              {" "}
              <button onClick={navigate_ToIntro}>Introduction</button>{" "}
            </li>
            <li>
              {" "}
              <button onClick={Tokens_Nav}>Tokenomics</button>{" "}
            </li>
            <li>
              {" "}
              <button id="pages_drop-down">
                Roadmap{" "}
                <span>
                  <img src={drop_down} id="drop_down_icon" alt="" />
                </span>{" "}
              </button>{" "}
              <div className="drops">
                <ul>
                  <li>
                    <button onClick={navigate_phase1}>Phase 1</button>
                  </li>
                  <li>
                    <button onClick={navigate_phase2}>Phase 2</button>
                  </li>
                  <li>
                    <button onClick={navigate_phase3}>Phase 3</button>
                  </li>
                  <li>
                    <button onClick={navigate_phase4}>Phase 4</button>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <button onClick={load_presale}>Pre-sale</button>
            </li>
            <li>
              <button onClick={load_Staking}>Staking</button>
            </li>
            <li>
              <button onClick={load_Governance}>Governance</button>
            </li>
            <li>
              <button onClick={LoadBuy_back}>Buy-back</button>
            </li>
            <li>
              <button onClick={load_Airdrop}>Airdrop</button>
            </li>
            <li>
              <button onClick={load_Rewards}>Rewards Distribution</button>
            </li>
            <li>
              <button onClick={load_Conclusion}>Conclusion</button>
            </li>
          </ul>
        </div>
      </div>
      {/* End Nav */}

      {/* Pre-sale Container */}

      <div className="phase1Container">
        <div className="phase1holder"></div>
        <div className="phase1_Contents">
          <h2 className="phase1Title">Governance</h2>

          <div className="phase1Info">
            <p>
              Poodle holders will have the opportunity to participate in
              decentralized governance, allowing them <br /> to propose and vote
              on protocol upgrades, partnerships, and other key decisions eg.
              Launching a <br /> Poodle solana based project. This ensures a
              truly community-driven project.
            </p>
          </div>
        </div>
      </div>

      {/* Next button to load the Governance page */}
      <div className="RoadMaps_phase">
        <div className="nav_btns">
          <button id="RoadmapBtn" onClick={load_buyBack}>
            <div>
              <small>Next</small>
              <p>Buy-back</p>
            </div>
            <div className="nextIcon">
              <img src={next_icon} id="next_btn" alt="" />
            </div>
          </button>
          <button id="IntroBtn" onClick={load_Staking}>
            <div className="nextIcon">
              <img src={go_left_icon} id="left_btn" alt="" />
            </div>
            <div>
              <small>Previous</small>
              <p>Staking</p>
            </div>
          </button>
        </div>
        {/* Updated List */}
        <small className="update_date">Last Updated - 1 week ago </small>
      </div>
      {/* Footer Section */}
      <div className="footer_Section">
        <footer>
          <div className="info">
            <div className="footer_img">
              <img
                src={poddle_logo}
                id="poodle_logo_footer"
                alt="Explore Poodle"
              />
            </div>
            {/* "" */}
            <hr />
            <div className="social_Icons">
              <a href="http://x.com/poodletoken12">
                <img src={X_Icon} id="X_Icon" alt="twitter logo - poodle" />
              </a>
              <a href="http://t.me/+fR1PXMZ9xi5iMDdk">
                <img src={T_Icon} id="T_Icon" alt="telegram logo - poodle" />
              </a>
            </div>
            <div className="Authorize">
              <div className="rights">
                <p> @Poodle 2024 | All rights reserved </p>
              </div>
              <div className="terms">
                <p>Terms & Conditions Apply</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Governance