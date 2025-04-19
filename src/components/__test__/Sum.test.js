import { Sum } from "../sum";


    test("this function should calculate the sum of two numbers",()=>{

        const result  = Sum(3,5);

        //assertion

        expect(result).toBe(8);


    });