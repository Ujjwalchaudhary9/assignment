const Student = require('../models/data');
async function addUser(req, res) {
    try {
        console.log(req.body);
        let student = new Student(req.body);
        console.log(student);
        await student.save();
        res.render('home',{
            student:student
        })
    } catch (error) {
        console.log('ERROR');
    }
}
module.exports={
    addUser 
}