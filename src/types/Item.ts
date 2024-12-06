export type Item = {
    date: Date;
    category: string;
    title: string;
    value: number;
    personId?: number; // Relacionamento com a pessoa
  };