interface ICreateStudentDTO {
    registration: number;

    name: string;

    absence: number;

    firstTest: number;

    secondTest: number;

    thirdTest: number;

    situation?: string;

    noteForApproval?: number;
}

export default ICreateStudentDTO;
