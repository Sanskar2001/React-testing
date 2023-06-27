import { render, renderHook, screen,act } from '@testing-library/react';
import App, { add, myPromise } from './App';
import userEvent from '@testing-library/user-event';
import { useCounter } from './App';
import  axios from 'axios';
jest.mock('axios')
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText("Hello");
//   expect(linkElement).toBeInTheDocument();

// });

// test('renders label',()=>{
//   render(<App/>)
//   const labelEle=screen.getByLabelText('Hello2');
//   expect(labelEle).toBeInTheDocument();
// })



// test('renders button',()=>{
//   render(<App/>)
//   const labelEle=screen.getAllByRole('button');
//   expect(labelEle.length).toBe(2);
// })


// test('renders input',()=>{
//   render(<App/>)
//   const labelEle=screen.getByPlaceholderText('search');
//   expect(labelEle).toBeInTheDocument();
// })

describe("Test",()=>{



  beforeEach(() => {
    render(<App />);
  });


test('renders learn react link', () => {

  const linkElement = screen.getByText("Hello");
  expect(linkElement).toBeInTheDocument();

});

test('renders label',()=>{

  const labelEle=screen.getByLabelText('Hello2');
  expect(labelEle).toBeInTheDocument();
})



test('renders button',()=>{

  const labelEle=screen.getAllByRole('button');
  expect(labelEle.length).toBe(2);
})


test('renders input',()=>{

  const labelEle=screen.getByPlaceholderText('search');
  expect(labelEle).toBeInTheDocument();
})

test('render span',()=>{
  const span=screen.getByText("Sample Text");
  expect(span).toBeInTheDocument();
})

test('click button',()=>{

  userEvent.click(screen.getByRole('button',{name:"Click me"}))
  const heading=screen.getByTestId('h2');
  expect(heading).toHaveTextContent("1");


})

test('hook testing',()=>{

    const {result}=renderHook(()=>useCounter())
    expect(result.current[0]).toEqual(0);

    act(()=>{
      result.current[1](2);
    })

    expect(result.current[0]).toBe(2);
})


test('mocking add',()=>{
  const ans=add(1,2);
  expect(ans).toBe(3);

})

test('mocking axios request',()=>{
  
  const mockResponse = { data: 'Mocked response' };
  axios.get=jest.fn().mockReturnValue(mockResponse);

  // Mock axios.get to return a resolved Promise with the mockResponse
  axios.get = jest.fn().mockResolvedValueOnce(mockResponse);
  myPromise.then=jest.fn().mockResolvedValueOnce(mockResponse);


 

  myPromise.then((res)=>{
    expect(res.data).toEqual('Mocked response');
  })

  expect(axios.get).toHaveBeenCalledWith('https://mock-api-test-y4or.onrender.com/')
 


})


})

