import React, {Component} from 'react';
import ShowtimeList from '../components/ShowtimeList';
import ShowtimeButton from '../components/ShowtimeButton';

class ShowtimesContainer extends Component {
  constructor(props){
  super(props);
  this.state = {
    filmTimes: [
    {id: 1, icon: "+", filmName: "Coco", time: "15:00"},
    {id: 2, icon: "+", filmName: "The Phantom Thread", time: "17:00"},
    {id: 3, icon: "+", filmName: "The Shape of the Water", time: "19:00"},
    {id: 4, icon: "+", filmName: "Three Billboards", time: "20:00"}
    ]
  };
}

  render() {
    return (
      <div>
        <h1>UK openings this week</h1>
        <ShowtimeList filmShowings = {this.state.filmTimes} />
        <ShowtimeButton />
      </div>
    )
  }
};

export default ShowtimesContainer;
