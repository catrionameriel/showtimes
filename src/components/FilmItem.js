import React, {Component} from 'react';

class FilmItem extends Component {
  render() {
    return (
      <div>
        {this.props.icon}{this.props.filmName}{this.props.time}
      </div>
    )
  }
};

export default FilmItem;
