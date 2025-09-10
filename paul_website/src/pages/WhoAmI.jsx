import React from "react";
import Footer from "../components/Footer"; 

// ====== Logos and Images ======
// Profile
import profileImg from "../pics/WhoAmI/image.png";

// Tiny icons
import icLinkedIn from "../logos/LI-In-Bug.png";
import icGitHub from "../logos/github-mark-white.png";
import icEmail from "../logos/email.png";
import flagUS from "../logos/free-icon-united-states-330459.png";
import flagKR from "../logos/free-icon-south-korea-330591.png";

// Education logos
import logoUSC from "../logos/USC_logo.png";
import logoMSU from "../logos/M-State_Maroon(RGB).svg";

// Experience logos
import logoFPM from "../logos/FPM_logo.png";
import logoExcello from "../logos/엑셀로_흰색기본로고.png";
import logoKDB from "../logos/한국산업은행CI_가로조합_영문_그라데이션.png";
import logoROKAF from "../logos/Republic_of_Korea_Air_Force_emblem.png";
import logoSYPM from "../logos/SYPM.png";

// Leadership logos & photos
import logoAAII from "../logos/AAII_Logo-White.svg";
import logoFMA from "../logos/fma.png";
import logoGoel from "../logos/goel-community.png";
import photoVolunteer1 from "../pics/WhoAmI/Takeo_work.JPG";
import photoVolunteer2 from "../pics/WhoAmI/DSC03211.JPG";

// Skills logos
import logoPy from "../logos/Python_logo_01.svg.png";
import logoJS from "../logos/js.png";
import logoMongo from "../logos/MongoDB_Logomark_ForestGreen.png";
import logoFirebase from "../logos/Firebase-logo-vertical.png";
import logoReact from "../logos/React_black.png";
import logoGit from "../logos/Git.png";

