const logo1= require('../Image/logoDocters1.png');
const logo2= require('../Image/logoDoctors2.png');
const logo3= require('../Image/logoDoctors3.png');
const logo4= require('../Image/logoDoctors4.png');

interface DT{
    id:number,
    name:string,
    hospital:string,
    optician:string,
    sdt:string,
    lasted:string,
    logo:string,

}

const Doctor:DT []= [
    {id:1,name:'DR.Liu Zhang',logo:logo1,hospital:'SengKang Hospital',optician:'Allergist | Optician',sdt:'023 330 4292',lasted:'Lastest visited: 20/5/2020'},
    {id:2,name:'DR.Liu Zhang',logo:logo2,hospital:'SengKang Hospital',optician:'Allergist | Optician',sdt:'023 330 4292',lasted:'Lastest visited: 20/5/2020'},
    {id:3,name:'DR.Liu Zhang',logo:logo3,hospital:'SengKang Hospital',optician:'Allergist | Optician',sdt:'023 330 4292',lasted:'Lastest visited: 20/5/2020'},
    {id:4,name:'DR.Liu Zhang',logo:logo4,hospital:'SengKang Hospital',optician:'Allergist | Optician',sdt:'023 330 4292',lasted:'Lastest visited: 20/5/2020'}
];

export {DT,Doctor};