# React useReducer Questions

Each question is separated into its own component folder.

```text
src/
├── App.jsx
├── App.css
├── main.jsx
└── components/
    ├── Question1/
    │   └── question1.jsx
    └── Question2/
        └── question2.jsx
```

## Question 1

Create one form with:
- Name
- Age
- Password
- College Name

The form state is managed using `useReducer()` and the collected information
is displayed below the form.

Route:

```text
/question1
```

## Question 2

Calculator with:
- Value 1
- Value 2
- Add
- Subtract
- Multiply
- Division

Calculator state and operations are managed using `useReducer()`.

Route:

```text
/question2
```

## Run

```bash
npm install
npm run dev
```

If PowerShell gives the npm.ps1 execution-policy error:

```bash
npm.cmd install
npm.cmd run dev
```
