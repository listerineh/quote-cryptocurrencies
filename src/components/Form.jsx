import { useEffect, useState } from 'react'
import useSelectCurrencies from '../hooks/useSelectCurrencies'
import Error from '../components/Error'
import styled from '@emotion/styled'
import { currencies } from '../data/currencies'

const InputSubmit = styled.input`
  background-color: #9497ff;
  border: none;
  width: 100%;
  color: #fff;
  padding: 10px;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color .3s ease;
  margin-top: 30px;

  &:hover{
    background-color: #7a7dfe;
    cursor: pointer;
  }
`

function Form() {

  const [ cryptoCurrencies, setCryptoCurrencies ] = useState([])
  const [error, setError] = useState(false)

  const [ currency, SelectCurrencies ] = useSelectCurrencies('Select your currency', currencies)
  const [ cryptoCurrency, SelectCryptoCurrencies ] = useSelectCurrencies('Select your cryptocurrency', cryptoCurrencies)

  useEffect(() => {
    const getQuery = async () => {
      const URL = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=12&tsym=USD"
      const response = await fetch(URL)
      const result = await response.json()

      const cryptoCurrenciesArray = result.Data.map( cryptoCurrency => {
        const currencyObject = {
          id: cryptoCurrency.CoinInfo.Name,
          name: cryptoCurrency.CoinInfo.FullName,
        }
        return currencyObject
      })

      setCryptoCurrencies(cryptoCurrenciesArray)
    }
    getQuery()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    if( [currency, cryptoCurrency].includes('') ) {
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 3000)
      return
    }



  }

  return (
    <>
      { error && <Error>Fill all the fields, please!</Error> }
      
      <form
        onSubmit={ handleSubmit }
      >
        <SelectCurrencies />
        <SelectCryptoCurrencies />

        <InputSubmit 
          type="submit" 
          value="Quote" 
        />
      </form>
    </>
  )
}

export default Form
