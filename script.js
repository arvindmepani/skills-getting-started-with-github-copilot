// Expense Calculator Application

// Store expenses in an array
let expenses = [];

// Get DOM elements
const expenseForm = document.getElementById('expense-form');
const expenseNameInput = document.getElementById('expense-name');
const expenseAmountInput = document.getElementById('expense-amount');
const expenseCategoryInput = document.getElementById('expense-category');
const expenseList = document.getElementById('expense-list');
const totalAmountDisplay = document.getElementById('total-amount');

// Load expenses from localStorage on page load
document.addEventListener('DOMContentLoaded', () => {
    loadExpenses();
    renderExpenses();
    updateTotal();
});

// Handle form submission
expenseForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addExpense();
});

// Add a new expense
function addExpense() {
    const name = expenseNameInput.value.trim();
    const amount = parseFloat(expenseAmountInput.value);
    const category = expenseCategoryInput.value;
    
    if (name && amount > 0) {
        const expense = {
            id: Date.now(),
            name: name,
            amount: amount,
            category: category
        };
        
        expenses.push(expense);
        saveExpenses();
        renderExpenses();
        updateTotal();
        
        // Clear form
        expenseForm.reset();
        expenseNameInput.focus();
    }
}

// Delete an expense
function deleteExpense(id) {
    expenses = expenses.filter(expense => expense.id !== id);
    saveExpenses();
    renderExpenses();
    updateTotal();
}

// Render all expenses to the DOM
function renderExpenses() {
    if (expenses.length === 0) {
        expenseList.innerHTML = '<p class="no-expenses">No expenses added yet.</p>';
        return;
    }
    
    expenseList.innerHTML = expenses.map(expense => `
        <div class="expense-item">
            <div class="expense-info">
                <div class="expense-name">${expense.name}</div>
                <span class="expense-category">${expense.category}</span>
            </div>
            <div class="expense-amount">$${expense.amount.toFixed(2)}</div>
            <button class="btn-delete" onclick="deleteExpense(${expense.id})">Delete</button>
        </div>
    `).join('');
}

// Update total amount
function updateTotal() {
    const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    totalAmountDisplay.textContent = `$${total.toFixed(2)}`;
}

// Save expenses to localStorage
function saveExpenses() {
    localStorage.setItem('expenses', JSON.stringify(expenses));
}

// Load expenses from localStorage
function loadExpenses() {
    const saved = localStorage.getItem('expenses');
    if (saved) {
        expenses = JSON.parse(saved);
    }
}
