import React, { Component} from 'react';
import Personal from "./components/Personal";
import MyComponent from "./components/Personal"

class App extends Component {
  constructor(){
    super();

    this.state = {
      firstName: '',
      lastName: '',
      firstNameI: [ ],
      lastNameI: [ ],
      
    };
  }

  handleChangeF = (e) => {
    this.setState ({
      firstName : e.target.value
      
    }) 
    console.log(this.state.firstName);
  };
  handleChangeL = (e) => {
    this.setState ({
      lastName : e.target.value
    });
  };

  wipeCurrentNames() {
    const newfirstNameID = this.state.firstNameI.slice();
    newfirstNameID[0] = '';
    const newlastNameID = this.state.lastNameI.slice();
    newlastNameID[0] = '';
    this.setState ({
      firstNameI: newfirstNameID,
      lastNameI: newlastNameID,
    });
  };


  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      firstNameI: this.state.firstNameI.concat(this.state.firstName),
      lastNameI: this.state.lastNameI.concat(this.state.lastName),
      firstName : '',
      lastName : '',
    })
    console.log(this.state.firstNameI);
  };

  render() {
    const { firstName, lastName, firstNameI, lastNameI } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmitTask}>
        <label>First Name: </label>
        <input
        type="text"
        onChange={this.handleChangeF}
        value={firstName}
        />
        <button type="submit">Add first name</button>
        </form>
        <form onSubmit={this.onSubmitTask}>
        <label htmlFor='lastNameInput'>Last Name: </label>
        <input
        type="text"
        onChange={this.handleChangeL}
        value={lastName}
        id="lastNameInput"
        />
        <button type="submit">Add last name</button>
        </form>

        
        <Personal 
        firstNameI={firstNameI} 
        lastNameI={lastNameI}
        />
        <button onClick={this.wipeCurrentNames()}>Remove Name</button>
      </div>
    )
  }
}


export default App;
