import React, {Component} from 'react';
import {PostData} from '../../services/PostData';
import {Redirect} from 'react-router-dom';
import './Signup.css';

class Signup extends Component {

  constructor(props){
    super(props);
   
    this.state = {
     username: '',
     password: '',
     email: '',
     name: '',
     redirectToReferrer: false,
     items: []
    };

    this.signup = this.signup.bind(this);
    this.onChange = this.onChange.bind(this);

  }
 

  signup() {
    if(this.state.username && this.state.password && this.state.email && this.state.name){
       fetch("http://localhost/demo/ReactLoginAPI/api.php?registeration=yes&uname=" + this.state.username + "&pass="+this.state.username)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            isLoaded: true,
            items: result.items
          });
           // event.preventDefault();
           alert("success");
           window.location.href="login";
          // <Redirect to="/login"/>;
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
      // alert("yesh");
       // fetch('http://localhost/demo/api.php').then(function (response) {
      //  fetch('http://localhost/demo/ReactLoginAPI/api.php?registeration=yes&uname=' + this.state.username + '&pass='+this.state.username).then(function (response) {
      //   console.log(response);
      //   alert(response);
      //   // return response;
      // });
      //  .then(res => res.json()).then(function (result) {

      //   console.log(result);
      //   // console.log(JSON.stringify(result));
      //   // console.log(JSON.object(result));
      //   // alert(result);
      //   // alert(result.msg);

      //   // this.setState({ posts: result.data.children});
      //   // that.setState({ posts: result.data.children, lastPostName: result.data.children[result.data.children.length - 1].data.name });

      //   // console.log(that.state.posts);
      // });


    // PostData('signup',this.state).then((result) => {
    //   // alert("tes");
    //   let responseJson = result;
    //   console.log(responseJson);
    //   if(responseJson.userData){         
    //     sessionStorage.setItem('userData',JSON.stringify(responseJson));
    //     this.setState({redirectToReferrer: true});
    //   }
      
    //  });
    }
  }

 onChange(e){
   this.setState({[e.target.name]:e.target.value});
  }

  render() {
    if (this.state.redirectToReferrer || sessionStorage.getItem('userData')) {
      return (<Redirect to={'/home'}/>)
    }
   const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    }  else {

    return (
      
      <div className="row " id="Body">
        
        <div className="medium-5 columns left">
        <h4>Signup</h4>
        <label>Email</label>
        <input type="text" name="email"  placeholder="Email" onChange={this.onChange}/>
        <label>Name</label>
        <input type="text" name="name"  placeholder="Name" onChange={this.onChange}/>
        <label>Username</label>
        <input type="text" name="username" placeholder="Username" onChange={this.onChange}/>
        <label>Password</label>
        <input type="password" name="password"  placeholder="Password" onChange={this.onChange}/>
        
        <input type="submit" className="button" value="Sign Up" onClick={this.signup}/>
        <a href="/login">Login</a>
        </div>
        
      </div>
    );
  }
  }
}

export default Signup;