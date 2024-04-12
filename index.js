const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const { auth, requiresAuth } = require('express-openid-connect');
const { getEmployees, createEmployee, removeEmployee, patchEmployee } = require("./queries/employee.queries");
const { getCategories, createCategory, removeCategory, patchCategory } = require("./queries/category.queries");
const { getCompanies, createCompany, removeCompany, patchCompany } = require("./queries/company.queries");
const path = require('path');

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());

require('dotenv').config();

const config = {
  authRequired: false,
  auth0Logout: true,
  baseURL: process.env.BASE_URL,
  clientID: process.env.CLIENT_ID,
  issuerBaseURL: process.env.ISSUER_BASE_URL,
  secret: process.env.SECRET
};

// The `auth` router attaches /login, /logout
// and /callback routes to the baseURL
app.use(auth(config));

// req.oidc.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(
    req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out'
  )
});

// The /profile route will show the user profile as JSON
app.get('/profile', (req, res) => {
  res.send(JSON.stringify(req.oidc.user, null, 2));
});

// EMPLOYEES
app.get("/employees", (req, res) => {
  getEmployees(req, res);
});

app.post("/employee", requiresAuth(), (req, res) => {
    createEmployee(req, res);
});

app.patch("/employee/:id", requiresAuth(), (req, res) => {
    patchEmployee(req, res);
});

app.delete('/employee/:id', requiresAuth(), (req, res) => {
    removeEmployee(req, res);
});

// CATEGORIES
app.get("/categories", (req, res) => {
    getCategories(req, res);
  });

app.post("/category", requiresAuth(), (req, res) => {
    createCategory(req, res);
});

app.delete('/category/:id', requiresAuth(), (req, res) => {
  removeCategory(req, res);
});

app.patch('/category/:id', requiresAuth(), (req, res) => {
  patchCategory(req, res);
});

// COMPANIES
app.get("/companies", (req, res) => {
    getCompanies(req, res);
  });

app.post("/company", requiresAuth(), (req, res) => {
    createCompany(req, res);
});

app.delete('/company/:id', requiresAuth(), (req, res) => {
  removeCompany(req, res);
});

app.patch('/company/:id', requiresAuth(), (req, res) => {
  patchCompany(req, res);
});

// PORT
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
