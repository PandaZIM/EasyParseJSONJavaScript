let promise = function(){

    return Promise(function(resolve, reject){

        let xhr = XMLHttpRequest()
        xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos')
        xhr.send(null)

        xhr.onreadystatechange = function(){

            if(xhr.readystate === 4){
                if(xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText))
                }else{
                    reject('Erro')
                }
            }
        }
    })
}

promise()
.then(function(response){
    console.log(response);
})
.catch(function(error){
    console.warn(error)
})
