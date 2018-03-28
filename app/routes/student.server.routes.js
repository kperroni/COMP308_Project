module.exports = function (app) {
    //load the controllers
    var user = require('../controllers/student.server.controller');
    //handle the routing of get and post request
    app.get('/student/getStudents', user.getStudents);
    app.post('/student/getStudentByUserId', user.getStudentByUserId);
    app.post('/student/getStudentByStudentNumber', user.getStudentByStudentNumber);
    app.post('/student/createStudent', user.createStudent);
};