import Layout from "../components/Layout";

export default function Result() {
  return (
    <Layout>
      <div className="result-container">
        <div className="result-heading">
          Final Examination, May 2026
        </div>

        <table className="result-table">
          <tbody>
            <tr>
              <td>Roll Number</td>
              <td>134137</td>
            </tr>
           
            <tr className="highlight-row" >
              <td>Name</td>
              <td>KUNAL JAIN</td>
            </tr>

            <tr className="white-row">
              <td>Group I</td>
            </tr>

            <tr>
              <td>Financial Reporting</td>
              <td>041</td>
            </tr>

            <tr>
              <td>Advanced Financial Management</td>
              <td>038</td>
            </tr>

            <tr>
              <td>Advanced Auditing, Assurance and Professional Ethics</td>
              <td>040</td>
            </tr>

            <tr>
              <td>Total</td>
              <td>119</td>
            </tr>

            <tr className="result-row">
              <td>Result</td>
              <td>UNSUCCESSFUL</td>
            </tr>

            <tr className="white-row">
              <td>Group II</td>
            </tr>

            <tr>
              <td>Direct Tax Laws & International Taxation</td>
              <td>036</td>
            </tr>

            <tr>
              <td>Indirect Tax Laws</td>
              <td>044</td>
            </tr>

            <tr>
              <td>Integrated Business Solutions</td>
              <td>050</td>
            </tr>

            <tr>
              <td>Total</td>
              <td>130</td>
            </tr>

            <tr className="result-row">
              <td>Result</td>
              <td>UNSUCCESSFUL</td>
            </tr>

            <tr>
              <td>Grand Total</td>
              <td>249</td>
            </tr>
          </tbody>
        </table>

        <div className="result-notes">  
          <p>
            'E' Indicates Marks obtained in an earlier attempt <br />
            '&lt;' Indicates passed under CA Regulations, 1988.
          </p>

          <p>
            '50E' Indicates permanent exemption in paper(s)
            with the condition of minimum 50% marks in each
            of the remaining paper(s).
          </p>
        </div>

        <div className="result-links">
        <a href="/login">Check Another Roll Number</a>

        <span>|</span>

        <a href="/">Check Merit</a>

        <span>|</span>

        <a href="/">Home</a>
      </div>
      </div>
    </Layout>
  );
}