import { act } from "react"
import Fetch from "../Fetch.js"
import { render, fireEvent, cleanup, screen } from "@testing-library/react"

afterEach(cleanup)

test('starts without any joke', () => {
  render (<Fetch />);
  
  const post = getByTestId("fetch-joke");

  expect(post).not.toBeInTheDocument();
  

});

//psuedo code
//ensure the component renders and check if the post is visiable in the component 
/*
1️⃣ [Initial State Test] The first test should verify that component starts without any post.

- Render the component
- Assert that the post element doesn't exist */