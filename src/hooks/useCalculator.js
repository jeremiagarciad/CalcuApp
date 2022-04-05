import {useRef, useState} from 'react';


const Operadores = {
  sumar: 0,
  restar: 1,
  multiplicar: 2,
  dividir: 3,
}
export const useCalculator = () => {

  const [currentValue, setCurrentValue] = useState('0');
  const [numeroAnterior, setNumeroAnterior] = useState('0');

  const lastOperation = useRef(Operadores)

  const clean = () => {
    setCurrentValue('0');
    setNumeroAnterior("0")
  };

  const buildNumber = numeroText => {
    /// No aceptar doble punto
    if (currentValue.includes('.') && numeroText === '.') return;

    if (currentValue.startsWith('0') || currentValue.startsWith('-0')) {
      // Punto decimal
      if (numeroText === '.') {
        setCurrentValue(currentValue + numeroText);

        // Evaluar si es otro cero, y hay punto
      } else if (numeroText === '0' && currentValue.includes('.')) {
        setCurrentValue(currentValue + numeroText);
      } else if (numeroText !== '0' && !currentValue.includes('.')) {
        setCurrentValue(numeroText);
        
        // Evitar 00000.0
      } else if (numeroText === '0' && currentValue.includes('.')) {
        setCurrentValue(currentValue);
      } else {
        setCurrentValue(currentValue + numeroText);
      }
    } else {
      setCurrentValue(currentValue + numeroText);
    }
  };

  const negativeAndPositive = () => {
    if (currentValue.includes('-')) {
      setCurrentValue(currentValue.replace('-', ''));
    } else {
      setCurrentValue('-' + currentValue);
    }
  };

  const btnBelete = () => {

    let negativo = "";
    let numeroTemp = currentValue;
    if(currentValue.includes("-")){
      negativo = "-";
      numeroTemp = currentValue.substring(1)
    }
    if(currentValue.length > 1){
      setCurrentValue(negativo + numeroTemp.slice(0, -1))
    }else {
      setCurrentValue("0")
    }
  }

  const cambiarNumeroPorAnterior= () => {
    if(currentValue.endsWith(".")) {
      setNumeroAnterior(currentValue.slice(0, -1));

    } else {
      setNumeroAnterior( currentValue)
    }
    setCurrentValue("0")
  }

  const btnDividir = () => {
    cambiarNumeroPorAnterior()
    lastOperation.current = Operadores.dividir
  }

  const btnSumar = () => {
    cambiarNumeroPorAnterior()
    lastOperation.current = Operadores.sumar
  }

  const btnMultiplicar = () => {
    cambiarNumeroPorAnterior()
    lastOperation.current = Operadores.multiplicar
  }

  const btnRestar = () => {
    cambiarNumeroPorAnterior()
    lastOperation.current = Operadores.restar
  }

  const calcular = () => {
    const num1 = Number( currentValue);
    const num2 = Number( numeroAnterior)

    switch (lastOperation.current) {
      case Operadores.sumar:
        setCurrentValue(`${num1 + num2}`)
        break;
    
      case Operadores.restar:
        setCurrentValue(`${num2 - num1}`)
        break;

      case Operadores.multiplicar:
        setCurrentValue(`${num1 * num2}`)
        break;

      case Operadores.dividir:
        setCurrentValue(`${num2 / num1}`)
        break;

    }

    setNumeroAnterior("0")
  }

  return {
    calcular,
    currentValue,
    clean,
    negativeAndPositive,
    numeroAnterior,
    buildNumber,
    btnBelete,
    cambiarNumeroPorAnterior,
    btnRestar,
    btnMultiplicar,
    btnSumar,
    btnDividir,
  };
};
