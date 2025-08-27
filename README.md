## 📚 Parcel Delivery Management Frontend

A simple client site for Parcel Management System — built with **React js**, **TypeScript**, **Redux**, and **Shadcn**.

### Frontend Live link: https://parcel-delivery-system-frontend-one.vercel.app/
### Backend Api Live link: https://parcel-dms-backend.vercel.app/

#### 🛠️ Technologies used: React, Redux RTK-Query , TypeScript, ShadCN.

#### ✨ Features :

- JWT-based login system with Seperate Dahsboard: admin | sender | receiver

- Senders can:

* Create parcel delivery requests
* Cancel parcel (if not dispatched)
* View all their parcels.

- Receivers can:

* View incoming parcels
* Confirm parcel delivery
* Delivery history

- Admins can:

* View and manage all users and parcels
* Block or unblock users or parcels
* Change parcel status (e.g., Approved, In Transit, Delivered)


#### ⚙️ How to Set Up Locally

- First you have to install node and github in your machine.
- then git clone the repository or download the zip file
- in root folder go to the terminal, hit - `npm i` then `npm run dev`
- copy `.env.example` to `.env` and in the `.env` file give your credentials.
- to go the url `http://localhost:5173/` in your browser.


#### User Credentials for testing

- Admin
* Email - admin@gmail.com
* password - 123456789 


- Sender
* Email - sender@gmail.com
* password - 123456789 


- Receiver
* Email - receiver@gmail.com
* password - 123456789 
