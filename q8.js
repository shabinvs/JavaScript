
function extractEmails(text) {
    const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g;
    const emails = text.match(emailRegex);
    return emails || [];
}

const text = "You can reach out to me at john.doe@example.com or support@mywebsite.org.";
const emails = extractEmails(text);

console.log(emails);
