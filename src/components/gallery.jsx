import React, { Component } from "react";

export class Gallery extends Component {
  render() {
    return (
      <div id="portfolio" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>實物圖片</h2>
            <p>食材實物圖片
            </p>
          </div>
          <div className="row">
            <div className="portfolio-items">
              {}
              {this.props.data
              ? this.props.data.map((d, i) => (
                  <div  key={`${d.name}-${i}`} className="col-sm-6 col-md-4 col-lg-4">
                    {" "}
                    {/* <i className={d.icon}></i> */}
                    <div className="portfolio-item">
                      <div className="hover-bg">
                        {" "}
                        <a
                          href={d.path}
                          title={d.title}
                          data-lightbox-gallery="gallery1"
                        >
                          <div className="hover-text">
                            <h4>{d.title}</h4>
                          </div>
                          <img
                            src={d.path}
                            className="img-responsive"
                            alt={d.title}
                          />{" "}
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                ))
              : "loading"}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
