import { render,screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

 test("should load contact us component",()=>{

    render(<Contact/>);

    const heading  = screen.getByRole("heading");

    //assertion
    expect(heading).toBeInTheDocument();  

 });

 test("should load the button component",()=>{
   render(<Contact/>);

   const button = screen.getByRole("button");

   expect(button).toBeInTheDocument();

 });

 test("should load 2 input boxes on the contact",()=>{
   render(<Contact/>);
   //querying
   const inputboxes = screen.getAllByRole("textbox");
   //assertion
   expect(inputboxes.length).toBe(2);
 });  