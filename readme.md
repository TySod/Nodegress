# How to Use This Project (For Kids!)

## 1. Open the Project Folder
Find the folder called `Nodegress` on your computer.

## 2. Open a Terminal or Command Prompt
- On Windows, press `Win + R`, type `cmd`, and press Enter.
- Use `cd` to go to your `Nodegress` folder.

## 3. Install the Project's Packages
Type this and press Enter:
```
npm install
```
This will add all the tools the project needs.

## 4. Set Up the Database
1. Open **pgAdmin** (the tool for PostgreSQL).
2. Create a new database (you can call it `nodegress`).
3. Find the file named something like `schema.sql` or `init.sql` in your project folder.
4. Open this file in pgAdmin and run it to create the tables.

## 5. Add Database Details to the Project
- Look for a file called `.env.example` or `.env` in your folder.
- Fill in your database name, username, and password.
- If there is no `.env` file, copy `.env.example` and rename it to `.env`, then fill in your details.

## 6. Start the Project
Type this and press Enter:
```
npm start
```
This will run the project.

## 7. Open Your Web Browser
Go to the address shown in the terminal (usually `http://localhost:3000`).

## 8. What Does This Code Do?
This project is a web app that connects to a database. You can add, view, or change information using your browser. If you get stuck, ask an adult for help!
