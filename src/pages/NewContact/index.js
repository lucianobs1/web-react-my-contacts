import { Button } from "../../components/Button";
import { PageHeader } from "../../components/PageHeader";
import { Select } from "../../components/Select";
import { Input } from "../../components/input";

export function NewContact() {
  return (
    <>
      <PageHeader title="Novo contato" />

      <Input type="text" placeholder="Nome" />
      <Select>
        <option value="1">Instagram</option>
        <option value="2">Facebook</option>
        <option value="3">TikTok</option>
        <option value="4">Alura </option>
      </Select>

      <Button type="button">Salvar alterações</Button>

      <Button type="button" disabled>
        Salvar alterações
      </Button>
    </>
  );
}
