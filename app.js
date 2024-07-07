var student;
(function (student) {
    student[student["MASHAL"] = 15] = "MASHAL";
    student[student["KHIZRA"] = 16] = "KHIZRA";
    student[student["FAZILA"] = 17] = "FAZILA";
})(student || (student = {}));
// let index:string=student[1]
// console.log(index)
var students = student.MASHAL;
console.log(students);
