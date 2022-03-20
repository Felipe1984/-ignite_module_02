import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { Model, Server } from "miragejs";



new Server({

  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance de website',
          type: 'deposit',
          category: 'dev',
          amount: 6000,
          createdAt: new Date("2022-05-27 17:00:00")
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Casa',
          amount: 2200,
          createdAt: new Date("2022-05-30 10:40:00")
        }
      ]
    })
  },

  routes() {
    this.namespace = "api";
    this.get("/transactions", schema => {
      return schema.all("transaction")
    })

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create("transaction", data);
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
