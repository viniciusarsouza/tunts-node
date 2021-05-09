class Student {
    public registration: number;

    public name: string;

    public absence: number;

    public firstTest: number;

    public secondTest: number;

    public thirdTest: number;

    public situation?: string;

    public noteForApproval?: number;

    constructor(props: Student) {
        this.registration = props.registration;
        this.name = props.name;
        this.absence = props.absence;
        this.firstTest = props.firstTest;
        this.secondTest = props.secondTest;
        this.thirdTest = props.thirdTest;
        this.situation = props.situation;
        this.noteForApproval = props.noteForApproval;
    }
}

export default Student;
