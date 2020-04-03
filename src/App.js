import React from 'react';
import logo from './assets/logo.svg';
import coworkers from './assets/coworkers.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        {/* navbar */}
        <div className="navBar">
          <div className="Logo">
              <h1>
                  <img src={logo} alt="tofi logo" />
              </h1>
          </div>
          <button className="startbtn">
            Get started
          </button>
        </div>

        {/* question container */}
        <div className="wrapper">
            <div className="Image-Partition">
              <div className="title">
                  <h1> Speak your mind</h1>
                  <h5>
                    Take a survey with us and let us
                    know what you would want us to do for you.
                    Help us make a better decision.
                  </h5>
              </div>
              <div className="image">
                  <img src={coworkers} alt="questions survey"/>
              </div>
            </div>

            {/* question partion */}
            <div className="question-partion">
              <div className="question-title">
                  <h1>Tax Revenue Mobilisation</h1>
                  <div className="page-refrence">
                      <hr/>
                      <h4> 2 0f 5</h4>
                  </div>
              </div>
              <div className="questions">
                <div className="question-one">
                    <h1>1. In your opinion, how do you best describe the taxes you pay?</h1>
                    <ul>
                        <li>
                            <input type ="radio" name= "selector"/>
                            <label>Too much tax</label>
                        </li>
                        <li>
                            <input type="radio" name ="selector"/>
                            <label> About the right amount</label>
                        </li>
                        <li>
                            <input type="radio" name ="selector"/>
                            <label>Not enough tax</label>
                        </li>
                        <li>
                            <input type="radio" name ="selector"/>
                            <label> Not sure/Don’t Know</label>
                        </li>
                        <li>
                            <input type="radio" name ="selector"/>
                            <label> Not so comfortable</label>
                        </li>
                    </ul>
                </div>
                <div className="question-two">
                    <h1>2.  How comfortable is your employeers work?</h1>
                    <ul>
                        <li>
                            <input type ="radio" name= "selector1"/>
                            <label>Extremely comfortable</label>
                        </li>
                        <li>
                            <input type="radio" name ="selector1"/>
                            <label> Very comfortable</label>
                        </li>
                        <li>
                            <input type="radio" name ="selector1"/>
                            <label>Some what comfortable</label>
                        </li>
                        <li>
                            <input type="radio" name ="selector1"/>
                            <label> Not at all comfortable</label>
                        </li>
                        <li>
                            <input type="radio" name ="selector1"/>
                            <label> Not so comfortable</label>
                        </li>
                    </ul>
                </div>
                <div className="question-three">
                    <h1>3. What do youth think is affecting tax revenue mobilization in Uganda?</h1>
                    <ul>
                        <li>
                            <input type ="radio" name= "selector2"/>
                            <label>Non-compliance</label>
                        </li>
                        <li>
                            <input type="radio" name ="selector2"/>
                            <label> Unfair tax holidays</label>
                        </li>
                        <li>
                            <input type="radio" name ="selector2"/>
                            <label>Some what comfortable</label>
                        </li>
                        <li>
                            <input type="radio" name ="selector2"/>
                            <label> Not at all comfortable</label>
                        </li>
                        <li>
                            <input type="radio" name ="selector2"/>
                            <label> Not so comfortable</label>
                        </li>
                    </ul>
                </div>
              </div>
              <div className="question-buttons">
                  <button className="previousbtn">
                    previous
                  </button>
                  <button className="nextbtn">
                    next
                  </button>
              </div>
            </div>
        </div>
    </div>
  );
}

export default App;
