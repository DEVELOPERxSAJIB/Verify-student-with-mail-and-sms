const express = require('express');
const { getAllStudent, createStudent, getSingelStudent, editStudent, studentDataStore, deleteStudent, updateStudent, getAllUnverifiedStudent, verifyAccount, verifyStudentByPhone } = require('../controllers/studentsControllers');
const multer = require('multer');
const path = require('path');

// init Router
const router = express.Router();

// multer config
const storage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/images/students'));
    },

    filename : (req, file, cb) => {
        cb(null, Date.now() + "_" + file.originalname);
    }
});

const studentPhotoMulter = multer({
    storage : storage
}).single('student-photo');

// routes
router.get('/', getAllStudent);
router.get('/create', createStudent);
router.post('/create', studentPhotoMulter, studentDataStore);
router.get('/unverified', getAllUnverifiedStudent);


router.get('/verify/:token', verifyAccount);
router.get('/edit/:id', editStudent);
router.post('/update/:id', updateStudent);
router.get('/phoneverify/:id', verifyStudentByPhone);

router.get('/delete/:id', deleteStudent);
router.get('/:id', getSingelStudent)




// module exports
module.exports = router