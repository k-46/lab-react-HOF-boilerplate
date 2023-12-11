import React, { Component } from "react";

export class HigherOrderComponent extends Component {
  constructor() {
    super();
    this.state = {
      userData: [
        { id: "1", name: "Joe", user_type: "Developer", age: 31, years: 11 },
        { id: "2", name: "Hill", user_type: "Designer", age: 26, years: 4 },
        { id: "3", name: "John", user_type: "Teacher", age: 24, years: 2 },
        { id: "4", name: "Sam", user_type: "Entreprenuer", age: 58, years: 25 },
        { id: "5", name: "Jack", user_type: "Designer", age: 43, years: 18 },
      ],
      filterType: "Designer",
      filterName: "J",
    };
  }
  renderItems = (data) => {
    if (data) {
      return (
        <React.Fragment key={data.id}>
          <li className="list-elements">
            <span>Id: {data.id}</span>
            <span>Name : {data.name}</span>
            <span>User Type: {data.user_type}</span>
          </li>
        </React.Fragment>
      );
    }
  };
  render() {
    // Destructuring i.e, extracting properties.
    const { userData, filterType, filterName } = this.state;

    // Filtering list by using 'Designer' type.
    const filteredListByType = userData
      .filter((item) => item.user_type === filterType)
      .map(this.renderItems);

    // Filtering list names that starts with letter 'J'.
    const filteredListByName = userData
      .filter((item) => item.name.startsWith(filterName))
      .map(this.renderItems);

    // Filtering list by age b/w 28 and 50.
    const filteredListByAge = userData
      .filter((item) => item.age > 28 && item.age <= 50)
      .map(this.renderItems);

    // Total no. of years.
    const totalYears = userData
      .filter((item) => item.user_type === "Designer")
      .reduce((total, item) => total + item.years, 0);

    return (

      <React.Fragment>
        <h1>Display all items</h1>
        <div className="display-box">
          <ul>{userData.map(this.renderItems)} </ul>
        </div>

        <h1>Display based on user type</h1>
        <div className="display-box">
          <ul>{filteredListByType}</ul>
        </div>

        <h1>Filter all data starting with letter J</h1>
        <div className="display-box">
          <ul>{filteredListByName}</ul>
        </div>
        <h1>Filtered all data based on age between 28 and 50.</h1>
        <div className="display-box">
          <ul>{filteredListByAge}</ul>
        </div>

        <h1>Find the total years of the designers</h1>
        <div className="display-box">
          <p>{totalYears}</p>
        </div>
      </React.Fragment>
    );
  }
}

export default HigherOrderComponent;
