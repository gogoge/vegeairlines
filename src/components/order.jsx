import React, { Component } from "react";
import './order.css'
export class Order extends Component {
  render() {
    return (
      <div id="order" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>報價</h2>
            <p>最低MOQ為一箱（每箱為15KG)</p>
            <p>運費 150 $TWD/KG，每箱運費為 $2250 TWD 約為 $608 ~ $610 HKD</p>
            <p>一般來說，每箱食材的運費+食材本身價錢，約為 $1000~$1300 HKD</p>
          </div>
          <div className="section-title">
            <h2>付款方式</h2>
            <p>轉帳至我司香港匯豐銀行帳戶，收到全額款項後，隔日立即挑選出貨</p>
            <p>Day1: 訂貨、付款、確認款項無誤</p>
            <p>Day2: 挑貨、出貨</p>
            <p>Day3: 早上10點收貨</p>
            <p>請於週一至周四下單並付款完成，才能保證2日後取貨，（台灣市場六、日、週一不出貨）</p>
          </div>
          <div className="section-title">
            <h2>取貨方式</h2>
            <p>
              貨物寄送至香港報關碼頭後，需由客戶自行提貨，我司不另行安排貨運（量大者可另案討論）
            </p>

            <li>客戶自行至報關行提貨</li>
            <li>客戶安排googvan</li>

            <quote>務必於正午12時之前取貨，逾時造成食材損壞概不負責</quote><br/>
            
          </div>
        </div>
      </div>
    );
  }
}

export default Order;
