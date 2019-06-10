import React, {Component} from 'react';


class App extends Component {
        constructor(props) {
          super(props);
          this.state = {
            isLoading: true,
            contacts: []
          }
        }

        componentDidMount() {
          this.fetchData();
        }

        fetchData(){
          fetch('https://randomuser.me/api/?results=10')
          .then(response=>response.json())
          .then(parsedJSON=>parsedJSON.results.map(user=>(
            {
              name: `${user.name.first} ${user.name.last}`,
              username: `${user.login.username}`,
              email: `${user.email}`,
              location: `${user.location.street}, ${user.location.city}`
            }
          )))
          .then(contacts=> this.setState({
            contacts,
            isLoading: false
          }))
          .catch(error=>console.log("There as an error", error))
        }

    render() {
        const {isLoading, contacts} = this.state;
            return (
                <div className="App">
                    <header>
                        <h1>fetch data</h1>
                    </header>
                </div>
                
            );
        }
}

//<div className={` content ${isLoading? 'its-loading' : }`}>