import React, { Component } from "react";

export class Navigation extends Component {
  render() {
    return (
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              {" "}
              <span className="sr-only">Toggle navigation</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
            <a className="navbar-brand page-scroll" href="#page-top">
              長虹蔬果
            </a>{" "}
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              {/* <li>
                <a href="#features" className="page-scroll">
                  特色
                </a>
              </li> */}
              <li>
                <a href="#about" className="page-scroll">
                  公司介紹
                </a>
              </li>
              <li>
                <a href="#flow" className="page-scroll">
                  工作流程
                </a>
              </li>
              <li>
                <a href="#order" className="page-scroll">
                  訂貨/付款/取貨
                </a>
              </li>
              <li>
                <a href="#portfolio" className="page-scroll">
                  食材圖片
                </a>
              </li>
              {/* <li>
                <a href="#team" className="page-scroll">
                  團隊
                </a>
              </li> */}
              <li>
                <a href="#contact" className="page-scroll">
                  聯絡我們
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
