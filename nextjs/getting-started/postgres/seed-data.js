// docker/postgres/seed-data.js
const { Client } = require('pg');
const bcrypt = require('bcrypt');
const fs = require('fs');
const path = require('path');

// placeholder-data.js 파일 경로
const placeholderDataPath = require('./placeholder-data.js');

console.log(placeholderDataPath)

// placeholder-data.js 파일 내용 가져오기
const placeholderDataContent = placeholderDataPath

console.log(placeholderDataContent)



// 데이터 추출
const users = placeholderDataContent.users;
const customers = placeholderDataContent.customers;
const invoices = placeholderDataContent.invoices;
const revenue = placeholderDataContent.revenue;

async function seedDatabase() {
  const client = new Client({
    host: process.env.POSTGRES_HOST || 'localhost',
    port: 5432,
    user: process.env.POSTGRES_USER || 'nextuser',
    password: process.env.POSTGRES_PASSWORD || 'nextpassword',
    database: process.env.POSTGRES_DATABASE || 'nextdb'
  });

  try {
    await client.connect();
    console.log('Connected to PostgreSQL database');

    // Users 데이터 삽입
    console.log('Seeding users...', users);
    for (const user of users) {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      await client.query(
        'INSERT INTO users (id, name, email, password) VALUES ($1, $2, $3, $4) ON CONFLICT (id) DO NOTHING',
        [user.id, user.name, user.email, hashedPassword]
      );
    }

    // Customers 데이터 삽입
    console.log('Seeding customers...', customers);
    for (const customer of customers) {
      await client.query(
        'INSERT INTO customers (id, name, email, image_url) VALUES ($1, $2, $3, $4) ON CONFLICT (id) DO NOTHING',
        [customer.id, customer.name, customer.email, customer.image_url]
      );
    }

    // Invoices 데이터 삽입
    console.log('Seeding invoices...', invoices);
    for (const invoice of invoices) {
      await client.query(
        'INSERT INTO invoices (customer_id, amount, status, date) VALUES ($1, $2, $3, $4) ON CONFLICT (id) DO NOTHING',
        [invoice.customer_id, invoice.amount, invoice.status, invoice.date]
      );
    }

    // Revenue 데이터 삽입
    console.log('Seeding revenue...', revenue);
    for (const rev of revenue) {
      await client.query(
        'INSERT INTO revenue (month, revenue) VALUES ($1, $2) ON CONFLICT (month) DO NOTHING',
        [rev.month, rev.revenue]
      );
    }

    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await client.end();
  }
}

seedDatabase();