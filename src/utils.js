export function filterByCategory(expenses, category) {
  if (category === "All") {
    return expenses;
  }
  return expenses.filter((expense) => expense.category === category);
}