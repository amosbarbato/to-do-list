import { Link } from 'react-router-dom'

import styled from 'styled-components'
import variaveis from '../variaveis'

const Circulo = styled(Link)`
  display: flex;
  width: 64px;
  height: 64px;
  background-color: ${variaveis.verde};
  color: #fff;
  position: fixed;
  bottom: 40px;
  right: 40px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  cursor: pointer;
`

const BotaoAdicionar = () => <Circulo to="/new">+</Circulo>

export default BotaoAdicionar
