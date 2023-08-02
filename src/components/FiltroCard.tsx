import styled from 'styled-components'

type Props = {
  ativo?: boolean
  contador?: number
  legenda?: string
}

type PropsSemLegendaEContador = Omit<Props, 'contador' | 'legenda'>

const Card = styled.div<PropsSemLegendaEContador>`
  padding: 8px;
  border: 1px solid ${(props) => (props.ativo ? '#1e90ff' : '#a1a1a1')};
  background-color: ${(props) => (props.ativo ? '#fff' : '#fcfcfc')};
  border-radius: 8px;
  color: ${(props) => (props.ativo ? '#1e90ff' : '#5e5e5e')};
`

const Contador = styled.span`
  font-size: 24px;
  font-weight: bold;
  display: block;
`

const Label = styled.span`
  font-size: 14px;
`

export const FiltroCard = ({ ativo, contador, legenda }: Props) => (
  <Card ativo={ativo}>
    <Contador>{contador}</Contador>
    <Label>{legenda}</Label>
  </Card>
)
