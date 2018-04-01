# REST_APIMongoDB

Install MongoDB from this link : https://www.mongodb.com/
Create in the folder of mongodb wher is installed two folder "data" and "log"
open Command Prompt as an administrator and go to the path of your folder mongodb installed and write this line : 
         cd bin
         mongod --directoryperdb --dbpath c:\mongodb\data\db --logpath c:\mongodb\log\mongo.log --logappend --install
         net start MongoDB
         mongo
         use TestDB
         db.createCollection('products')

after that , we need to run your code :
    1- download the code by this command int command prompt :      git clone https://github.com/Marwen238/REST_APIMongoDB.git
    2- cd REST_APIMongoDB
    3- npm install
    4- nodemon 
    5- open Postman or RestEasy to test this code 
Good Bye ...
