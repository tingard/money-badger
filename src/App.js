import React, { Component } from 'react';
import { render } from 'react-dom';
import Slider from 'react-slick';
import Group from './Group';
import './App.scss';
import store from './store';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  render() {
    const store = this.props.store
    var settings = {
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <div className="section background-dark text-center">
          <h1 className="text-huge text-white text-with-subtitle">Money Badger</h1>
          <h4 className="text-big text-gray">Get it sorted</h4>
        </div>
        <div className="container">
          <h2 className="text-big">
            Your Groups
          </h2>
        </div>
        <Slider {...settings}>
          {store.groups.map((group, i) => <Group group={group} key={`group-${i}`} />)}
        </Slider>

        <button className="floating-button button button-red button-huge">Add cost</button>
      </div>
    );
  }
}
export default () => <App store={store} />
render(<App store={store} />, document.getElementById('root'));
