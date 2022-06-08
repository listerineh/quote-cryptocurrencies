import { useState, useEffect } from 'react'
import Form from './components/Form'
import Result from './components/Result'
import styled from '@emotion/styled'
import CryptoImage from './img/cryptos-img.png'

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`

const Image = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`

const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #FFF;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 36px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto 0 auto;
  }
`

function App() {

  const [currencies, setCurrencies ] = useState({})
  const [quote, setQuote] = useState({})

  useEffect(() => {
    if( Object.keys(currencies).length > 0 ){
      const quoteCryptocurrencies = async () => {
        const { currency, cryptoCurrency } = currencies
        const URL = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCurrency}&tsyms=${currency}`
        const response = await fetch(URL)
        const result = await response.json()

        setQuote(result.DISPLAY[cryptoCurrency][currency])
      }
      quoteCryptocurrencies()
    }
  }, [currencies])

  return (
    <Container>
      <Image  
        src={ CryptoImage }
        alt="Crypto images"
      />
      <div>
        <Heading>Quote cryptocurrencies instantly</Heading>
        <Form 
          setCurrencies={ setCurrencies }
        />

        { quote.PRICE && 
          <Result 
            quote={ quote }
          /> 
        }
        
      </div>
    </Container>
  )
}

export default App
