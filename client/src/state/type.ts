export interface Day {
  _id: string;
  date: string;
  expenses: number;
  revenue: number;
}

export interface Month {
  _id: string;
  month: string;
  revenue: number;
  expenses: number;
  nonOperationExpenses: number;
  operationalExpenses: number;
}

export interface ExpensesByCategory {
  salaries: number;
  supplies: number;
  services: number;
}

export interface GetKpisResponse {
  _id: string;
  __v: number;
  dailyData: Array<Day>;
  monthlyData: Array<Month>;
  totalExpenses: number;
  totalProfit: number;
  totalRevenue: number;
  expensesByCategory: ExpensesByCategory;
}
