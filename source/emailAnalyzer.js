/**
 * Анализирует электронные адреса в строке.
 *
 * @param {String} text - строка, в которой нужно найти email-адреса
 * @returns {{
 *     emailCount: Number,
 *     uniqueEmails: Array<String>,
 *     mostFrequentEmail: String
 * }}
 */
const emailAnalyzer = (text) => {
    if (typeof text === "string") {
        let emails = text.match(/[a-zA-Z0-9._%+-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,}/g); if (emails === null) {
            emails = [];
        }
        const normalEmail = [];
        for (let i = 0; i < emails.length; i++) {
            const email = emails[i];
            const lowerEmail = email.toLowerCase();
            normalEmail.push(lowerEmail);
        }
        const emailCount = {};
        for (let i = 0; i < normalEmail.length; i++) {
            const email = normalEmail[i];
            if (emailCount[email] === undefined) {
                emailCount[email] = 0;
            }
            emailCount[email]++;
        }
        const uniqueEmails = [];
        for (let email in emailCount) {
            uniqueEmails.push(email);
        }
        let mostFrequentEmail = '';
        for (let i = 0; i < uniqueEmails.length; i++) {
            const email = uniqueEmails[i];
            if (mostFrequentEmail === '') {
                mostFrequentEmail = email;
            } else if (emailCount[email] > emailCount[mostFrequentEmail]) {
                mostFrequentEmail = email;
            }
        }
        const totalEmailCount = normalEmail.length;

        const result = {
            emailCount: totalEmailCount,
            uniqueEmails: uniqueEmails,
            mostFrequentEmail: mostFrequentEmail
        };

        return result;
    } else{
        return {
            emailCount: 0,
            uniqueEmails: [],
            mostFrequentEmail: ""
        };
    }

}