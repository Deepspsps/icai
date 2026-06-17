import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

export default function Home() {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="home-content">
        <div className="section-title">CHECK RESULTS</div>

{/*
        <div
          className="exam-item">
          <strong>Intermediate Examination</strong> : May 2026
          <br />
          <span>Announced on 18th June 2026</span>
        </div>

        <div
          className="exam-item">
          <strong>Intermediate Examination - UNITS</strong> : May 2026
          <br />
          <span>Announced on 18th June 2026</span>
        </div>
        */}


        <div
          className="exam-item"
          onClick={() => navigate("/login")}
        >
          <strong>Final Examination</strong> : May 2026
          <br />
          <span>Announced on 18th June 2026</span>
        </div>

        <div className="section-title">
          CHECK MERIT LIST
        </div>
{/*
        <div className="exam-item">
          <strong>Intermediate Examination</strong> :
          May 2026
          <br />
          <span>Announced on 18th June 2026</span>
        </div>
        */}

        <div className="exam-item">
          <strong>Final Examination</strong> :
          May 2026
          <br />
          <span>Announced on 18th June 2026</span>
        </div>

      </div>
    </Layout>
  );
}