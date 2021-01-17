import React, { Component } from "react";
// import './flow.css'
export class Faq extends Component {
  render() {
    return (
      <div id="faq" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>常見問題</h2>
          </div>
          <div className="row">
            {this.props.data
              ? this.props.data.map((d,i) => (
                  <div  key={`${d.title}-${i}`} className="col-md-6 col-md-3">
                    {" "}
                    <h3>{d.question}</h3>
                    <p>{d.answer}</p>
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    );
  }
}

export default Faq;
