import { ConvertTempPipe } from "./convert-temp.pipe";

describe("Temperature converter",()=>{

    let temp;

    beforeEach(()=>{
      temp = new ConvertTempPipe()
    })

   it("should return the value of '41.00F",()=>{
      let result = temp.transform(5,'F');

      expect(result).toEqual('41.00°F')
   })

   it("should return the value of '5.00C",()=>{
    let result = temp.transform(41,'C');

    expect(result).toEqual('5.00°C')
 })

 it("should return the value of '10' ",()=>{
    let result = temp.transform(10);

    expect(result).toEqual('10°')
 })

})
