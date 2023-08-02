import styled from 'styled-components'
import { FiltroCard } from '../components/FiltroCard'
import { RootReducer } from '../store'
import { alteraTermo } from '../store/reducers/filtro'
import { useDispatch, useSelector } from 'react-redux'

const Aside = styled.aside`
  padding: 16px;
  background-color: #eee;
  height: 100vh;
`
const Filtros = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
  margin-top: 16px;
`
const Campo = styled.input`
  padding: 8px;
  background-color: #fff;
  border-color: #666;
  border-radius: 8px;
  color: #666;
  font-weight: bold;
  width: 100%;
`

export const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  return (
    <Aside>
      <div>
        <Campo
          type="text"
          placeholder="Buscar"
          value={termo}
          onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
        />
        <Filtros>
          <FiltroCard legenda="pendentes" contador={1} />
          <FiltroCard legenda="concluídas" contador={2} />
          <FiltroCard legenda="urgentes" contador={3} />
          <FiltroCard legenda="importantes" contador={4} />
          <FiltroCard legenda="normal" contador={5} />
          <FiltroCard ativo legenda="todas" contador={10} />
        </Filtros>
      </div>
    </Aside>
  )
}
