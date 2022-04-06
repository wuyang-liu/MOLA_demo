import React from 'react';
import Question from "./Question";
import {questions} from "../constants/questions";
import shuffle from "../util/util";

const axios = require('axios').default;
let questionUsed = shuffle([...questions]).slice(0, 10);

const Survey = props => {

  const [options, setOptions] = React.useState([]);
  const [username, setUsername] = React.useState({});


  const handleSubmit = event => {
    event.preventDefault();
    console.log(options);
    options.sort((o1, o2) => o1.qid - o2.qid);
    console.log(options);
    axios({
      method: 'post',
      url: 'http://localhost:3000/entries',
      data: {username, options},
    }).catch(err => {
      console.log(err)
    });

    alert("Your survey has been recorded");
    window.open('/');
  }

  // React.useEffect(() => {
  //   questionUsed = shuffle(questions).slice(0,10);
  // })

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
        <input type="text" className="form-control" aria-label="Sizing example input"
               aria-describedby="inputGroup-sizing-default"
               onChange={(event) => {
                 setUsername(event.target.value);
                 console.log(username);
               }}
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
