import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import swal from 'sweetalert';

const Home = (props) => {
  const { session } = props;

  if (!session.success) {
    swal("You have to be logged in to visit this page!", "Click the button to go to login", "warning");
    return <Redirect to="/login"/>
  }

  return (
    <div style={{ fontSize: '2rem' }}>Home</div>
  );
}

const mapStateToProps = state =>{
  return {
    session: state.login.session
  }
}

export default connect(mapStateToProps)(Home);