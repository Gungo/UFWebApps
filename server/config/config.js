//This file holds any configuration variables we may need
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    //mongodb://<dbuser>:<dbpassword>@ds133358.mlab.com:33358/uf_web_apps_db
    uri: 'mongodb://CEN3031:CEN3031TA@ds259732.mlab.com:59732/uf_web_apps_db', //place the URI of your mongo database here.
  },
  port: 8080
};
