import Student from '../../entities/Student';

interface ISpreadsheetsProvider {
    getClassroom(): Student[];
    updateClassroom(): null;
}
