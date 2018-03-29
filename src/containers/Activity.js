import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import './containers.css';
import Details from '../components/Details';
import Map from '../components/Map';
import Booking from '../components/Booking';
import Modal from '../components/Modal';
import * as Actions from '../actions';

class Activity extends React.Component {
  componentDidMount() {
    this.props.loadActivity();
  }

  render() {
    const { activity, isBooked, bookActivity } = this.props;

    if(activity == null){
      return null;
    }

    return (
      <div>
        <Details {...activity}/>
        <Map 
          {...activity}
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyATPxE5CjvauOTdNkC5UWrrrLNhfBI3ftk&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: "100%" }} />}
          containerElement={<div className="Activity-map" />}
          mapElement={<div style={{ height: "100%" }} />} />
        <Booking isBooked={isBooked} onClickHandler={() => bookActivity()} />
        { isBooked ? <Modal /> : null }
      </div>
    ); 
  }
}

function mapStateToProps(state) {
  return {
    activity: state.activity,
    isBooked: state.isBooked
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Activity);