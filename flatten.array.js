let arr=[1,[2,[3],4],5];
let result=[]

function flatten(arr){

    for(let i of arr){
        if(Array.isArray(i)){
            flatten(i)
        }else{
        result.push(i)

        }
    }
    return result
}

console.log(flatten(arr))