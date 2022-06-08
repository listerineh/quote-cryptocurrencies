import { useState } from 'react'
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
