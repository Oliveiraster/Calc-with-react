import { Container, Content, ContentKey, Row} from './styles'

import Input from '../src/components/Input'
import Button from '../src/components/Button'
import Button2 from '../src/components/Button2'
import Button3 from '../src/components/Button3'
import Selected from '../src/components/Selected'
import { useState } from 'react'


import { ThemeProvider } from 'styled-components'
import theme from './theme'

const App = () => {
  const [valor, setValor] = useState(1)
  const [appTheme, setAppTheme] = useState('Blue')
  const [currentNumber, setCurrentNumber] = useState('0')
  const [firstNumber, setFirstNumber] = useState('0')
  const [operation, setOperation] = useState('')
  
  
  
  const handleClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  };

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0'? '' : prev}${num}`)
  }

  const handleBackSpace = () =>{
    const dellArr = currentNumber.split('')
    dellArr.pop()
    setCurrentNumber(dellArr.join(''))
  }

  const handleSumNumber = () => {
    if(firstNumber === '0'){ 
      setFirstNumber(currentNumber)
      setCurrentNumber('0')
      setOperation('+')
    } else {
      const sum = Number(firstNumber) + Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const handleSubNumber = () => {
    if(firstNumber === '0'){ 
      setFirstNumber(currentNumber)
      setCurrentNumber('0')
      setOperation('-')
    } else {
      const sub = Number(firstNumber) - Number(currentNumber)
      setCurrentNumber(String(sub))
      setOperation('')
    }
  }
  const handleMultNumber = () => {
    if(firstNumber === '0'){ 
      setFirstNumber(currentNumber)
      setCurrentNumber('0')
      setOperation('x')
    } else {
      const mult = Number(firstNumber) * Number(currentNumber)
      setCurrentNumber(String(mult))
      setOperation('')
    }
  }
  const handleDivNumber = () => {
    if(firstNumber === '0'){ 
      setFirstNumber(currentNumber)
      setCurrentNumber('0')
      setOperation('/')
    } else {
      const div = Number(firstNumber) / Number(currentNumber)
      setCurrentNumber(String(div))
      setOperation('')
    }
  }
   
  const handleEquals = () => {
    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0' ){ 
      switch(operation){
        case '+':
          handleSumNumber()
          break
        case '-':
          handleSubNumber()
          break
        case 'x':
          handleMultNumber()
          break
        case '/':
          handleDivNumber()
          break
        default:
          break
      }
    } 
  }

 
  const handleChange = (event) => {
    setValor(event.target.value)
    if(event.target.value === '1'){
      setAppTheme('Blue')
    }  
    if(event.target.value === '2'){
      setAppTheme('White')
    }
    if(event.target.value === '3'){
      setAppTheme('Purple')
    }

  }

  return (
        <ThemeProvider theme={theme[appTheme]}>
          <Container>
            <Content>
              <Selected  valor={valor} Change={handleChange}/>
              <Input value={currentNumber}/>
              <ContentKey>
                <Row>
                <Button label={7} onClick={() => handleAddNumber('7')}/>
                <Button label={8} onClick={() => handleAddNumber('8')}/>
                <Button label={9} onClick={() => handleAddNumber('9')}/>
                <Button2 label={'DEL'} onClick={handleBackSpace} />
                </Row>
                <Row>
                <Button label={4} onClick={() => handleAddNumber('4')}/>
                <Button label={5} onClick={() => handleAddNumber('5')}/>
                <Button label={6} onClick={() => handleAddNumber('6')}/>
                <Button label={'+'} onClick={handleSumNumber}/>
                </Row>
          
                <Row>
                <Button label={1} onClick={() => handleAddNumber('1')}/>
                <Button label={2} onClick={() => handleAddNumber('2')}/>
                <Button label={3} onClick={() => handleAddNumber('3')}/>
                <Button label={'-'} onClick={handleSubNumber} />
                </Row>
                <Row>
                <Button label={'.'} />
                <Button label={0} onClick={() => handleAddNumber('0')}/>
                <Button label={'/'} onClick={handleDivNumber}/>
                <Button label={'x'} onClick={handleMultNumber}/>
                </Row>
          
                <Row>
                <Button2 label={'RESET'} onClick={handleClear} />
                <Button3 label={'='} onClick={handleEquals} />
                </Row>
              </ContentKey>
            </Content>
          </Container>
        </ThemeProvider>
  );
}

export default App;
