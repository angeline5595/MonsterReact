import React,{Component} from 'react';
import './App.css';
import './Component/SearchBoxComponent/SearchBox'
import { CardList } from './Component/CardListComponent/CardList';
import { SearchBox } from './Component/SearchBoxComponent/SearchBox';

class App extends Component
{
  constructor()
  {
    super();
    this.state =
    { 
      monsters:[],
      searchField:''
    };
    
 }
componentDidMount()
{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response=>response.json())
  .then(users=>this.setState({monsters:users}));
 
}
handleChange=(e)=>{
  this.setState({
    searchField:e.target.value
  })
}
  render(){
    const {monsters,searchField}=this.state; 
    const filteredMonsters=monsters.filter(monster=>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return(
      <div className='App'>
        <h1>Monster App</h1>
        <SearchBox
          placeholder='search Monsters' 
          handleChange={this.handleChange}
          />
         <CardList monster={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
