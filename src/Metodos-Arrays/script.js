const data = [
   {name: 'Otavio', age: 29, salary: 1650, active: true, team:'Front-End', bonus: 0 },
   {name: 'Ana Pula', age: 12, salary: 3000, active: true, team:'Back-End', bonus: 0 },
   {name: 'Alice', age: 37, salary: 3350, active: true, team:'Desing', bonus: 0 },
   {name: 'Daniel', age: 27, salary: 4100, active: true, team:'Fullstack', bonus: 0 },
   {name: 'Romin', age: 32, salary: 2200, active: true, team:'Dev', bonus: 0 },
   
   
]

const user = data.find((user) => {
    return user.age >= 30
})

console.log(user) 
/* Método find
 usado para procurar idade >= 30
nao importa se a idade que vier primeiro for maior que a próxima idade

ex. name: Alice age: 37
    name: Romin age: 32
    
O nome Alice ira aparecer primeiro mesmo o Romin tendo a idade menor 
pois ele procura a primeira idade >= a 30 da lista e não retornara mais nenhum outro
pois ele ja esta satisfeito com o resultado */


const users = data.filter((users) => {
    return users.salary >= 4000 && users.active 
  })
  
console.log(users)

/*
Metodo filter
 usarado para filtrar os dados com a salário >= 400
e saber se a pessoa é ativa ou não (true ou false)
diferente do find ele filtra todos que são maior que 4000 e são ativas
não apenas 1 resultado.
*/

const indexUser = data.findIndex((user) => {
    return user.name === 'Alice'
   })
  
    console.log(indexUser)
    console.log(data[indexUser].salary = 4500)
    console.log(data[indexUser].active = false)
    console.log(data)

/*
findIndex 
usado para buscar a posição da pesquisa 
e podendo manipular os dados
ex. podenos mudar o active de 'true' para 'false' 
dentre também outras informações.
*/
  
const iten = data.map((user) =>{

    if(user.salary <= 2500){
      user.salary += 900;
      user.bonus += 3;
    }
    return {
      name: user.name,
      salary: user.salary,
      bonus: user.bonus,
    }
  
  })

  console.log(iten)

/*
Método Map
usado para percorrer todo o nosso array 
e econtrar a condição que estamos pedindo 
ex. se o salário for <= 2500 ele modifica 
e acrescenta +900 como no ex. abaixo
fora outras manipulações possiveis fazer.
*/

console.log(data.reverse())
/*
Código usado para inverter o nosso array 
contando de trás para frente 
ou de baixo para cima.
*/

const userInactive = data.some((user)=>{
  return user.active === false 
 })

 console.log(userInactive)

 /*
 Método some
 Usado para percorrer nossa lista e caso tenha 
 um item === a false 
 ele não retorna o item com o active false 
 e sim ele retorna 'true' como resposta 
 ou 'false' caso não tenha nenhum item 
 comforme pedimos para verificar.
 */

const userActive = data.every((user)=>{
  return user.active === true
})
console.log(userActive)
 /*
Método Every
o método every diferente do some, 
ele percorre toda nossa lista e retorna como 
'true' ou 'false'...
porem, todos os item tem que esta com o active como true 
caso um esteja como false ele retornara 'false'.

 */







