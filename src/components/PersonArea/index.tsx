import { useState } from 'react';
import { Person } from '../../types/Person';
import * as C from './styles';
import { PersonItem } from '../PersonItem';

type Props = {
  personList: Person[];
  onAddPerson: (person: Person) => void;
  onDeletePerson: (id: number) => void;
};

export const PersonArea = ({ personList, onAddPerson, onDeletePerson }: Props) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleAddPerson = () => {
    if (name && age) {
      const newPerson: Person = {
        id: personList.length > 0 ? personList[personList.length - 1].id + 1 : 1,
        name,
        age: parseInt(age),
      };
      onAddPerson(newPerson);
      setName('');
      setAge('');
    }
  };

  return (
    <C.Container>
      <h2>Cadastro de Pessoas</h2>
      <C.InputLabel>
        <C.InputTitle>Nome</C.InputTitle>
        <C.Input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </C.InputLabel>
      <C.InputLabel>
        <C.InputTitle>Idade</C.InputTitle>
        <C.Input
          type="number"
          placeholder="Idade"
          value={age}
          onChange={e => setAge(e.target.value)}
        />
      </C.InputLabel>
      <C.Button onClick={handleAddPerson}>
        Adicionar
      </C.Button>

      {/* Usando ListContainer estilizado */}
      <C.ListContainer>
        {personList.map(person => (
          <PersonItem
            key={person.id}
            data={person}
            onDelete={onDeletePerson}
          />
        ))}
      </C.ListContainer>
    </C.Container>
  );
};
