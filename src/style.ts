import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 95vh;
  overflow-y: scroll;
`

export const Titulo = styled.p`
  font-size: 18px;
  font-weight: 700;
  padding-top: 40px;
  padding-bottom: 40px;
`

export const Campo = styled.input`
  padding: 8px;
  background-color: #fff;
  border-color: #666;
  border-radius: 8px;
  color: #666;
  font-weight: bold;
  width: 100%;
`

export const CampoDescricao = styled.input`
  padding: 8px;
  background-color: #fff;
  border-color: #666;
  border-radius: 8px;
  color: #666;
  font-weight: bold;
  width: 100%;
  height: 183px;
`

export const Aside = styled.aside`
  padding: 16px;
  background-color: #eee;
  height: 100vh;
`

export const Filtros = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
  margin-top: 16px;
`

export const Botao = styled.button`
  background-color: #2f3640;
  border: none;
  border-radius: 8px;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  padding: 8px 12px;
  margin-right: 8px;
  cursor: pointer;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`

export default EstiloGlobal
