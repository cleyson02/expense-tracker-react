import * as C from './styles';
import { Person } from '../../types/Person';

type Props = {
  data: Person;
  onDelete: (id: number) => void;
};

export const PersonItem = ({ data, onDelete }: Props) => {
  return (
    <C.Container>
      <span>{data.id}</span>
      <span>{data.name}</span>
      <span>{data.age}</span>
      <button onClick={() => onDelete(data.id)}>Excluir</button>
    </C.Container>
  );
};
