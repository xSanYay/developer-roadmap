# SELECT Statement

The `SELECT` statement is essential for retrieving data from a database. It allows you to specify which columns to retrieve and from which table.

## Basic Syntax:
SELECT column1, column2, ...
FROM table_name
WHERE condition;

## Examples:
-- Retrieve specific columns
SELECT name, age
FROM students
WHERE age > 18;

-- Retrieve all columns
SELECT *
FROM students;

## Key Concepts:

- **DISTINCT:** Returns unique values.
  SELECT DISTINCT city 
  FROM employees;

- **Aliases:** Rename columns or tables temporarily.
  SELECT name AS student_name
  FROM students;

- **ORDER BY:** Sort results.
  SELECT name, age
  FROM students
  ORDER BY age DESC;

- **LIMIT:** Limit the number of rows returned.
  SELECT name, age
  FROM students
  ORDER BY age DESC
  LIMIT 10;

The `SELECT` statement is the foundation of SQL queries, enabling efficient data retrieval.
