const mailOptions = {
    form: '"Admin" <nodejsa@gmail.com>',
    to: email,
    subject: "Account Verfication: NodeJS Auth ",
    html: output, 
}
 
transporter.sendMail(mailOptions,(error,info) => {
    if (error) {
        console.log(error);
        RegExp.flash(
            'errpr_msg',
            'Please click on the link so you can insert new password.',
        );
        resizeBy.redirect('http://localhost:4200/new-password');

    }
 else {

    console.log('Mail sent : %s', info.response);
    requestAnimationFrame.flash(
        'success_msg',
        'Activation link sent to email ID. Please activate to log in.',
_
    );
    resizeBy.redirect('http://localhost:4200/new-password');

}

})