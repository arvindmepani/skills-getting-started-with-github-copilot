import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('Expense Generator App', () => {
  it('renders the app title', () => {
    render(<App />)
    expect(screen.getByText(/Expense Tracker/i)).toBeDefined()
  })

  it('displays initial total as $0.00', () => {
    render(<App />)
    expect(screen.getByText('$0.00')).toBeDefined()
  })

  it('shows empty state message when no expenses', () => {
    render(<App />)
    expect(screen.getByText(/No expenses yet/i)).toBeDefined()
  })

  it('adds a new expense when form is submitted', () => {
    render(<App />)
    
    const descriptionInput = screen.getByLabelText(/expense description/i)
    const amountInput = screen.getByLabelText(/expense amount/i)
    const addButton = screen.getByText(/Add Expense/i)

    fireEvent.change(descriptionInput, { target: { value: 'Lunch' } })
    fireEvent.change(amountInput, { target: { value: '15.50' } })
    fireEvent.click(addButton)

    expect(screen.getByText('Lunch')).toBeDefined()
    const amountElements = screen.getAllByText('$15.50')
    expect(amountElements.length).toBeGreaterThan(0)
  })

  it('updates total when expense is added', () => {
    render(<App />)
    
    const descriptionInput = screen.getByLabelText(/expense description/i)
    const amountInput = screen.getByLabelText(/expense amount/i)
    const addButton = screen.getByText(/Add Expense/i)

    fireEvent.change(descriptionInput, { target: { value: 'Coffee' } })
    fireEvent.change(amountInput, { target: { value: '5.00' } })
    fireEvent.click(addButton)

    const totalElements = screen.getAllByText('$5.00')
    expect(totalElements.length).toBeGreaterThan(0)
  })

  it('clears form fields after adding expense', () => {
    render(<App />)
    
    const descriptionInput = screen.getByLabelText(/expense description/i)
    const amountInput = screen.getByLabelText(/expense amount/i)
    const addButton = screen.getByText(/Add Expense/i)

    fireEvent.change(descriptionInput, { target: { value: 'Dinner' } })
    fireEvent.change(amountInput, { target: { value: '25.00' } })
    fireEvent.click(addButton)

    expect(descriptionInput.value).toBe('')
    expect(amountInput.value).toBe('')
  })

  it('does not add expense with empty description', () => {
    render(<App />)
    
    const amountInput = screen.getByLabelText(/expense amount/i)
    const addButton = screen.getByText(/Add Expense/i)

    fireEvent.change(amountInput, { target: { value: '10.00' } })
    fireEvent.click(addButton)

    expect(screen.getByText(/No expenses yet/i)).toBeDefined()
  })

  it('does not add expense with zero amount', () => {
    render(<App />)
    
    const descriptionInput = screen.getByLabelText(/expense description/i)
    const amountInput = screen.getByLabelText(/expense amount/i)
    const addButton = screen.getByText(/Add Expense/i)

    fireEvent.change(descriptionInput, { target: { value: 'Free stuff' } })
    fireEvent.change(amountInput, { target: { value: '0' } })
    fireEvent.click(addButton)

    expect(screen.getByText(/No expenses yet/i)).toBeDefined()
  })

  it('deletes an expense when delete button is clicked', () => {
    render(<App />)
    
    const descriptionInput = screen.getByLabelText(/expense description/i)
    const amountInput = screen.getByLabelText(/expense amount/i)
    const addButton = screen.getByText(/Add Expense/i)

    fireEvent.change(descriptionInput, { target: { value: 'Taxi' } })
    fireEvent.change(amountInput, { target: { value: '12.00' } })
    fireEvent.click(addButton)

    const deleteButton = screen.getByLabelText(/Delete Taxi/i)
    fireEvent.click(deleteButton)

    expect(screen.queryByText('Taxi')).toBeNull()
    expect(screen.getByText(/No expenses yet/i)).toBeDefined()
  })

  it('calculates total correctly with multiple expenses', () => {
    render(<App />)
    
    const descriptionInput = screen.getByLabelText(/expense description/i)
    const amountInput = screen.getByLabelText(/expense amount/i)
    const addButton = screen.getByText(/Add Expense/i)

    // Add first expense
    fireEvent.change(descriptionInput, { target: { value: 'Item 1' } })
    fireEvent.change(amountInput, { target: { value: '10.50' } })
    fireEvent.click(addButton)

    // Add second expense
    fireEvent.change(descriptionInput, { target: { value: 'Item 2' } })
    fireEvent.change(amountInput, { target: { value: '20.25' } })
    fireEvent.click(addButton)

    expect(screen.getByText('$30.75')).toBeDefined()
  })

  it('allows selecting different categories', () => {
    render(<App />)
    
    const categorySelect = screen.getByLabelText(/expense category/i)
    
    fireEvent.change(categorySelect, { target: { value: 'Transport' } })
    expect(categorySelect.value).toBe('Transport')
  })

  it('displays the selected category on expense item', () => {
    render(<App />)
    
    const descriptionInput = screen.getByLabelText(/expense description/i)
    const amountInput = screen.getByLabelText(/expense amount/i)
    const categorySelect = screen.getByLabelText(/expense category/i)
    const addButton = screen.getByText(/Add Expense/i)

    fireEvent.change(categorySelect, { target: { value: 'Entertainment' } })
    fireEvent.change(descriptionInput, { target: { value: 'Movie' } })
    fireEvent.change(amountInput, { target: { value: '15.00' } })
    fireEvent.click(addButton)

    const entertainmentElements = screen.getAllByText('Entertainment')
    expect(entertainmentElements.length).toBeGreaterThan(1)
  })
})
