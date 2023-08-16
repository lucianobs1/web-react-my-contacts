import {
  Container,
  Header,
  ListContainer,
  Card,
  InputSearchContainer,
} from "./styles";

import Arrow from "../../assets/images/icons/arrow.svg";
import Edit from "../../assets/images/icons/edit.svg";
import Trash from "../../assets/images/icons/trash.svg";

export function Home() {
  return (
    <Container>
      <Header>
        <strong>3 contatos</strong>
        <a href="new">Novo contato</a>
      </Header>

      <InputSearchContainer>
        <input type="text" placeholder="Pesquise pelo nome..." />
      </InputSearchContainer>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={Arrow} alt="Arrow Up" />
          </button>
        </header>
      </ListContainer>

      <Card>
        <div className="info">
          <div className="contact-name">
            <strong>Luciano Brandão</strong>
            <small>Instagram</small>
          </div>

          <span>luciano@contact.com</span>
          <span>(11) 98888-0000</span>
        </div>

        <div className="actions">
          <a href="edit/123">
            <img src={Edit} alt="Edit" />
          </a>
          <button type="button">
            <img src={Trash} alt="Delete" />
          </button>
        </div>
      </Card>
    </Container>
  );
}
