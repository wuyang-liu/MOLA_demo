import React from 'react';

const Option = props => {
  const {qid, onSelectChange, optionIndex, optionName} = props;

  return (
    <div className="form-check mb-2">
      <input className="form-check-input" type="radio" name={qid} id={qid} value={optionIndex} onChange={onSelectChange} required/>
      <label className="form-check-label" htmlFor={qid}>
        {optionName}
      </label>
    </div>
  );
};

export default Option;
