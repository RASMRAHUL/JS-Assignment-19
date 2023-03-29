var p = new Promise((resolve, reject) => {
    reject(Error('The Fails!'))
    })
    .catch(error => console.log(error))
    .then(error => console.log(error))
    

    //OUTPUT

    // at Module._compile (node:internal/modules/cjs/loader:1105:14)
    // at Object.Module._extensions..js (node:internal/modules/cjs/loader:1159:10)
    // at Module.load (node:internal/modules/cjs/loader:981:32)
    // at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    // at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)
    // at node
    // undefined