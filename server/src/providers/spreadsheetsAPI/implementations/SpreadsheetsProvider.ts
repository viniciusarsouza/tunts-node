'use strict';
import { google, sheets_v4 } from 'googleapis';
import ISpreadsheetsProvider from '../ISpreadsheetsProvider';
import Student from '../../../entities/Student';
import keys from '../keys/keys.json';

class SpreadsheetsProvider implements ISpreadsheetsProvider {
    public classroomArray: Student[] = [];
    public averageTest: number = 0;

    public client = new google.auth.JWT(
        keys.client_email,
        undefined,
        keys.private_key,
        ['https://www.googleapis.com/auth/spreadsheets'],
    );

    getClassroom() {
        this.client.authorize((err, tokens) => {
            if (err) {
                console.log(err);
                return;
            } else {
                console.log('Connected');
                gsrun(this.client);
            }
        });

        const gsrun = async (cl) => {
            const gsapi = google.sheets({ version: 'v4', auth: cl });

            const options = {
                spreadsheetId: '1jauAYA-ndsOZHR1mRPSBUCHG7B4k-XLuCmasg_b6XlQ',
                range: 'A4:F27',
            };

            const dataArray = (await gsapi.spreadsheets.values.get(options))
                .data.values;

            dataArray.map((cv) => {
                this.classroomArray.push({
                    registration: cv[0],
                    name: cv[1],
                    absence: cv[2],
                    firstTest: cv[3],
                    secondTest: cv[4],
                    thirdTest: cv[5],
                    noteForApproval: 0,
                });
            });
        };

        console.log('Dados coletados com sucesso!');
    }

    updateClassroom() {
        const updateArray = [];

        this.client.authorize((err, tokens) => {
            if (err) {
                console.log(err);
                return;
            } else {
                console.log('Connected');
                gsrun(this.client);
            }
        });

        this.classroomArray.map((cv) => {
            this.averageTest =
                (Number(cv.firstTest) +
                    Number(cv.secondTest) +
                    Number(cv.thirdTest)) /
                3;
            if (this.averageTest < 50) {
                cv.situation = 'Reprovado por nota';
            } else {
                if (
                    this.averageTest >= 50 &&
                    this.averageTest < 70 &&
                    cv.absence > 15
                ) {
                    cv.situation = 'Exame Final';
                    cv.noteForApproval = Math.ceil(100 - this.averageTest);
                } else {
                    cv.absence < 15
                        ? (cv.situation = 'Aprovado')
                        : (cv.situation = 'Reprovado por falta');
                }
            }

            updateArray.push([cv.situation, cv.noteForApproval]);
        });

        const gsrun = async (cl) => {
            const gsapi = google.sheets({ version: 'v4', auth: cl });

            const updateOptions = {
                spreadsheetId: '1jauAYA-ndsOZHR1mRPSBUCHG7B4k-XLuCmasg_b6XlQ',
                range: 'G4',
                valueInputOption: 'USER_ENTERED',
                resource: { values: updateArray },
            };

            let res = await gsapi.spreadsheets.values.update(updateOptions);

            console.log('Planilha atualizada com sucesso!');
        };

        return this.classroomArray;
    }
}

export default SpreadsheetsProvider;
