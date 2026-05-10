# Hello Angular

A simple Angular application that displays student information in an interactive card layout. This project demonstrates basic Angular concepts including components, data binding, event handling, and component communication.

## Features

- Display student cards with name, ID, age, and course information
- Interactive selection: Click "View Details" to select a student
- Real-time display of selected student's name and age
- Responsive grid layout for student cards

## Prerequisites

Before running this project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Angular CLI](https://angular.io/cli) (install globally with `npm install -g @angular/cli`)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/hello-angular.git
   cd hello-angular
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Development Server

Run the development server:

```bash
npm start
```

or

```bash
ng serve
```

Navigate to `http://localhost:4200/` in your browser. The application will automatically reload if you change any source files.

### Build

Build the project for production:

```bash
npm run build
```

or

```bash
ng build
```

The build artifacts will be stored in the `dist/` directory.

### Running Tests

Execute unit tests:

```bash
npm test
```

or

```bash
ng test
```

## Project Structure

```
src/
├── app/
│   ├── app.component.ts          # Main app component with student data
│   ├── app.component.html        # App template with student cards grid
│   ├── app.component.css         # App styles
│   ├── app.module.ts             # App module configuration
│   ├── model.ts                  # Student interface definition
│   └── student/
│       ├── student.component.ts  # Student card component
│       ├── student.component.html # Student card template
│       ├── student.component.css # Student card styles
│       └── student.component.spec.ts # Unit tests for student component
├── assets/                       # Static assets
├── index.html                    # Main HTML file
└── styles.css                    # Global styles
```

## Technologies Used

- **Angular**: Framework for building the web application
- **TypeScript**: Programming language for type-safe development
- **RxJS**: Reactive programming library
- **Jasmine/Karma**: Testing framework and test runner

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Further Help

For more help on Angular CLI commands, visit the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
