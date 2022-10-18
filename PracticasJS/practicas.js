function imprime1aN(n){
    for( let i = 1; i <= n; i++ ){
        if( i % 2 === 0){
            console.log(i)
        } if ( i > 240){
            for( let j = 1; j < 13; j++){
                console.log(j)

            }
            return
            

        }
    }
}

//console.log(imprime1aN(300))

function matriz(n, m){
    let j = 0
    let i = 0
    while(i < n){
        while(j < m){
            console.log(i, j)
            j = j + 1
        }
        j = 0
        i = i + 1
    }
}
console.log(matriz(2,3))