export default function WhoAmI() {
  return (
    <section id="whoami" className="who">
      <div className="container">

        {/* ===== Header ===== */}
        <div className="who__header">
          <img src={profileImg} alt="Paul Keunchan Yoo" className="who__photo" />

          <div className="who__head">
            <div className="who__nameRow">
              <h1 className="who__name">Paul Keunchan Yoo</h1>

              <div className="who__flagsAndLoc">
                <img src={flagUS} alt="US" />
                <img src={flagKR} alt="KR" />
                <span className="who__loc">Los Angeles, CA</span>
              </div>
            </div>

            <ul className="who__contacts who__contacts--grid">
              <li>
                <span className="who__contactLabel">
                  <img src={icLinkedIn} alt="" /> LinkedIn
                </span>
                <a className="who__contactValue" href="https://www.linkedin.com/in/pkyoo" target="_blank" rel="noreferrer">
                  https://www.linkedin.com/in/pkyoo
                </a>
              </li>

              <li>
                <span className="who__contactLabel">
                  <img src={icGitHub} alt="" /> GitHub
                </span>
                <a className="who__contactValue" href="https://github.com/PKYOO-116" target="_blank" rel="noreferrer">
                  https://github.com/PKYOO-116
                </a>
              </li>

              <li>
                <span className="who__contactLabel">
                  <span className="icon-box"><img src={icEmail} alt="" /></span> Email
                </span>
                <a className="who__contactValue" href="mailto:pkyoo116@gmail.com">
                  pkyoo116@gmail.com
                </a>
              </li>
            </ul>

            {/* ===== Education ===== */}
            <div className="who__eduBlock">
              <h2 className="who__sec">Education</h2>
              <ul className="who__edu who__edu--card">
                <li>
                  <div className="who__eduLogo">
                    <img src={logoUSC} alt="USC" className="logo-box" />
                  </div>
                  <div className="who__eduBody">
                    <div className="who__eduTitle"><b>Master of Science</b></div>
                    <div className="who__eduMajor">Applied Data Science</div>
                    <div className="who__eduMeta">University of Southern California | Los Angeles, CA</div>
                    <div className="who__eduTime">August 2023 – May 2025</div>
                  </div>
                </li>

                <li>
                  <div className="who__eduLogo">
                    <img src={logoMSU} alt="MSU" className="logo-box" />
                  </div>
                  <div className="who__eduBody">
                    <div className="who__eduTitle"><b>Bachelor of Business Administration</b></div>
                    <div className="who__eduMajor">
                      Business Administration concentration in Finance / Minor in Economics
                    </div>
                    <div className="who__eduMeta">Mississippi State University | Starkville, MS</div>
                    <div className="who__eduTime">January 2014 – May 2016</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ===== Experience ===== */}
        <section className="who__group">
          <h2 className="who__sec">Experience</h2>

          <ul className="who__xp">
            <li className="who__xpItem">
              <div className="who__xpLogo"><img src={logoFPM} alt="USC FPM" /></div>
              <div className="who__xpBody">
                <div className="who__xpHead">
                  <div className="who__role"><b>Data Analyst | Student worker</b></div>
                  <div className="who__meta">USC Facilities Planning and Management — Los Angeles, CA</div>
                  <div className="who__time">Aug 2024 – May 2025</div>
                </div>
                <ul className="who__bullets">
                  <li>Identified irrigation meters and consolidated data from two monitoring systems</li>
                  <li>Published a Power BI dashboard for leadership</li>
                  <li>Analyzed campus utility consumption and billing data</li>
                </ul>
              </div>
            </li>

            <li className="who__xpItem">
              <div className="who__xpLogo"><img src={logoExcello} alt="EXCELLO" /></div>
              <div className="who__xpBody">
                <div className="who__xpHead">
                  <div className="who__role"><b>Project Manager | Strategic Planning Assistant Manager</b></div>
                  <div className="who__meta">EXCELLO Co., Ltd. — South Korea</div>
                  <div className="who__time">Apr 2021 – Oct 2022</div>
                </div>
                <ul className="who__bullets">
                  <li>Analyzed business data and supported C-suite decisions</li>
                  <li>Managed $25M steel industry digitalization R&amp;D projects</li>
                  <li>Led digitalization projects (Hyundai Steel Smart Ladle, POSCO Smart Tuyere Stock, SeAH CSS Smart AOD)</li>
                </ul>
              </div>
            </li>

            <li className="who__xpItem">
              <div className="who__xpLogo"><img src={logoKDB} alt="KDB" className="logo-box" /></div>
              <div className="who__xpBody">
                <div className="who__xpHead">
                  <div className="who__role"><b>SME Banking Intern</b></div>
                  <div className="who__meta">Korea Development Bank — South Korea</div>
                  <div className="who__time">Aug 2019 – Nov 2019</div>
                </div>
                <ul className="who__bullets">
                  <li>Conducted market research and analysis for client financial evaluation</li>
                  <li>Bilingual client communication (EN/KR)</li>
                  <li>Performed physical inspection on loan usage</li>
                </ul>
              </div>
            </li>

            <li className="who__xpItem">
              <div className="who__xpLogo"><img src={logoROKAF} alt="ROKAF" className="logo-box" /></div>
              <div className="who__xpBody">
                <div className="who__xpHead">
                  <div className="who__role"><b>Staff Sergeant | Military Police</b></div>
                  <div className="who__meta">Republic of Korea Air Force — South Korea</div>
                  <div className="who__time">Jul 2017 – Jun 2019</div>
                </div>
                <ul className="who__bullets">
                  <li>Led air base defense and search mission squad</li>
                </ul>
              </div>
            </li>

            <li className="who__xpItem">
              <div className="who__xpLogo"><img src={logoSYPM} alt="Shin Yeong PM"/></div>
              <div className="who__xpBody">
                <div className="who__xpHead">
                  <div className="who__role"><b>Strategic Planning Intern</b></div>
                  <div className="who__meta">Shin Yeong Project Management — Ho Chi Minh City, Vietnam</div>
                  <div className="who__time">Jul 2015 – Dec 2015</div>
                </div>
                <ul className="who__bullets">
                  <li>Produced market research and reports for subsidiary establishment</li>
                  <li>Coordinated across departments and supported database consolidation</li>
                </ul>
              </div>
            </li>
          </ul>
        </section>

        {/* ===== Leadership | Community ===== */}
        <section className="who__group" id="community">
          <h2 className="who__sec">Leadership | Community Involvement</h2>

          <div className="who__commWrap">
            <div className="who__commLeft">
              <div className="who__commItem">
                <h3 className="who__commH3">American Association of Individual Investors (AAII)</h3>
                <p className="who__commMeta">Member · September 2015 – September 2016</p>
              </div>

              <div className="who__commItem">
                <h3 className="who__commH3">Financial Management Association International (FMA)</h3>
                <p className="who__commMeta">Student Honor Member · August 2014 – August 2015</p>
              </div>

              <div className="who__commItem">
                <h3 className="who__commH3">Capacity Building and Sustainable Development</h3>
                <p className="who__commMeta">Goel Community · Phnom Penh, Cambodia · February 2017</p>
                <ul className="who__commBullets">
                  <li>Proceeding marketing and sales <b>education</b> to local business employees.</li>
                  <li><b>Research and analysis</b> on local market, business identity, and competitors.</li>
                  <li>Business analysis report and proposal.</li>
                </ul>
              </div>

              <div className="who__commItem">
                <h3 className="who__commH3">Volunteer Trip</h3>
                <p className="who__commMeta">Shin Yeong Project Management · Siem Reap, Cambodia · October 2015</p>
                <ul className="who__commBullets">
                  <li>Provision of English and Music class for students experiencing financial difficulties.</li>
                  <li>Preparation and operation of charity ceremony and donor reports.</li>
                </ul>
              </div>

              <div className="who__commItem">
                <h3 className="who__commH3">International Fiesta</h3>
                <p className="who__commMeta">Mississippi State University · Starkville, MS · March 2015</p>
                <ul className="who__commBullets">
                  <li>Execution of <b>finance and accounting management</b> role for the Korean culture booth.</li>
                </ul>
              </div>

              <div className="who__commItem">
                <h3 className="who__commH3">Hangeul School (Korean School)</h3>
                <p className="who__commMeta">Starkville Korean Church · Starkville, MS · August 2014 – November 2014</p>
                <ul className="who__commBullets">
                  <li>Instructing Korean language and planning activities for Korean-American high school students.</li>
                </ul>
              </div>
            </div>


            <aside className="who__commRight">
              <div className="who__commLogos">
                <img src={logoAAII} alt="AAII" className="who__commLogo" />
                <img src={logoFMA} alt="FMA" className="who__commLogo" />
                <img src={logoGoel} alt="Goel Community" className="who__commLogo logo-box" />
              </div>

              <div className="who__commPhotos">
                <img src={photoVolunteer1} alt="Goel Community – field work" className="who__commPhoto" />
                <img src={photoVolunteer2} alt="Goel Community – workshop" className="who__commPhoto" />
              </div>
            </aside>
          </div>
        </section>

        {/* ===== Skills ===== */}
        <section className="who__group" id="skills">
          <div className="who__skillsHead">
            <h2 className="who__sec">Skills</h2>
            <ul className="who__skillIcons">
              <li><img src={logoPy} alt="Python" /></li>
              <li><img src={logoJS} alt="JavaScript" /></li>
              <li><img src={logoMongo} alt="MongoDB" /></li>
              <li><img src={logoFirebase} alt="Firebase" /></li>
              <li><img src={logoGit} alt="Git" /></li>
              <li><img src={logoReact} alt="React" /></li>
            </ul>
          </div>

          {/* 6개 섹션 그리드 */}
          <div className="who__skillsGrid">
            <div>
              <h3 className="who__h4">Data Science &amp; Modeling</h3>
              <ul className="who__bullets">
                <li>Random Forest, XGBoost, Logistic Regression, MLP, CNN, RNN(LSTM)</li>
                <li>TensorFlow, Keras, PyTorch, NLTK, Statsmodels, SHAP, Fairlearn, AIF360, scikit-learn</li>
                <li>Time Series Forecasting, Recommender Systems, Sentiment Analysis,
                    Fairness Evaluation in AI (Artificial Intelligence), Text Classification,
                    Sequence Modeling, Model Evaluation, Feature Engineering</li>
              </ul>
            </div>

            <div>
              <h3 className="who__h4">Data Engineering &amp; Infrastructure</h3>
              <ul className="who__bullets">
                <li>Apache Spark (RDD), AWS EC2, Firebase RTDB, MongoDB, PostgreSQL,
                    MySQL, Git, Flask, NPM, Docker, Anaconda</li>
                <li>Data Handling &amp; Cleaning, Data Migration, REST API Development</li>
              </ul>
            </div>

            <div>
              <h3 className="who__h4">Programming &amp; Tools</h3>
              <ul className="who__bullets">
                <li>Python, JavaScript, SQL, HTML/CSS, R, Node.js,
                    React.js, Vue.js, D3.js, Chart.js, Matplotlib, Seaborn, Plotly</li>
                <li>Power BI, Figma</li>
                <li>Full-stack Web Application Development, Interactive Visualization, Dashboard Development</li>
              </ul>
            </div>

            <div>
              <h3 className="who__h4">LLM (Large Language Model)</h3>
              <ul className="who__bullets">
                <li>ChatGPT, Llama, Gemini, Claude, DeepSeek</li>
              </ul>
            </div>

            <div>
              <h3 className="who__h4">Languages</h3>
              <ul className="who__bullets">
                <li>Fluent in English</li>
                <li>Native in Korean</li>
              </ul>
            </div>

            <div>
              <h3 className="who__h4">Other Keywords</h3>
              <ul className="who__bullets">
                <li>Data Science, Data Analysis</li>
                <li>Project Management, Business Intelligence, Business Analytics</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </section>
  );
}

