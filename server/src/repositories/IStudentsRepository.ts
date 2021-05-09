import Student from '../entities/Student';

interface IClassrromsRepository {
    save(student: Student): Student;

    getStudent(): Student[];
}

export default IClassrromsRepository;
