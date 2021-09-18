//Ejercicio 0
//En este ejercicio la funcion va a resolver solo el primer resolve y ahi acaba por lo cual va a alertar 1


//Ejercicio 1
let delay = function(ms) {
    return new Promise = function(resolve) {
      setTimeout(()=> resolve(`Se va a ejecutar despues de ${ms}ms`),ms);
    }
  }
  
  delay(10000).then(alert)
  
  
//Ejercicio 2
//Estas lineas de codigo van a funcionar de la misma manera ya que en el primer parametro es el handler del resolve y en segundo es el parametro de error handler
  
  
//ejercicio 3
const url = 'https://www.boredapi.com/api/activity/'
  
const loadJson = async function(url) {
    const res = await fetch(url)
    if (res.status == 200) {
      console.log()
      console.log(await res.json())
    } else {
      throw new Error(res.status)
    }
  }
  
  loadJson(url)

  
//Ejercicio 4
class HttpError extends Error {
    constructor(response) {
      super(`${response.status} for ${response.url}`);
      this.name = "HttpError";
      this.response = response;
    }
  }
  
  function loadJson(url) {
    return fetch(url).then((response) => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new HttpError(response);
      }
    });
  }
  
  const demoGithubUser = async function () {
    try {
      let name = prompt("Enter a name?", "iliakan");
      const user = await loadJson(`https://api.github.com/users/${name}`);
      alert(`Full name: ${user.name}.`);
      return user;
    } catch (err) {
      console.dir(err);
      if (err instanceof HttpError && err.response.status == 404) {
        alert("No such user, please reenter.");
        return demoGithubUser();
      } else {
        throw err;
      }
    }
  };
  
  demoGithubUser();


  
//Ejercicio 5
async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000)); return 10;
    }
  function f() {
      wait().then(console.log)
    }
  
  
//Ejercicio 6
//El .catch se va a activar ya que el .catch tambien se activa con un error


//Ejercicio 7
const printNumbers = function (desde, hasta) {
    setInterval(() => {
    if (desde > hasta) {
      return
    }
    console.log(desde++)
    }, 1000)
  }
  
printNumbers(2, 8)


const printNumbersOut = function (desde, hasta) {
    setTimeout(() => {
      console.log(desde)
      if (desde < hasta) {
      printNumbers2(desde + 1, hasta)
    }
    }, 1000)
  }
  
printNumbers2(2, 8)