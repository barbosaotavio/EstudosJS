import './App.css'

function App() {
 

  const data = [
    {name: 'Otavio', age: 13, salary: 3650, active: true, team:'Front-End', bonus: 0 },
    {name: 'Ana Pula', age: 27, salary: 4000, active: false, team:'Back-End', bonus: 0 },
    {name: 'Alice', age: 22, salary: 3350, active: true, team:'Desing', bonus: 0 },
    {name: 'Daniel', age: 31, salary: 3900, active: true, team:'Fullstack', bonus: 0 },
    {name: 'Romin', age: 21, salary: 2500, active: true, team:'Dev', bonus: 0 },
    
 ]

  const users = data.map((user, index) =>{

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

  console.log(users)
  console.log(data)

}

export default App
