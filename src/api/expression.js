// Define your API endpoint here...
import { API_HOST } from "../constants";

const getEvaluate = async (newValue) => {
  try {
    const response = await fetch(`${API_HOST}/exp_evaluate/` , {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        expression: newValue
      })
    })
    const res = await response.json();
    return res;
  } catch (error) {
    throw error;
  }
}

// eslint-disable-next-line
export default {
  getEvaluate
}
