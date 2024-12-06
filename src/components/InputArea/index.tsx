import { useState, useEffect } from 'react';
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
  const [personId, setPersonId] = useState<number | ''>('');

  let categoryKeys: string[] = Object.keys(categories);

  const isMinor = (id: number) => {
    const person = personList.find(person => person.id === id);
    return person ? person.age < 18 : false;
  };

  const getAvailableCategories = () => {
    if (personId === '') return [];
    if (isMinor(personId as number)) {
      return categoryKeys.filter(key => categories[key].expense);
    }
    return categoryKeys;
  };
  useEffect(() => {
    setCategoryField('');
  }, [personId]);

  const handleAddEvent = () => {
    let errors: string[] = [];

    if (personId === '') {
      errors.push('Você precisa selecionar uma pessoa!');
    }
    if (isNaN(new Date(dateField).getTime())) {
      errors.push('Data inválida!');
    }
    if (!getAvailableCategories().includes(categoryField)) {
      errors.push('Categoria inválida!');
    }
    if (titleField === '') {
      errors.push('Título vazio!');
    }
    if (valueField <= 0) {
      errors.push('Valor inválido!');
    }

    if (errors.length > 0) {
      alert(errors.join("\n"));
    } else {
      onAdd({
        date: newDateAdjusted(dateField),
        category: categoryField,
        title: titleField,
        value: valueField,
        personId: personId as number
      });
      clearFields();
    }
  };

  const clearFields = () => {
    setDateField('');
    setCategoryField('');
    setTitleField('');
    setValueField(0);
    setPersonId('');
  };

  return (
    <C.Container>
      {/* Seleção da Pessoa */}
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

      {/* Exibição condicional dos outros campos */}
      {personId && (
        <>
          <C.InputLabel>
            <C.InputTitle>Data</C.InputTitle>
            <C.Input type="date" value={dateField} onChange={e => setDateField(e.target.value)} />
          </C.InputLabel>
          <C.InputLabel>
            <C.InputTitle>Categoria</C.InputTitle>
            <C.Select value={categoryField} onChange={e => setCategoryField(e.target.value)}>
              <option value="">Selecione uma categoria</option>
              {getAvailableCategories().map((key, index) => (
                <option key={index} value={key}>
                  {categories[key].title}
                </option>
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
            <C.InputTitle>&nbsp;</C.InputTitle>
            <C.Button onClick={handleAddEvent}>Adicionar</C.Button>
          </C.InputLabel>
        </>
      )}
    </C.Container>
  );
};
