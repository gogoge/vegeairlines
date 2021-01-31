import React, { Component } from 'react'
import Navigation from './components/navigation';
import Header from './components/header';
// import Features from './components/features';
import About from './components/about';
// import Services from './components/services';
import Flow from './components/flow';
import Order from './components/order';
import Faq from './components/faq';
import Gallery from './components/gallery';
// import Testimonials from './components/testimonials';
// import Team from './components/Team';
import Contact from './components/contact';
import JsonData from './data/data.json';
// import { Order } from './components/order';

export class App extends Component {
  state = {
    landingPageData: {},
  }
  getlandingPageData() {
    this.setState({landingPageData : JsonData})
  }

  componentDidMount() {
    this.getlandingPageData();
  }

  render() {
    return (
      <div>
        <Navigation />
        <Header data={this.state.landingPageData.Header} />
        {/* <Features data={this.state.landingPageData.Features} /> */}
        <About data={this.state.landingPageData.About} />
        <Flow data={this.state.landingPageData.Services} />
        <Order />
        <Faq data={this.state.landingPageData.Faq} />
        {/* <Services data={this.state.landingPageData.Services} /> */}
        <Gallery data={this.state.landingPageData.Gallery} />
        {/* <Testimonials data={this.state.landingPageData.Testimonials} /> */}
        {/* <Team data={this.state.landingPageData.Team} /> */}
        <Contact data={this.state.landingPageData.Contact} />
      </div>
    )
  }
}

export default App;
