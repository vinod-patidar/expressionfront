import { useState } from 'react';
import logo from '../logo.svg';

import { expressionApi } from '../api';
import { isValidExpression, hasNestedOperators } from '../utils';

const ExpressionEvaluate = () => {
  const [error, setError] = useState(undefined);
  const [value, setValue] = useState(undefined);
  const [result, setResult] = useState(undefined);

  const handleSubmit = async () => {
    const newValue = value.replaceAll(" ", "");
    if (newValue) {
      if (isValidExpression(newValue) && !hasNestedOperators(newValue)) {
        try {
          const response = await expressionApi.getEvaluate(newValue);
          if (response.success) {
            setResult(String(response.result))
            setError(undefined);
          } else {
            setResult(undefined);
            setError(response.error ? `Server Error: ${response.error}` : response.expression);
          }
        } catch (e) {
          setResult(undefined);
          setError(e.message);
        }
      } else {
        setResult(undefined);
        setError('The string contains an invalid operator. Supported only +, - operator and not be nested.')
      }
    } else {
      setResult(undefined);
      setError('Enter the arithmetic expression.')
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Enter Expression i.e. 2+3</p>
        {result && <p className="success">Output: {result}</p>}
        
        <input
          type="text"
          name="expression"
          placeholder="Enter Expression"
          className="txtInput inputBorder"
          maxLength={255}
          onChange={(e) => setValue(e.target.value)}
        />
        {error && <p className="error">{error}</p>}
        
        <p><button disabled={!value} className="btn blues" onClick={handleSubmit}>Submit</button></p>
      </header>
    </div>
  );
};

export default ExpressionEvaluate;