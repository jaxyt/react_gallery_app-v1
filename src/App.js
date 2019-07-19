import React, {Component} from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import {apiKey} from './components/config';
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import Gallery from './components/Gallery';

class App extends Component {
  state = {
    pics: [
      "https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg",
      "https://farm5.staticflickr.com/4342/36338751244_316b6ee54b.jpg",
      "https://farm5.staticflickr.com/4343/37175099045_0d3a249629.jpg",
      "https://farm5.staticflickr.com/4425/36337012384_ba3365621e.jpg"
    ],
    loading: false
  }

  componentDidMount(){
    this.performSearch();
  }

  /**
   * Uses the Unsplash api to get search results
   */
  performSearch = (query = "cats") => {
    this.setState({loading: true});
    axios.get(`https://api.unsplash.com/photos/random?client_id=${apiKey.accessKey}&query=${query}&count=3`)
      .then( (res) => {
        let pictures = [];
        for (let i = 0; i < res.data.length; i++) {
          const pic = res.data[i].urls.full;
          pictures.push(pic);
        }
        this.setState({pics: pictures, loading: false});
      })
      .catch( (err) => {
        this.setState({
          pics: [],
          loading: false
        });
      })
  }
  
  /**
   * Passes a title parameter to dynamically title pages
   */
  Home = (title = "Home") => {
    return (
      <div className="container">
        <SearchForm onSearch={this.performSearch}/>
        <Nav onSearch={this.performSearch}/>
        {this.state.loading === true ? <h1>Loading...</h1>:<Gallery gallery={title} pics={this.state.pics}/>}
      </div>
    );
  }


  render(){
    return (
      <HashRouter basename="react_gallery_app-v1">
        <div>
          <Switch>
            <Route exact path="/" render={()=> this.Home()}/>
            <Route path="/dogs" render={()=> this.Home("Dogs")}/>
            <Route path="/cats" render={()=> this.Home("Cats")}/>
            <Route path="/computers" render={()=> this.Home("Computers")}/>
            <Route path="/search/:name" render={({match})=> this.Home(`Search Results For: ${{match}.match.params.name}`)}/>
            <Route render={()=><div><h1>Error: 404</h1><p>Sorry! This page does not exist</p><li><img src="https://media.giphy.com/media/5kq0GCjHA8Rwc/giphy.gif" alt="" /></li></div>} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
