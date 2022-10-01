const path = require('path');
const {readFileSync, writeFileSync, write} = require('fs');
const { verifyMail } = require('../utility/sendMail');
const { json } = require('express');


// show all students page
const getAllStudent = (req, res) => {

    const students = JSON.parse(readFileSync(path.join(__dirname, '../db/student.json')));

    const verifyed = students.filter(data => data.isverifyed == true)

    res.render('student/index', {
        students : verifyed
    });
}

// create all students page
const createStudent = (req, res) => {
    res.render('student/create');
}

// get all students page


const getSingelStudent = (req, res) => {

    const students = JSON.parse(readFileSync(path.join(__dirname, '../db/student.json')));

    const {id} = req.params;
    
    const student = students.find(data => data.id == id );

    res.render('student/show', {student});
}

// edit all students page
const editStudent = (req, res) => {

    // student data
    const students = JSON.parse(readFileSync(path.join(__dirname, '../db/student.json')));

    // get student id
    const {id} = req.params;

    // edit student data
    const edit_student = students.find(data => data.id == id);

    res.render('student/edit', {
        students : edit_student
    });
}

// create single students page
const studentDataStore = async (req, res) => {

    const students = JSON.parse(readFileSync(path.join(__dirname, '../db/student.json')));

    // get all data
    const {name, email, cell, location} = req.body

    //  get last id
    let last_id = 1;
    if (students.length > 0) {
        last_id = (students[students.length - 1].id +1);
    }

    // get token for student 
    const token = Date.now() + '_' + Math.floor(Math.random() * 1000000);

    // send maii
    await verifyMail(email, "Verify Email", {
        name, email, token, cell
    })

    // add new data
    students.push({
        id : last_id,
        name : name,
        email : email,
        cell : cell,
        location : location,
        photo : req.file ? req.file.filename : "avatar.png",
        isverifyed : false,
        token : token
    })


    // now write data to json db
    writeFileSync(path.join(__dirname, '../db/student.json'), JSON.stringify(students))

    // redirect
    res.redirect('/student');
}

// detele studenent controller
const deleteStudent = (req, res) => {

    const students = JSON.parse(readFileSync(path.join(__dirname, '../db/student.json')));

    const {id} = req.params

    const newStudent = students.filter(data => data.id != id);

    writeFileSync(path.join(__dirname, '../db/student.json'), JSON.stringify(newStudent));

    res.redirect('/student')
}


// update student data
const updateStudent = (req, res) => {
    // get student id
    const {id} = req.params;
    
    // all students
    const students = JSON.parse(readFileSync(path.join(__dirname, '../db/student.json')));
    
    students[students.findIndex(data => data.id == id)] = {
        ...students[students.findIndex(data => data.id == id)],
        name : req.body.name,
        email : req.body.email,
        cell : req.body.cell,
        location : req.body.location
    }

    writeFileSync(path.join(__dirname, '../db/student.json'), JSON.stringify(students));

    res.redirect('back')
}


// unverified student controllers
const getAllUnverifiedStudent = (req, res) => {

    const students = JSON.parse(readFileSync(path.join(__dirname, '../db/student.json')));

    const unverifyed = students.filter(data => data.isverifyed == false)

    res.render('student/unverifyed', {
        students : unverifyed
    });
}

// Verify Account Route
const verifyAccount = (req, res) => {

    // all students
    const students = JSON.parse(readFileSync(path.join(__dirname, '../db/student.json')));

    // token 
    const token = req.params.token;

    // get student verify data
    students[students.findIndex(data => data.token == token)] = {
        ...students[students.findIndex(data => data.token == token)],
        isverifyed : true,
        token : ''
    }

    // update verifyed data
    writeFileSync(path.join(__dirname, '../db/student.json'), JSON.stringify(students));

    // redirect
    res.redirect('/student/');
   
}


// module exports 
module.exports = {
    getAllStudent,
    createStudent,
    getSingelStudent,
    editStudent,
    studentDataStore,
    deleteStudent,
    updateStudent,
    getAllUnverifiedStudent,
    verifyAccount
}


