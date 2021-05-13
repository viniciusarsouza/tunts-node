import Student from '../../entities/Student';

interface ISpreadsheetsProvider {
    getClassroom(): void;
    updateClassroom(): Student[];
}

export default ISpreadsheetsProvider;
