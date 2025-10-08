import { useState } from 'react'
import './App.css'

function App() {
  const [expenses, setExpenses] = useState([])
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState('Food')

  const categories = ['Food', 'Transport', 'Entertainment', 'Utilities', 'Healthcare', 'Other']

  const handleAddExpense = (e) => {
    e.preventDefault()
    
    if (!description.trim() || !amount || parseFloat(amount) <= 0) {
      return
    }

    const newExpense = {
      id: Date.now(),
      description: description.trim(),
      amount: parseFloat(amount),
      category,
      date: new Date().toLocaleDateString()
    }

    setExpenses([newExpense, ...expenses])
    setDescription('')
    setAmount('')
    setCategory('Food')
  }

  const handleDeleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id))
  }

  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0)

  return (
    <div className="app-container">
      <div className="header">
        <h1 className="title">✨ Expense Tracker ✨</h1>
        <p className="subtitle">Track your expenses with style</p>
      </div>

      <div className="total-card">
        <div className="total-label">Total Expenses</div>
        <div className="total-amount">${totalExpenses.toFixed(2)}</div>
      </div>

      <form className="expense-form" onSubmit={handleAddExpense}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="input-field"
            aria-label="Expense description"
          />
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <input
              type="number"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              step="0.01"
              min="0"
              className="input-field"
              aria-label="Expense amount"
            />
          </div>
          
          <div className="form-group">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="input-field select-field"
              aria-label="Expense category"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>

        <button type="submit" className="add-button">
          Add Expense
        </button>
      </form>

      <div className="expenses-list">
        {expenses.length === 0 ? (
          <div className="empty-state">
            <p>No expenses yet. Add your first expense above! 🎯</p>
          </div>
        ) : (
          expenses.map(expense => (
            <div key={expense.id} className="expense-item">
              <div className="expense-info">
                <div className="expense-header">
                  <span className="expense-description">{expense.description}</span>
                  <span className="expense-category">{expense.category}</span>
                </div>
                <div className="expense-footer">
                  <span className="expense-date">{expense.date}</span>
                  <span className="expense-amount">${expense.amount.toFixed(2)}</span>
                </div>
              </div>
              <button
                onClick={() => handleDeleteExpense(expense.id)}
                className="delete-button"
                aria-label={`Delete ${expense.description}`}
              >
                🗑️
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default App
