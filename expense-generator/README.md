# 💰 Expense Tracker

A beautiful, modern expense tracking application built with React and Vite. Track your expenses with style! ✨

![Expense Tracker Screenshot](https://github.com/user-attachments/assets/c14abfd2-2fa9-49ff-837e-bfc3561917dc)

## Features

- 📝 Add expenses with description, amount, and category
- 💰 Real-time total expense calculation
- 🎨 Beautiful gradient UI with animations
- 🗑️ Delete expenses with one click
- 📱 Responsive design for all devices
- 🎯 Multiple expense categories (Food, Transport, Entertainment, Utilities, Healthcare, Other)
- ✅ Comprehensive unit test coverage

## Tech Stack

- **React 19** - Modern UI library
- **Vite** - Fast build tool with Rolldown
- **Vitest** - Unit testing framework
- **React Testing Library** - Component testing utilities
- **CSS3** - Custom styling with gradients and animations

## Getting Started

### Prerequisites

- Node.js (v20 or higher)
- npm (v10 or higher)

### Installation

1. Navigate to the expense-generator directory:
```bash
cd expense-generator
```

2. Install dependencies (if not already installed):
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

Build the app for production:
```bash
npm run build
```

### Testing

Run unit tests:
```bash
npm run test:run
```

Run tests in watch mode:
```bash
npm test
```

### Linting

Check code quality:
```bash
npm run lint
```

## Usage

1. **Add an Expense**: Fill in the description, amount, and select a category, then click "Add Expense"
2. **View Total**: See your total expenses updated in real-time at the top
3. **Delete an Expense**: Click the 🗑️ button next to any expense to remove it
4. **Track by Category**: Each expense is color-coded by category

## Project Structure

```
expense-generator/
├── src/
│   ├── App.jsx          # Main application component
│   ├── App.css          # Styling with gradients and animations
│   ├── App.test.jsx     # Unit tests
│   ├── main.jsx         # Application entry point
│   ├── index.css        # Global styles
│   └── setupTests.js    # Test configuration
├── public/              # Static assets
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── vite.config.js      # Vite configuration
└── vitest.config.js    # Vitest configuration
```

## Testing

The application includes comprehensive unit tests covering:

- ✅ Component rendering
- ✅ Adding expenses with validation
- ✅ Deleting expenses
- ✅ Total calculation
- ✅ Category selection
- ✅ Form validation (empty fields, zero amounts)
- ✅ User interactions

All tests are passing with 100% coverage of core functionality.

## UI Features

- 🎨 **Gradient Design**: Beautiful purple-blue gradients throughout
- ✨ **Animations**: Smooth transitions, hover effects, and floating animations
- 🌙 **Dark Mode**: Elegant dark theme by default
- 📱 **Responsive**: Works perfectly on mobile, tablet, and desktop
- ♿ **Accessible**: Proper ARIA labels for screen readers

## License

MIT

## Author

Built with ❤️ using GitHub Copilot
