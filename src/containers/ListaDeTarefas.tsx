import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { RootReducer } from '../store'
import Tarefa from '../components/Tarefas'

export const Container = styled.main`
  padding: 0 40px;
  height: 95vh;
  overflow-y: scroll;
`

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  return (
    <Container>
      <p>
        2 tarefas marcadas como: &quot;categotia&ldquo; e &quot;termo&ldquo;
      </p>
      <ul>
        {itens.map((t) => (
          <li key={t.titulo}>
            <Tarefa
              id={t.id}
              descricao={t.descricao}
              titulo={t.titulo}
              status={t.status}
              prioridade={t.prioridade}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDeTarefas
