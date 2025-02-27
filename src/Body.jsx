import React, { useState } from 'react'
import "./Body.css"

function Body() {

    function aviso() {
        alert('Celulares e jogos são proibidos no laboratório. Cada vez que alguém fizer isso a equipe perde um ponto na sprint corrente da SA.')
    }

    const [temperatura, setTemperatura] = useState("")
    const [escala, setEscala] = useState("celsius")

    const converterTemperatura = () => {

        if(temperatura === ""){
            alert('Valor inválido!')
            return;
        }

        const temperaturaNumero = parseFloat(temperatura)
        if (isNaN(temperaturaNumero)) {
            alert('Insira um número válido')
            return;
        }

        let celsius, fahrenheit, kelvin;

        if (escala === "celsius") {
            celsius = temperaturaNumero
            fahrenheit = (celsius * 9) / 5 + 32;
            kelvin = celsius + 273.15;
        } else if (escala === "fahrenheit") {
            fahrenheit = temperaturaNumero
            celsius = (fahrenheit - 32) * 5 / 9;
            kelvin = celsius + 273.15;
        } else if (escala === "kelvin") {
            kelvin = temperaturaNumero;
            celsius = kelvin - 273.15;
            fahrenheit = (celsius * 9) / 5 + 32;
        }

        alert(`Celsius: ${celsius.toFixed(2)}°C\nFahrenheit: ${fahrenheit.toFixed(2)}°F\nKelvin: ${kelvin.toFixed(2)}°K`);
    }

    return (
        <div>
            <div>
                <button onClick={aviso}>BOTÃO</button>
            </div>
            <div>
                <input
                    type="number" 
                    value={temperatura}
                    onChange={(e) => setTemperatura(e.target.value)}
                    placeholder='Digite a temperatura'
                    />

                <select onChange={(e) => setEscala(e.target.value)}>
                    <option value="celsius">Celsius</option>
                    <option value="fahrenheit">Fahrenheit</option>
                    <option value="kelvin">Kelvin</option>
                </select><br />
                <button onClick={converterTemperatura}>
                    CONVERTER
                </button>
            </div>
        </div>
    )
}

export default Body