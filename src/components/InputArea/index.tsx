import { useState } from 'react';
import * as C from './styles';
import { Item } from '../../types/Item';
import { categories } from '../../data/categories';
import { newDateAdjusted } from '../../helpers/dateFilter';
import { Person } from '../../types/Person';

type Props = {
  onAdd: (item: Item) => void;
  personList: Person[];
};

export const InputArea = ({ onAdd, personList }: Props) => {
  const [dateField, setDateField] = useState('');
  const [categoryField, setCategoryField] = useState('');
  const [titleField, setTitleField] = useState('');
  const [valueField, setValueField] = useState(0);
  const [personId, setPersonId] = useState<number | ''>(''); // Campo para selecionar a pessoa

  let categoryKeys: string[] = Object.keys(categories);

  const handleAddEvent = () => {
    let errors: string[] = [];

    if (isNaN(new Date(dateField).getTime())) {
      errors.push('Data inválida!');
    }
    if (!categoryKeys.includes(categoryField)) {
      errors.push('Categoria inválida!');
    }
    if (titleField === '') {
      errors.push('Título vazio!');
    }
    if (valueField <= 0) {
      errors.push('Valor inválido!');
    }
    if (personId === '') {
      errors.push('Selecione uma pessoa!');
    }

    if (errors.length > 0) {
      alert(errors.join("\n"));
    } else {
      onAdd({
        date: newDateAdjusted(dateField),
        category: categoryField,
        title: titleField,
        value: valueField,
        personId: personId as number // Vincula a pessoa à transação
      });
      clearFields();
    }
  }

  const clearFields = () => {
    setDateField('');
    setCategoryField('');
    setTitleField('');
    setValueField(0);
    setPersonId(''); // Limpa a seleção de pessoa
  }

  return (
    <C.Container>
      <C.InputLabel>
        <C.InputTitle>Data</C.InputTitle>
        <C.Input type="date" value={dateField} onChange={e => setDateField(e.target.value)} />
      </C.InputLabel>
      <C.InputLabel>
        <C.InputTitle>Categoria</C.InputTitle>
        <C.Select value={categoryField} onChange={e => setCategoryField(e.target.value)}>
          <option></option>
          {categoryKeys.map((key, index) => (
            <option key={index} value={key}>{categories[key].title}</option>
          ))}
        </C.Select>
      </C.InputLabel>
      <C.InputLabel>
        <C.InputTitle>Título</C.InputTitle>
        <C.Input type="text" value={titleField} onChange={e => setTitleField(e.target.value)} />
      </C.InputLabel>
      <C.InputLabel>
        <C.InputTitle>Valor</C.InputTitle>
        <C.Input type="number" value={valueField} onChange={e => setValueField(parseFloat(e.target.value))} />
      </C.InputLabel>
      <C.InputLabel>
        <C.InputTitle>Pessoa</C.InputTitle>
        <C.Select value={personId} onChange={e => setPersonId(e.target.value ? parseInt(e.target.value) : '')}>
          <option value="">Selecione uma pessoa</option>
          {personList.map(person => (
            <option key={person.id} value={person.id}>
              {person.name}
            </option>
          ))}
        </C.Select>
      </C.InputLabel>
      <C.InputLabel>
        <C.InputTitle>&nbsp;</C.InputTitle>
        <C.Button onClick={handleAddEvent}>Adicionar</C.Button>
      </C.InputLabel>
    </C.Container>
  );
};
