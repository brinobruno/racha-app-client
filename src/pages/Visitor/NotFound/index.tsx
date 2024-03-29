import { Link } from 'react-router-dom'

import NotFoundImg from 'src/assets/not-found.svg'
import {
  Container,
  IllustrationContainer,
  Illustration,
  HelpContainer,
} from './styles'

export default function NotFound() {
  return (
    <Container>
      <IllustrationContainer>
        <Illustration src={NotFoundImg} alt="" />
      </IllustrationContainer>

      <HelpContainer>
        <h1>Isolou! 404</h1>
        <span>
          Não conseguimos encontrar a página que você está procurando.
        </span>

        <button>
          <Link to="/dashboard">Voltar ao início</Link>
        </button>
      </HelpContainer>
    </Container>
  )
}
