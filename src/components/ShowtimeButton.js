import React from 'react';

class ShowtimeButton extends React.Component {

  clicked() {
    console.log("I've been clicked");
  }

  render() {
    return (
      <button onClick={this.clicked}>Get Showtimes</button>
    );
  }
};

export default ShowtimeButton;
