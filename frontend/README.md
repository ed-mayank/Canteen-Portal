# How to run app:  
* Open terminal and type command `sudo mongod`  
* Open other window of terminal and run command `nodemon server.js`  for backend  
* Open other window of terminal and run command `npm start` to start front end  

# Backend:  
It contains two folders: models, routes and  
three files *server.js* , *package-lock.json*, *package.json*  

__models__: This folder contains five files: buyer.js, editFood.js, food.js foodOrder.js, vendor.js  

* buyer.js: Contains the schema for buyer registration  
* editFood.js: Contains the schema for items which can be edited by vendor.  
* food.js: Contains the schema for food registration/ to add food.  
* foodOrder.js:  Contains the schema to Order food.  
* vendor.js: Contains the schema for vendor registration. Same schema is used to edit vendor details.  

__routes__: Contains files which will be used to create backend and to give data in database.  

server.js:  main backend file which set up **API Endpoints**  

# Frontend:  
Contains three folders and some package files.  
Folders: node_modules, public which contains html and other built in files while creating react app.  

__src:__ contains components folder and several built in files like **App.js** etc.  

**components:** This folder contains almost all frontend code written by me.  
It contains 6 folders: Buyer, common, food, templates, users, vendors.  

__Buyer:__ Contains frontend for Buyerprofile page, to edit buyer profile page, favourites page, logout and myorders page.  

__vendor:__ contains frontend for vendor profile, to edit vendor profile, Menu , Statistics, vendor dashboard, logout, and to editfood by vendor.  

__templates:__  Contains frontend for Navigation bar.  

__common:__ Contains  code for frontend for Food Registration, Home page, Login page and Registration page.  

__food:__ Contains a folder name tabs which contains tabs and on clicking those tabs it shows the page for that type of food.  
It contais food.js file which direct the tabs.  
Header.js file creates header in website.  
style.css: to create css.  
