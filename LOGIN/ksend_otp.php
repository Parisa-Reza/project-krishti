<?php
//new email
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

//new mail


session_start();
$con=mysqli_connect('localhost','root','','login');
$email=$_POST['email'];
$res=mysqli_query($con,"select * from users where email='$email'");
$count=mysqli_num_rows($res);
if($count>0){
	$otp=rand(11111,99999);
	mysqli_query($con,"update users set otp='$otp' where email='$email'");
	$html="Your otp verification code is ".$otp;
	$_SESSION['EMAIL']=$email;
	smtp_mailer($email,'OTP Verification',$html);
	echo "yes";
}else{
	echo "not_exist";
}

function smtp_mailer($to,$subject, $msg){
	// require_once("smtp/class.phpmailer.php");
	// $mail = new PHPMailer(); 
	// $mail->IsSMTP(); 
	// $mail->SMTPDebug = 1; 
	// $mail->SMTPAuth = true; 
	// $mail->SMTPSecure = 'TLS'; 
	// $mail->Host = "smtp.sendgrid.net";
	// $mail->Port = 587; 
	// $mail->IsHTML(true);
	// $mail->CharSet = 'UTF-8';
	// $mail->Username = "doraemonhattori5@gmail.com";

	// $mail->SetFrom("doraemonhattori5@gmail.com");
	// $mail->Subject = $subject;
	// $mail->Body =$msg;
	// $mail->AddAddress($to);
	// if(!$mail->Send()){
	// 	return 0;
	// }else{
	// 	return 1;
	// }

	$mail = new PHPMailer(true);

try {
 
                  
    $mail->isSMTP();                                           
    $mail->Host       = 'smtp.gmail.com';                     
    $mail->SMTPAuth   = true;                                   
    $mail->Username   = 'doraemonhattori5@gmail.com';                    
    $mail->Password   = 'fogceycdwrgtojkd';                             
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            
    $mail->Port       = 465;                                    

  
    $mail->setFrom('doraemonhattori5@gmail.com', 'rez');

    $mail->addAddress($to);             


    $mail->isHTML(true);                                 
    $mail->Subject = $subject;
    $mail->Body    = $msg;
    // $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
	return 1;
} catch (Exception $e) {
    // echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
	return 0;
}
}
?>