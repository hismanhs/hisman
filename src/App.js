
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as contactAction from './Components/actions';
import {Search} from './Components/icons/search'
import {Close} from './Components/icons/close'
import "./App.css";

export const NewPost = (props) => {
  return <div className='inputtable'>
  <tr>
      <td>
          Title
      </td>
      
      <td>
      <input type="text" onChange={props.handleChangetitle} />
      </td>
  </tr>

  <tr>
      <td>
          Summary
      </td>
      <td>
          <textarea type="text" cols="30" rows="5" onChange={props.handleChangesummary}/>        
      </td>
  </tr>
  <form onSubmit={props.handleSubmit}>
   <input type="submit" />
  </form>
</div>
}

export const Publisher = (props) => {
  return <ul className='output'>
            {props.post.map((item, i) => <li key={i}>
  <div className='publisherContainer'>
      <div>Post </div>
      <div>
          <span>Title  </span>
          <span>{item.title}</span>
      </div>
      <div>
            <span>Summary </span>
            <span>{item.summary}</span>
      </div>
  </div>
                </li> )}
          </ul>
}

class App extends Component {

  constructor(props){
    super(props);
    this.handleChangetitle = this.handleChangetitle.bind(this);
    this.handleChangesummary = this.handleChangesummary.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSearch = this.handleSearch.bind(this);

    this.state = {
      title: '',
      summary:'',
      tabToShow: 'new_post',
      search:'',
    }
  }

  handleSearch(event){

  }

  handleChangesummary(e){
    this.setState({
      summary:e.target.value
    })
  }

  handleChangetitle(e){
    this.setState({
      title: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault();
    let contact = {
      title: this.state.title,
      summary:this.state.summary
    }
    this.props.createContact(contact);
  }

  render() {
    console.log(this.state.search)
    return(
      <div>
     
        
        <div>
    <div className='search'>
        <div className='wrapper'> 
            <span className='icon'><Search/></span>
            <span className='searchbox'>
                <input onChange={(event)=>
                  
                  {
                    this.setState({search : event.target.value})
                    this.setState({tabToShow: 'publisher'})
                  }
                  
                  }/>
            </span>
            <span className='clearicon'><Close/></span>
        </div>
    </div>
    
    <div className='buttonbar'>
        <div className='newpost' onClick={()=>{
          this.setState({tabToShow: 'new_post'})
        }}>New Post</div>
        <div className='piblisher' onClick={()=>{
          this.setState({tabToShow: 'publisher'})
        }}>Publisher</div>
    </div>
    <br/>
    {this.state.tabToShow === 'new_post' ? 
      <NewPost 
        handleChangetitle={this.handleChangetitle}
        handleChangesummary={this.handleChangesummary}
        handleSubmit={this.handleSubmit}
      />
      : 
      <Publisher post={ this.state.search !== '' ? this.props.post.filter(
        item => item.title.toLowerCase().indexOf(this.state.search) > -1
      ) : this.props.post}/>
    }
    
  </div>

      </div>
    )
  }
}
//read from redux state
const mapStateToProps = (state, ownProps) => {
  return {
    post: state.post
  }
};


//to write to redux state
const mapDispatchToProps = (dispatch) => {
  return {
    createContact: contact => dispatch(contactAction.createContact(contact))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);