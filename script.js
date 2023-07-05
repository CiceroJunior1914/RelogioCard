// função para atualizar a hora/ pegar hora atual
const titulo = document.querySelector("#titlo")

function atualizarRelogio(){
    const hora = document.querySelector(".horas")
    const minutos = document.querySelector(".minutos")
    const segundos = document.querySelector(".segundos")

    const now = new Date()

    const hs = now.getHours().toString().padStart(2,'0')
    const min = now.getMinutes().toString().padStart(2,'0')
    const sec = now.getSeconds().toString().padStart(2,'0')

    hora.textContent = hs
    minutos.textContent = min
    segundos.textContent = sec
    
}

function verificarHorario(hora){
    if(hora >=5 && hora < 12){
        titulo.textContent = "bom dia"
        console.log("bom dia")
    }else if(hora >= 12 && hora <=18){
        titulo.textContent = "boa tarde"
        console.log("boa tarde")

    }
}
setInterval(atualizarRelogio,1000)

// pegar o dia a semana 

function diaSemana(){
    const DiasElement = document.querySelector("#dataSemana")
    const diaHj = new Date();
    const diaS = diaHj.getDay()
    
    switch(diaS){
        case 0:
            DiasElement.innerHTML = "Domingo"
        break;
        case 1:
            DiasElement.innerHTML = "Segunda-Feira"
        break;
        case 2: 
            DiasElement.innerHTML = "Terça-feira"
        break;
        case 3:
            DiasElement.innerHTML = "Quarta-Feira"
        break;
        case 4:
            DiasElement.innerHTML = "Quinta-Feira"
        break
        case 5:
            DiasElement.innerHTML = "Sexta-Feira"
        break;
        case 6:
            DiasElement.innerHTML = "Sabado"
        break
    }
}
diaSemana()

// pegar a data atual 

function dataAtual(){
    const dataA = document.querySelector("#dataId")
    const data = new Date()

    const dia =  String(data.getDate()).padStart("2",0)
    const mes = String(data.getMonth()+1).padStart("2",0)
    const ano = String(data.getFullYear())

    const dataFormatada = `${dia}/${mes}/${ano}`

    dataA.innerHTML = dataFormatada
    
}

dataAtual()


function getUserPosition() {
    let url = ''
    navigator.geolocation.getCurrentPosition((pos) => {
      let lat = pos.coords.latitude
      let long = pos.coords.longitude
      url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=63e4aa0798d940085d27aa573e726998`
      fetchApi(url)
      console.log(url)
    })
  }
  
  function fetchApi(url) {
    let city = document.querySelector('#cidade')
    let temperature = document.querySelector('#tempLocal')
    let humidity = document.querySelector('#umidad')

  
    fetch(url)
    .then((data) => {
      return data.json()
    })
    .then((data) => {
      const tempInCelsius = ((5/9) * (data.main.temp-32)).toFixed(1);
      city.textContent      = data.name
      temperature.innerHTML = tempInCelsius
      humidity.innerHTML    = data.main.humidity
      console.log(data)
      verificarTempo(10)
    })
    .catch((err) => {
      city.innerText = `Impossível acessar o OpenWeather. Verifique a sua conexão.`;
      temperature.innerHTML = `-`;
    })
  }
 
function verificarTempo(clima){
    if(clima < 28){
        let imgTemp = document.querySelector("#tempImg")

        imgTemp.setAttribute('src','img/frio.svg')
        console.log("frio")
    }else{
        console.log("calor")
    }
}
getUserPosition();
