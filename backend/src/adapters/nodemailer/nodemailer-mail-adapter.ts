import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';
const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "d2e3bb43d5f386",
    pass: "3ddfe5d6cbdee4"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
 async sendMail({subject, body }: SendMailData){
  await transport.sendMail({
    from: 'Equipe Feedget <oi@feedget.com>',
    to: 'Gabriel Gianesini <gabriel.gianesini@gmail.com>',
    subject,
    html: body
  });
 }
}