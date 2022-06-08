import { useEffect } from 'react'
import useSelectCurrencies from '../hooks/useSelectCurrencies'
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

  const [ currency, SelectCurrencies ] = useSelectCurrencies('Select your currency', currencies)

  useEffect(() => {
    const getQuery = async () => {
      const URL = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"
      const response = await fetch(URL)
      const result = await response.json()

      console.log(result.Data)
    }
    getQuery()
  }, [])

  return (
    <form>
      <SelectCurrencies />

      <InputSubmit 
        type="submit" 
        value="Quote" 
      />
    </form>
  )
}

export default Form
