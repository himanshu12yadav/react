const studentDb = ['jordan', 'erick', 'john', 'michael']

const findStudent = (allStudents, student) =>{
    for (let i=0; i < allStudents.length; i++){
        if (student === allStudents[i]){
            console.log(student);
            return;
        }
    }
}

findStudent(studentDb, "jordan");

