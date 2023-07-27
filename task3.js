var nodemailer=require('nodemailer');
var transporter=nodemailer.createTransport({
service:'gmail',
auth:{
    user:'vijayabhavani933@gmail.com',
    pass:'pitpqkebhkxqscgy'
}
});
var mailOptions={
    from:'vijayabhavani933@gmail.com',
    to:'pravin.consensus@gmail.com',
    subject:'sending mail from node js',
    text:'GOOD Afternoon SIR'
};
transporter.sendMail(mailOptions,function(error,info){
    if(error)
    {
        console.log(error);
    }
    else{
    console.log('emailsent'+info.response);
    }
});