class Classroom {
    public registration: number;

    public student: string;

    public absence: number;

    public firstTest: number;

    public secondTest: number;

    public thirdTest: number;

    public situation?: string;

    public noteForApproval?: number;

    constructor(props: Classroom) {
        this.registration = props.registration;
        this.student = props.student;
        this.absence = props.absence;
        this.firstTest = props.firstTest;
        this.secondTest = props.secondTest;
        this.thirdTest = props.thirdTest;
        this.situation = props.situation;
        this.noteForApproval = props.noteForApproval;
    }
}

export default Classroom;
