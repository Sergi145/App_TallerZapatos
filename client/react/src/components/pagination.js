import React from 'react'
import { Link } from 'react-router-dom'
import ReactDOM from 'react-dom';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';

class Pag extends React.Component {
  state = {
    current: 5,
  };
  onChange = (page) => {
    console.log(page);
    this.setState({
      current: page,
    });
  }
  render() {
    return <Pagination onChange={this.onChange} current={this.state.current} total={25} />;
  }
}

export default Pag
