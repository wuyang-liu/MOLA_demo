import React from 'react';
import Question from "./Question";
import {questions} from "../constants/questions";
import shuffle from "../util/util";
import {URL} from "../constants/constants";

const axios = require('axios').default;
let questionUsed = shuffle([...questions]).slice(0, 10);

const Survey = props => {

  const [options, setOptions] = React.useState([]);
  const [username, setUsername] = React.useState('');
  const [pageLoadedTime, setPageLoadedTime] = React.useState(Date.now());

  React.useEffect(()=>{
    setPageLoadedTime(Date.now());
    console.log("pageLoadedTime",pageLoadedTime);
  }, []);


  const handleSubmit = event => {
    event.preventDefault();
    options.sort((o1, o2) => o1.qid - o2.qid);
    const minutesElapsed = ((Date.now() - pageLoadedTime) / 60000).toFixed(1);
    // console.log("minutesElapsed", minutesElapsed);
    axios({
      method: 'post',
      url: `${URL}/entries`,
      data: {username, minutesElapsed, options},
    }).catch(err => {
      console.log(err)
    });

    alert("Your survey has been recorded");
    document.getElementById('survey-form').reset();
    setUsername('');
  }

  return (

    <form onSubmit={handleSubmit} className=" bg-white px-4" id='survey-form' action="">
      {questionUsed.slice(0, 10).map((question, index) =>
        <Question
          index={index}
          key={question.questionNo}
          qid={question.questionNo}
          options={options}
          setOptions={setOptions}
          questionText={question.questionText}
        />
      )}


      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">Username</span>
        <input type="text"
               className="form-control"
               id="username-input"
               aria-label="Sizing example input"
               aria-describedby="inputGroup-sizing-default"
               onChange={(event) => {
                 setUsername(event.target.value);
                 console.log(username);
               }}
               value={username}
               required
        />
      </div>

      <div className="text-end">
        <button type="submit" className="btn btn-primary">Submit</button>
      </div>
    </form>
  );
};

export default Survey;
