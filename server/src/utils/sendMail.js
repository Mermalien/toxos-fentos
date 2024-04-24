const { SENDER_EMAIL, SENDER_NAME } = process.env;

const Mailjet = require("node-mailjet");
const mailjet = Mailjet.apiConnect(
  process.env.MAILJET_PUBLIC_KEY,
  process.env.MAILJET_SECRET_KEY
);

const sendMail = async (subject, htmlContent, email) => {
  try {
    const request = mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: SENDER_EMAIL,
            Name: SENDER_NAME,
          },
          To: [
            {
              Email: email,
            },
          ],
          Subject: subject,
          HTMLPart: htmlContent,
        },
      ],
    });

    const result = await request;
    //console.log(result.body);
    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = sendMail;
