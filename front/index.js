
const apiCall = async () => {
  const callToApi = await fetch('http://localhost:3000')
  const response = await callToApi.json();
  console.log('respose -->', response);
  return response
}

const showResult = async () => {
  const data = await apiCall();
  console.log(data);
}

showResult();