import { Person } from '../types/Person';
import { Item } from '../types/Item';

/**
 * Filtra transações relacionadas a uma pessoa específica.
 * @param list Lista de transações.
 * @param personId ID da pessoa.
 * @returns Lista de transações que não pertencem à pessoa excluída.
 */
export const removeTransactionsByPerson = (list: Item[], personId: number): Item[] => {
  return list.filter(item => item.personId !== personId);
};

/**
 * Adiciona uma nova pessoa à lista.
 * @param personList Lista de pessoas existente.
 * @param newPerson Pessoa a ser adicionada.
 * @returns Uma nova lista de pessoas com a pessoa adicionada.
 */
export const addPerson = (personList: Person[], newPerson: Person): Person[] => {
  return [...personList, newPerson];
};

/**
 * Remove uma pessoa da lista de pessoas.
 * @param personList Lista de pessoas existente.
 * @param personId ID da pessoa a ser removida.
 * @returns Uma nova lista de pessoas sem a pessoa excluída.
 */
export const removePerson = (personList: Person[], personId: number): Person[] => {
  return personList.filter(person => person.id !== personId);
};
