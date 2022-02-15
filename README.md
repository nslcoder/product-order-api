# Product Order API

It's a simple API to create, read, update and delete product orders. It's built using Node.js, Express, Mongoose and MongoDB. I needed a project that combines all the things I have learned to make an API so that anyone can see what I know within a single place and thus Product Order API was created.

## Features:

- Creating, reading, updating and deleting product orders
- Product order data validation with express-validator
- Rate limiting on all API endpoints with express-rate-limit
- Caching API responses with apicache
- Pagination, sorting and filtering
- Database seeding (Seeding script and initial data provided)

## Product Order Sample:

```json
{
    "customer": "Hero Gurung",
    "size": 2,
    "items": ["shoes", "desks"]
}
```

## Endpoints:

HTTP Method | Route | Description
--- | --- | ---
GET | `/` | Returns 'Namaste'. 
GET | `/api/orders` | Gets 5 orders from page 1. 
GET | `/api/orders?page=num&filter=size&sort=value` | Finds all orders that match the filter `size`, sorts the orders according to `value` (which is either ascending or descending) and returns 5 orders from the page with the number `num`. Sorting is based on the customer field of an order. Page number defaults to 1 if not supplied. 
GET | `/api/orders?page=num&filter=size` | Finds all orders that match the filter `size` and returns 5 orders from the page with the number `num`. 
GET | `/api/orders?page=num&sort=value` | Finds all orders, sorts the orders according to `value` and returns 5 orders from the page with the number `num`. 
GET | `/api/orders?page=num` | Returns 5 orders from the page with the number `num`. 
GET | `/api/orders/:id` | Gets an order by its id. 
POST | `/api/orders` | Creates a new order. 
PUT | `/api/orders/:id` | Updates an order by its id. 
DELETE | `/api/orders/:id` | Deletes an order by its id. 
DELETE | `/api/orders` | Deletes all orders. 

## How to Install and Run:

1. Clone the repo:
        
   
       git clone https://github.com/nslcoder/product-order-api
   
2. Go inside the local copy:
        
   
        cd product-order-api
    
3. Install the dependencies: 
        
   
        npm install
    
4. Create a `.env` file at the project root and add your database URL:
        
   
        DB_URL="mongodb://127.0.0.1:27017/<yourdbname>"
    
5. Seed the database:
   
   
   
   ```
    npm run seed
   ```
   
5. Start the server:
    
   
        npm start

## License
This project uses [the MIT License](https://github.com/nslcoder/product-order-api/blob/main/LICENSE.md).

