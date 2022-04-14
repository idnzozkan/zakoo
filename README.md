# 🛒 Zakoo

`Zakoo` is a Stripe-integrated full-stack e-commerce application which can be managed with an admin dashboard.

It contains three projects: `dashboard`, `frontend`, and `backend`.

- **Dashboard:** A controlling panel that lets the admins to do CRUD operations on users, products and orders. Also displays some analytics about the users, products and orders.

- **Frontend:** The main website of the Zakoo that displays the products and lets signed-in users to order them.

- **Backend:** Server-side of Zakoo which includes the API.

## Features

- Image uploading with Firebase
- Stripe integration
- User authentication
- Admin authorization
- Visualizing data using chart
- Aggregation operations on MongoDB and displaying them
- Creating, deleting and updating operations for products, orders and users.
- Filtering and sorting products
- Basic slider
- UX improvements using skeletons, toasts, etc.

## Installation

Before running the application, you need to set the required environment variables. In order to do that, you can use the provided example env file.

Go to the **root directory** of the project and rename the existing file named `.env.example` to `.env` first. After that, open up the file and fill it in like the following.

```bash
# Dashboard
REACT_APP_FIREBASE_API_KEY=API_KEY
REACT_APP_FIREBASE_AUTH_DOMAIN=PROJECT_ID.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=PROJECT_ID
REACT_APP_FIREBASE_STORAGE_BUCKET=PROJECT_ID.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=SENDER_ID
REACT_APP_FIREBASE_APP_ID=APP_ID
REACT_APP_FIREBASE_MEASUREMENT_ID=G-MEASUREMENT_ID

# Frontend
REACT_APP_STRIPE_PUBLIC_KEY=pk_test_TYooMQauvdEDq54NiTphI7jx

# Backend
MONGODB_CONNECTION_STRING=mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]
PASSWORD_SECRET=secretkey123
JWT_SECRET=iamsupersecret
STRIPE_PRIVATE_KEY=sk_test_4eC39HqLyjWDarjtT1zdp7dc
```

Now, let's explain how you can obtain those.

#### Dashboard

```bash
REACT_APP_FIREBASE_API_KEY=
REACT_APP_FIREBASE_AUTH_DOMAIN=
REACT_APP_FIREBASE_PROJECT_ID=
REACT_APP_FIREBASE_STORAGE_BUCKET=
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=
REACT_APP_FIREBASE_APP_ID=
REACT_APP_FIREBASE_MEASUREMENT_ID=
```

- In order to run this web application, you need to initialize a Firebase Web App project. After creating a new Firebase Web App project, you will be able to get the config object. See the [documentation](https://firebase.google.com/docs/web/learn-more#config-object) to learn more.

  If you enabled Google Analytics in your Firebase project, you can provide the measurement id for the variable `REACT_APP_FIREBASE_MEASUREMENT_ID`.

#### Frontend

```bash
REACT_APP_STRIPE_PUBLIC_KEY=
```

- You need to have a Stripe account to get your Stripe API keys. After logging into the Stripe Dashboard, you will be able to find your API keys from [here](https://dashboard.stripe.com/account/apikeys). See the [documentation](https://stripe.com/docs/keys) to learn more.

  After getting the API keys, you need to provide the **_public key_** for the variable `REACT_APP_STRIPE_PUBLIC_KEY`.

#### Backend

```bash
MONGODB_CONNECTION_STRING=
PASSWORD_SECRET=
JWT_SECRET=
STRIPE_PRIVATE_KEY=
```

- In order to store your data, you need to create a database on MongoDB Atlas. After creating the database, you will be able to get the connection string. See the [documentation](https://www.mongodb.com/docs/manual/reference/connection-string/) to learn more.

  After getting the connection string, you need to provide it for the variable `MONGODB_CONNECTION_STRING`.

- For the authentication part, you need to provide the secret keys as arbitrary strings (they can also be generated via third-party services, like [this one](https://www.grc.com/passwords.htm)) for the variables `PASSWORD_SECRET` and `JWT_SECRET`.

- You need to have a Stripe account to get your Stripe API keys. After logging into the Stripe Dashboard, you will be able to find your API keys from [here](https://dashboard.stripe.com/account/apikeys). See the [documentation](https://stripe.com/docs/keys) to learn more.

  After getting the API keys, you need to provide the **_private key_** for the variable `STRIPE_PRIVATE_KEY`.

## Running Zakoo

Open your terminal, get to the project directory and run the following command:

```bash
$ docker-compose up
```

After that, you should be able to display the **website** on http://localhost:3000 and the **dashboard** on http://localhost:3030 in your browser.

## License

MIT License

Copyright (c) 2022 Deniz Ozkan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
