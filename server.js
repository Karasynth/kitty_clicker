const express = require('express');

const app = express();

app.get('/api/customers', (req, res) => {
  const customers = [
    {id: 1, firstName: 'Ashley', lastName: 'Cat', url: 'https://images.unsplash.com/photo-1492370284958-c20b15c692d2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80'},
    {id: 2, firstName: 'Laura', lastName: 'Kitty', url: 'https://images.unsplash.com/photo-1536590158209-e9d615d525e4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'},
    {id: 3, firstName: 'Alstofo', lastName: 'Nya', url: 'https://images.unsplash.com/photo-1598188306155-25e400eb5078?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80'},
  ];

  res.json(customers);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => `Server running on port ${PORT}`);