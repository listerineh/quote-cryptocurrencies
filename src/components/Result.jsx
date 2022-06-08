import styled from '@emotion/styled'

function Result( { quote } ) {

  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = quote

  return (
    <div>
        <p>Current price: <span>{PRICE}</span></p>
        <p>Day's highest price: <span>{HIGHDAY}</span></p>
        <p>Day's lowest price: <span>{LOWDAY}</span></p>
        <p>Last 24 hours variation: <span>{CHANGEPCT24HOUR}</span></p>
        <p>Last update: <span>{LASTUPDATE}</span></p>
    </div>
  )
}

export default Result
