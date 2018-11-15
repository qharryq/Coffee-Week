import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { List } from 'react-content-loader'

import Header from './components/header';
import GiverReceiverPairingList from './components/giver_receiver_pairing_list';
import Toolbar from './components/toolbar';
import Counter from './components/counter';

class App extends Component {
  constructor (props) {
    super(props);
    this.assignRecipents = this.assignRecipents.bind(this)

    this.state = { 
      dubParticipants: [],
      nyParticipants: [],
      isLoading: false,
      isAssigned: false,
      error: false    
    };

  }

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch('https://hbc-frontend-challenge.hbccommon.private.hbc.com/coffee-week/users?department=engineering&location=dub')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong');
        }
      })
      .then(dubParticipants => this.setState({ dubParticipants: dubParticipants.users, isLoading:false }))
      .catch(error => this.setState({ error, isLoading: false }));

    
      fetch('https://hbc-frontend-challenge.hbccommon.private.hbc.com/coffee-week/users?department=engineering&location=ny')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong');
        }
      })
      .then(nyParticipants => this.setState({ nyParticipants: nyParticipants.users, isLoading:false }))
      .catch(error => this.setState({ error, isLoading: false }));

  }



  shuffle(arr) {
    // Fisher-Yates shuffle algorithm
    var m = arr.length, t, i;

    // While there remain elements to shuffle…
    while (m) {

      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = arr[m];
      arr[m] = arr[i];
      arr[i] = t;
    }

  } 

  assignRecipents(){
    // Approach: Shuffle array first, using Fisher Yates algorithm
    var array1 = this.state.dubParticipants.slice();
    var array2 = this.state.nyParticipants.slice();
    this.shuffle(array1);
    this.shuffle(array2);

    // in the randomly shuffled array each participant is giving coffee to the next participant
    // the last participant in the array gives coffee to the first
    var i =0;
    while (i<array1.length-1){
      array1[i].givingTo = array1[++i];
    }
    array1[array1.length-1].givingTo = array1[0];

    i =0;
    while (i<array2.length-1){
      array2[i].givingTo = array2[++i];
    }
    array2[array2.length-1].givingTo = array2[0];

    // Shuffle again for display purposes (without doing this each name is displayed consecutively on the page, giving and receiving a coffee)
    this.shuffle(array1);
    this.setState({dubParticipants: array1});

    this.shuffle(array2);
    this.setState({nyParticipants: array2});

    this.setState({isAssigned: true});
  }

  render() {
    const { dubParticipants, nyParticipants, isLoading, isAssigned, error } = this.state;
    const MyListLoader = () => <List />

    console.log(dubParticipants);

    if (error) {
      return <p>{error.message}</p>;
    }

    if (isLoading) {
      return (
        <div>
          <MyListLoader/>
        </div>
      );
    }

    return (
      <>
        <Header/>
        <Toolbar randomlyAssignCoffee={this.assignRecipents} assigned = {isAssigned}/>
        <Counter dubNumber={dubParticipants} nyNumber={nyParticipants}/>
        <GiverReceiverPairingList participants = {dubParticipants} assigned = {isAssigned}/>
        <GiverReceiverPairingList participants = {nyParticipants} assigned = {isAssigned}/>
      </>  
    );
  }
}


//putting App inside tag creates an instance of the class
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();