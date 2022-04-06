import React from 'react';
import Option from "./Option";


const Question = props => {
  const {index, qid, options, setOptions, questionText} = props;
  // const [optionIndex, setOptionIndex] = React.useState(0);

  const optionList = [
    {optionIndex: 1, optionName: "Strongly Disagree"},
    {optionIndex: 2, optionName: "Disagree"},
    {optionIndex: 3, optionName: "Slightly Disagree"},
    {optionIndex: 4, optionName: "neutral"},
    {optionIndex: 5, optionName: "Slightly Agree"},
    {optionIndex: 6, optionName: "Agree"},
    {optionIndex: 7, optionName: "Strongly Agree"}
  ];

  const onSelectChange = event => {
    console.log(qid);
    setOptions( (prevOptions) => [
      ...prevOptions,
      {
        qid,
        scale: event.target.value,
      },
    ]);
  };


  return (
    <>
      <p className="fw-bold">{(index + 1) +'. ' + questionText}</p>
      {optionList.map(optionItem => (
        <Option
          key={optionItem.optionIndex}
          qid={qid}
          onSelectChange={onSelectChange}
          options={options}
          setOptions={setOptions}
          optionIndex={optionItem.optionIndex}
          optionName={optionItem.optionName}
        />))}
    </>
  );
};

export default Question;
