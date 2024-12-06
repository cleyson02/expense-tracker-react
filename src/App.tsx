import { useState, useEffect } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import { Person } from './types/Person';
import { categories } from './data/categories';
import { items } from './data/items';
import { persons } from './data/persons';
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter';
import { removeTransactionsByPerson } from './helpers/personHelper';
import { TableArea } from './components/TableArea';
import { InfoArea } from './components/InfoArea';
import { InputArea } from './components/InputArea';
import { PersonArea } from './components/PersonArea';
import { PersonSummary } from './components/PersonSummary';

const App = () => {
  const [list, setList] = useState<Item[]>(items); // Lista de transações
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [personList, setPersonList] = useState<Person[]>(persons); // Lista de pessoas
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for (let i in filteredList) {
      if (categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value;
      } else {
        incomeCount += filteredList[i].value;
      }
    }

    setIncome(incomeCount);
    setExpense(expenseCount);
  }, [filteredList]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  };

  const handleAddItem = (item: Item) => {
    setList([...list, item]);
  };

  const handleAddPerson = (person: Person) => {
    setPersonList([...personList, person]);
  };

  const handleDeletePerson = (personId: number) => {
    setPersonList(personList.filter(person => person.id !== personId));
    setList(removeTransactionsByPerson(list, personId));
  };

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        {/* Informações gerais */}
        <InfoArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />

        {/* Área de cadastro de pessoas */}
        <PersonArea
          personList={personList}
          onAddPerson={handleAddPerson}
          onDeletePerson={handleDeletePerson}
        />
        
        {/* Formulário para adicionar transações */}
        <InputArea onAdd={handleAddItem} personList={personList}
        />

        {/* Tabela de transações */}
        <TableArea list={filteredList}
        />

        {/* Resumo por pessoa */}
        <PersonSummary personList={personList} transactions={list}
        />
      </C.Body>
    </C.Container>
  );
};

export default App;
