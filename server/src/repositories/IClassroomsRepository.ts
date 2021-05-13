import Student from '../entities/Student';

interface IClassrromsRepository {
    getStudent(): Student[];
}

export default IClassrromsRepository;
