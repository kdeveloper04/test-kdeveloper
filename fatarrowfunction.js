class student{
    constructor(name,age,marks){
        this.name=name;
        this.age=age;
        this.marks=marks;
        
    }
   
    print(name,age,phone,marks){
        console.log(`Name of student is ${this.name},
        age is ${this.age},
        BoardMarks is ${this.marks}`)
}
eligiblefForPlacements(minAge){
    console.log(this);
    return (minMarks)=>{
        console.log("Is eligible for placment for company ?",this)
        if(this.marks>minMarks && this.age>minAge)
        {
            console.log(this.name +" is ready for placements");
        }
        else
        {
            console.log(this.name +" is not ready for placements");
        }

    }
 }
}
let obj=new student("Dev",20,90);
let obj1=new student("Ram",14,40);
let obj2=new student("Shyam",18,30);

obj.eligiblefForPlacements(18)(40);


