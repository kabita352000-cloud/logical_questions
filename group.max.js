let arr = [
    { name: "kabita", dep: "IT", salary: 60000 },
    { name: "savi", dep: "Social", salary: 30000 },
    { name: "manvi", dep: "IT", salary: 80000 },
    { name: "alok", dep: "sales", salary: 90000 }
]

let max=arr[0];
let sec=arr[0]


for(let i of arr){
    if(i.salary>max.salary){
        sec=max
        max=i
    }else if(i.salary>sec.salary && i.salary !=max.salary){
        sec=i
    }
}

console.log(max)
console.log(sec)