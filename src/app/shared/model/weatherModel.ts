export class weatherResponse{
   name: string;
   main:main;
   wind:wind;
}

export class weatherForcast{
  city:city;
  list = new forcastlist();
  constructor(){
    this.city = {name:'',id:''}
  }
}

export class main{
  temp: number
}

export class wind{
  deg:string;
  gust:string;
  speed:string;
}

export class city{
  id:string;
  name:string;
}

export class forcastlist {
   main:main;
   wind:wind;
   dt_txt:string;
   constructor(){
     this.main = {temp: 0}
     this.wind = {speed:'',deg:'',gust:''}
   }
}
