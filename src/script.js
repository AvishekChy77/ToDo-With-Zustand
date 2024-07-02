//  function greet (name) {
//     console.log('hello', name)
//  }

//  function user (callback) {
//     let name = 'Sakib'

//     callback(name)
//  }

// user(greet)

function counter () {
    return [4, 5]
}

// const nums = [{id:2, text:"sasa"}]
const nums = [2,5]

const sas = nums.map(obj => obj+=5)

console.log(sas, nums)