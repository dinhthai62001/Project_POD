

interface PF {
    gender:string,
    age:number,
    birthday:string,
    phone:string,
    emergency:string,
    location:string,
    health:string,
    blood:string,
    allergy:string,
    activeness:string,

}

const Profile:PF[] =[
    {
        gender:'Made',
        age:58,
        birthday:'14/11/1963',
        phone:'065 267 8566',
        emergency:'084 556 4479',
        location: 'Hose, Avenue, Tampines',
        health: '-',
        blood:'AB',
        allergy: '-',
        activeness:'-',

        

    }
];

export{PF,Profile};