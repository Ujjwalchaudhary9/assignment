const Student = require('../models/data');
async function addUser(req, res) {
    try {
        console.log(req.body);
        let student = new Student(req.body);
        await student.save();
        res.render('studentinsert')
    } catch (error) {
        console.log('ERROR')
    }
}
module.exports={
    addUser 
}