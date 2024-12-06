import { Person } from '../../types/Person';
import { Item } from '../../types/Item';
import { categories } from '../../data/categories'; // Supondo que categories está nesse arquivo
import * as C from './styles';
import { ResumeItem } from '../ResumeItem';

type Props = {
  personList: Person[];
  transactions: Item[];
};

export const PersonSummary = ({ personList, transactions }: Props) => {
  const calculateSummary = (personId: number) => {
    let income = 0;
    let expense = 0;

    transactions.forEach(item => {
      if (item.personId === personId) {
        const category = categories[item.category]; // Obtém a categoria da transação

        // Verifica se a categoria existe e se é uma despesa ou receita
        if (category) {
          if (category.expense) {
            expense += item.value; // Se for despesa
          } else {
            income += item.value; // Se for receita
          }
        }
      }
    });

    return {
      income,
      expense,
      balance: income - expense,
    };
  };

  return (
    <C.Container>
      <C.Title>Resumo por Pessoa</C.Title>
      <C.Table>
        <thead>
          <tr>
            <C.TableHeadColumn width={200}>Nome</C.TableHeadColumn>
            <C.TableHeadColumn width={100}>Receitas</C.TableHeadColumn>
            <C.TableHeadColumn width={100}>Despesas</C.TableHeadColumn>
            <C.TableHeadColumn width={100}>Balanço</C.TableHeadColumn>
          </tr>
        </thead>
        <tbody>
          {personList.map(person => {
            const { income, expense, balance } = calculateSummary(person.id);
            return (
              <C.TableRow key={person.id}>
                <C.TableData>{person.name}</C.TableData>
                <C.TableData>
                  <ResumeItem title="Receita" value={income} color="green" />
                </C.TableData>
                <C.TableData>
                  <ResumeItem title="Despesa" value={expense} color="red" />
                </C.TableData>
                <C.TableData>
                  <ResumeItem title="Balanço" value={balance} color={balance >= 0 ? 'green' : 'red'} />
                </C.TableData>
              </C.TableRow>
            );
          })}
        </tbody>
      </C.Table>
    </C.Container>
  );
};
