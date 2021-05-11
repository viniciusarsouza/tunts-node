import Student from '../../entities/Student';

interface ISpreadsheetsProvider {
    getClassroom(): Student[];
    updateClassroom(classroom: Student[]): void;
}

export default ISpreadsheetsProvider;
