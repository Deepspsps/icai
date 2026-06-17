import logo from "../assets/icaiLogo.png"

export default function Layout({ children }) {
  return (
    <div className="container">
      <header className="header">
        <div className="header-content">
          <img
            src={logo}
            alt="ICAI Logo"
            className="header-logo"
          />

          <div className="header-text">
            <h1>The Institute of Chartered Accountants of India</h1>
            <p>Examination Results</p>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer>
        <div className="footer-bar">
          Hosted by National Informatics Centre
        </div>

        <div className="disclaimer">
         Disclaimer: The result given is correct at the time of release of the result by the Institute which accepts no responsibility thereafter for errors or omissions caused as a result of their transmission via the Internet or their downloading or printing by the user. No material from this web site can be copied, reproduced, published, uploaded, posted, transmitted or distributed or dealt with in any manner, unless expressly authorized. Users are not permitted to change, modify or prepare derivative works from the content of this site. For any clarifications / confirmation please address your enquiries to Joint Secretary (Examinations). The Institute of Chartered Accountants of India, 'ICAI BHAWAN', Post Box No. 7112, Indraprastha Marg, New Delhi - 110 002
        </div>
      </footer>
    </div>
  );
}