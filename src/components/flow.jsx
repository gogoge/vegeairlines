import React, { Component } from "react";
// import './flow.css'
export class Flow extends Component {
  render() {
    return (
      <div id="flow" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>從挑選到運送</h2>
            <p>
              從來源開始嚴格管控，直至食材新鮮安全的交付至您的手中
            </p>
          </div>
          <div className="row">
            {this.props.data
              ? this.props.data.map((d, i) => (
                  <div  key={`${d.name}-${i}`} className="col-md-6">
                    {" "}
                    {/* <i className={d.icon}></i> */}
                    <div className="flow-desc">
                      <h1>{d.name}</h1>
                      <p>{d.text}</p>
                      <img src={d.img}></img>
                    </div>
                  </div>
                ))
              : "loading"}
          </div>
        </div>
      </div>
    );
  }
}

export default Flow;
