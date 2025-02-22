import './App.css'

function App() {
 

  const data = [
    {name: 'Otavio', age: 13, salary: 1650, active: true, team:'Front-End', bonus: 0 },
    {name: 'Ana Pula', age: 27, salary: 4000, active: false, team:'Back-End', bonus: 0 },
    {name: 'Alice', age: 22, salary: 3350, active: true, team:'Desing', bonus: 0 },
    {name: 'Daniel', age: 31, salary: 5100, active: true, team:'Fullstack', bonus: 0 },
    {name: 'Romin', age: 21, salary: 4500, active: true, team:'Dev', bonus: 0 },
    
 ]

 const indexUser = data.findIndex((user) => {
  return user.name === 'Alice'
 })

  console.log(indexUser)
  console.log(data[indexUser].salary = 4100)
  console.log(data)
}

export default App
