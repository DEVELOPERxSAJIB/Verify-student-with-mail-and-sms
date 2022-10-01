const nodemailer = require('nodemailer');
const dotenv = require('dotenv').config();
 
// send mail
const verifyMail = async (to, sub, data = {}) => {

    // mail send
    const transport = nodemailer.createTransport({
        host : process.env.EMAIL_HOST,
        port : process.env.EMAIL_PORT,
        auth : {
            user : process.env.EMAIL_USER,
            pass : process.env.EMAIL_PASS
        }
    });


    // create transpost
    await transport.sendMail({
        from : `"Account Verify" <${process.env.EMAIL_HOST}>`, 
        to : to,
        subject : sub,
        html : `  
            <!DOCTYPE html>

            <html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
            <head>
            <title></title>
            <meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
            <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
            <!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
            <style>
                    * {
                        box-sizing: border-box;
                    }
            
                    body {
                        margin: 0;
                        padding: 0;
                    }
            
                    a[x-apple-data-detectors] {
                        color: inherit !important;
                        text-decoration: inherit !important;
                    }
            
                    #MessageViewBody a {
                        color: inherit;
                        text-decoration: none;
                    }
            
                    p {
                        line-height: inherit
                    }
            
                    .desktop_hide,
                    .desktop_hide table {
                        mso-hide: all;
                        display: none;
                        max-height: 0px;
                        overflow: hidden;
                    }
            
                    @media (max-width:700px) {
                        .desktop_hide table.icons-inner {
                            display: inline-block !important;
                        }
            
                        .icons-inner {
                            text-align: center;
                        }
            
                        .icons-inner td {
                            margin: 0 auto;
                        }
            
                        .row-content {
                            width: 100% !important;
                        }
            
                        .mobile_hide {
                            display: none;
                        }
            
                        .stack .column {
                            width: 100%;
                            display: block;
                        }
            
                        .mobile_hide {
                            min-height: 0;
                            max-height: 0;
                            max-width: 0;
                            overflow: hidden;
                            font-size: 0px;
                        }
            
                        .desktop_hide,
                        .desktop_hide table {
                            display: table !important;
                            max-height: none !important;
                        }
                    }
                </style>
            </head>
            <body style="background-color: #efe6db; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
            <table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #efe6db;" width="100%">
            <tbody>
            <tr>
            <td>
            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #000000;" width="100%">
            <tbody>
            <tr>
            <td>
            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;" width="680">
            <tbody>
            <tr>
            <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
            <table border="0" cellpadding="0" cellspacing="0" class="text_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
            <tr>
            <td class="pad" style="padding-bottom:5px;padding-left:20px;padding-right:10px;padding-top:60px;">
            <div style="font-family: sans-serif">
            <div class="" style="font-size: 12px; mso-line-height-alt: 21.6px; color: #eb6b09; line-height: 1.8; font-family: Helvetica Neue, Helvetica, Arial, sans-serif;">
            <p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 25.2px;"><strong> Live Webinar</strong></p>
            </div>
            </div>
            </td>
            </tr>
            </table>
            <table border="0" cellpadding="0" cellspacing="0" class="text_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
            <tr>
            <td class="pad" style="padding-bottom:15px;padding-left:20px;padding-right:10px;">
            <div style="font-family: sans-serif">
            <div class="" style="font-size: 12px; mso-line-height-alt: 21.6px; color: #ffffff; line-height: 1.8; font-family: Helvetica Neue, Helvetica, Arial, sans-serif;">
            <p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 25.2px;"><strong><span style="font-size:28px;">Welcome to our Academy</span></strong></p>
            </div>
            </div>
            </td>
            </tr>
            </table>
            </td>
            </tr>
            </tbody>
            </table>
            </td>
            </tr>
            </tbody>
            </table>
            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #000000; background-image: url('images/web_bg.png'); background-repeat: no-repeat;" width="100%">
            <tbody>
            <tr>
            <td>
            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;" width="680">
            <tbody>
            <tr>
            <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="50%">
            <table border="0" cellpadding="0" cellspacing="0" class="text_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
            <tr>
            <td class="pad" style="padding-bottom:5px;padding-left:20px;padding-right:10px;padding-top:85px;">
            <div style="font-family: sans-serif">
            <div class="" style="font-size: 12px; mso-line-height-alt: 21.6px; color: #eb6b09; line-height: 1.8; font-family: Helvetica Neue, Helvetica, Arial, sans-serif;">
            <p style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 25.2px;"><strong>Hi, ${data.name}</strong></p>
            </div>
            </div>
            </td>
            </tr>
            </table>
            <table border="0" cellpadding="0" cellspacing="0" class="text_block block-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
            <tr>
            <td class="pad" style="padding-bottom:5px;padding-left:20px;padding-right:10px;">
            <div style="font-family: sans-serif">
            <div class="" style="font-size: 12px; mso-line-height-alt: 21.6px; color: #ffffff; line-height: 1.8; font-family: Helvetica Neue, Helvetica, Arial, sans-serif;">
            <p style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 25.2px;"><strong><span style="font-size:28px;">Turn Strategy Into <span style="color:#eb6b09;">Yearly</span> Plans</span></strong></p>
            </div>
            </div>
            </td>
            </tr>
            </table>
            <table border="0" cellpadding="0" cellspacing="0" class="text_block block-5" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
            <tr>
            <td class="pad" style="padding-bottom:20px;padding-left:20px;padding-right:20px;padding-top:10px;">
            <div style="font-family: sans-serif">
            <div class="" style="font-size: 12px; mso-line-height-alt: 21.6px; color: #e5e5e5; line-height: 1.8; font-family: Helvetica Neue, Helvetica, Arial, sans-serif;">
            <p style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 25.2px;"><span style="font-size:14px;">You recently joined in our Academy, We have some policy of verification. You can verify your with your email address by the given veify button below. Thank You.</span></p>
            </div>
            </div>
            </td>
            </tr>
            </table>
            <table border="0" cellpadding="0" cellspacing="0" class="button_block block-6" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
            <tr>
            <td class="pad" style="padding-bottom:15px;padding-left:20px;padding-right:10px;padding-top:10px;text-align:left;">
            <div align="left" class="alignment">
            <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="www.example.com" style="height:44px;width:200px;v-text-anchor:middle;" arcsize="0%" strokeweight="0.75pt" strokecolor="#111111" fillcolor="#ffffff"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#111111; font-family:Arial, sans-serif; font-size:16px"><![endif]--><a href="http://localhost:5050/student/verify/${data.token}" style="text-decoration:none;display:inline-block;color:#111111;background-color:#ffffff;border-radius:0px;width:auto;border-top:1px solid #111111;font-weight:400;border-right:1px solid #111111;border-bottom:1px solid #111111;border-left:1px solid #111111;padding-top:5px;padding-bottom:5px;font-family:Helvetica Neue, Helvetica, Arial, sans-serif;text-align:center;mso-border-alt:none;word-break:keep-all;" target="_blank"><span style="padding-left:35px;padding-right:35px;font-size:16px;display:inline-block;letter-spacing:normal;"><span dir="ltr" style="word-break: break-word; line-height: 32px;">Confirm Your Mail</span></span></a>
            <!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
            </div>
            </td>
            </tr>
            </table>
            </td>
            <td class="column column-2" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="50%">
            <table border="0" cellpadding="0" cellspacing="0" class="image_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
            <tr>
            <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;padding-top:75px;padding-bottom:45px;">
            <div align="center" class="alignment" style="line-height:10px"><img alt="Educational Webinar" src="https://lh3.googleusercontent.com/-qtTpguNOcldfvlkC0fwTPppHDS4tRrQiq1j8M25kUtF10ATwPTygoT7Lm-kKps6wCQOuEKJVPlTDYR-ePgmrAaGXMiq5nBpXrIqRT7OUZrCdyUrrJrROjpyI3kuszBzsccrAwhbddnwSZEOyvefMFhVDjVptdIPygiYl2JxkQAgYhzzvYoIfQGaSlhenM2XPwATY8dsJQgAACd2Jkyf4S1qOateOHjQq8GqVDlm4l8IhluUF1pkyOROPYKMssJR5yLpXk7mQraLa7AcMQTK3F8CW9AoXCZxYSQiwn5Jd9wo-0YBTe8aJUL_DH8fQ4MBo8UbkczP6q1b4kD1gOf2jtj5v0TxuIuOL6jHJyATdRNPNsvfgqV1U92YiYUsxiWMiyae7Z5csgmS_38ywBPoz-ykJNTmfxGHlawgVXhhKN8VFwUkgNgCRqad_3OUGPqAeFptmeSWt93FMzMJETF-B5Hd7qzf1sw_bdQB0VtbUfxfDNjIj22QKI2vKxpfMm_frbFs2vlkRvsNTd2K9zLGMaGydahiH8WP-vOOaTsFTbUQP3SStB14aFO05Kdjq0EUraE31vXb6o-0-_lTjSFGNEmJ2_O-yRNvVgoZHtf-HtEWL_YaUWIBglcSMKElclS7NZvSYld_nTuNk3D0B0l8ivJ_siHPcHoRsI3Kh-vJqh0PrUlRcUNR43DVFaixYMAl1gbLB-iIyoqaGDtCu9RFGEk8Z79VWHcajjho0oKxS9pB8tOFcJG1FahL_j0-Ox-sMcuRvqckVXy0iLc5Gyf-sO3vEJJGyMOm9c2FK9riLUjt9eLs6Fn43KjzQkqvIpsCkI8RHb7qAwwlT1Q4liEaPhKESH6eSHtBbw2uZCNqZcJ-9Qk-ucREFkvP5o0P43Hb47CQ7A9SICi2Lr5fYDUQSQRLBzenCITQ6B6Ilw=w454-h620-no?authuser=0" style="display: block; height: auto; border: 0; width: 340px; max-width: 100%;" title="Educational Webinar" width="340"/></div>
            </td>
            </tr>
            </table>
            </td>
            </tr>
            </tbody>
            </table>
            </td>
            </tr>
            </tbody>
            </table>
            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #000000;" width="100%">
            <tbody>
            <tr>
            <td>
            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;" width="680">
            <tbody>
            <tr>
            <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
            <table border="0" cellpadding="0" cellspacing="0" class="divider_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
            <tr>
            <td class="pad" style="padding-bottom:35px;padding-left:10px;padding-right:10px;padding-top:35px;">
            <div align="center" class="alignment">
            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
            <tr>
            <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px solid #FFFFFF;"><span> </span></td>
            </tr>
            </table>
            </div>
            </td>
            </tr>
            </table>
            </td>
            </tr>
            </tbody>
            </table>
            </td>
            </tr>
            </tbody>
            </table>
            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
            <tbody>
            <tr>
            <td>
            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;" width="680">
            <tbody>
            <tr>
            <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
            <table border="0" cellpadding="0" cellspacing="0" class="icons_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
            <tr>
            <td class="pad" style="vertical-align: middle; color: #9d9d9d; font-family: inherit; font-size: 15px; padding-bottom: 5px; padding-top: 5px; text-align: center;">
            <table cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
            <tr>
            <td class="alignment" style="vertical-align: middle; text-align: center;">
            <!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
            <!--[if !vml]><!-->
            <table cellpadding="0" cellspacing="0" class="icons-inner" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block; margin-right: -4px; padding-left: 0px; padding-right: 0px;">
            <!--<![endif]-->
            
            </table>
            </td>
            </tr>
            </table>
            </td>
            </tr>
            </table>
            </td>
            </tr>
            </tbody>
            </table>
            </td>
            </tr>
            </tbody>
            </table>
            </td>
            </tr>
            </tbody>
            </table><!-- End -->
            </body>
            </html>
        `
    });

}



// module exports 
module.exports = {
    verifyMail
}