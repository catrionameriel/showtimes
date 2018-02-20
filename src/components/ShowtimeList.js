import React, {Component} from 'react';
import FilmItem from './FilmItem';

class ShowtimeList extends Component {
  render() {
    const filmTimes = this.props.filmShowings.map (film => {
      return <FilmItem key = {film.id} icon = {film.icon} filmName = {film.filmName} time = {film.time} />
    })
    return <div>{filmTimes}</div>
  }
};

export default ShowtimeList;
