import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import Arrow from "../../assets/images/icons/arrow.svg";
import { Container } from "./styles";

export function PageHeader({ title }) {
  return (
    <Container>
      <Link to="/">
        <img src={Arrow} alt="Back" />
        <span>Voltar</span>
      </Link>

      <h1>{title}</h1>
    </Container>
  );
}

PageHeader.prototypes = {
  title: PropTypes.string.isRequired,
};
