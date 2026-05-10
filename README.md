# Angular Parent Child Communication

A simple Angular application that displays student information in an interactive card layout. This project demonstrates basic Angular concepts including components, data binding, event handling, and component communication.

## Features

- Display student cards with name, ID, age, and course information
- Interactive selection: Click "View Details" to select a student
- Real-time display of selected student's name and age
- Responsive grid layout for student cards

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
