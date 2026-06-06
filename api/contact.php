<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

// L-Appel Manuel mta3 les fichiers daxel folder PHPMailer (Installation sans Composer)
require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Parsing manual simplified .env context config loader
if (file_exists(__DIR__ . '/.env')) {
    $lines = file(__DIR__ . '/.env', FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        if (strpos(trim($line), '#') === 0) continue;
        list($name, $value) = explode('=', $line, 2);
        $_ENV[trim($name)] = trim($value);
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Seta9bel el data mel Frontend (React fetch call)
    $data = json_decode(file_get_contents("php://input"), true);

    $name = isset($data['name']) ? strip_tags(trim($data['name'])) : '';
    $email = isset($data['email']) ? filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL) : '';
    $tel = isset($data['tel']) ? strip_tags(trim($data['tel'])) : '';
    $message = isset($data['message']) ? strip_tags(trim($data['message'])) : '';

    // Contrôle de saisie / Backend Validation Checks
    if (empty($name) || empty($tel)) {
        http_response_code(400);
        echo json_encode(["success" => false, "message" => "Veuillez remplir les champs obligatoires (Nom et Téléphone)."]);
        exit;
    }

    if (!empty($email) && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(["success" => false, "message" => "Format d'adresse e-mail invalide."]);
        exit;
    }

    $mail = new PHPMailer(true);

    try {
        // Server configuration standard mta3 Google SMTP
        $mail->isSMTP();
        $mail->Host       = $_ENV['SMTP_HOST'];
        $mail->SMTPAuth   = true;
        $mail->Username   = $_ENV['SMTP_USER'];
        $mail->Password   = $_ENV['SMTP_PASS']; // L-App Password mta3 16 lettres
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = (int)$_ENV['SMTP_PORT'];
        $mail->CharSet    = 'UTF-8';

        // Recipients Config
        $mail->setFrom($_ENV['SMTP_USER'], 'Cabinet Dr Sarra Haouet');
        $mail->addAddress($_ENV['RECEIVER_EMAIL']);
        
        // Bch ki tji ta3mel 'Reply' fil Gmail i7elllek direct address mta3 el client
        if (!empty($email)) {
            $mail->addReplyTo($email, $name);
        }

        // --- Template HTML matching the high-end medical brand identity ---
        $htmlTemplate = "
        <div style='background-color: #f4f7f6; padding: 30px; font-family: Arial, sans-serif;'>
            <div style='max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05); border-top: 4px solid #0d9488;'>
                <div style='padding: 25px; background-color: #ffffff; text-align: center; border-bottom: 1px solid #f0f0f0;'>
                    <h2 style='margin: 0; color: #1e293b; font-size: 22px; font-weight: 700;'>Nouveau Message - Contact</h2>
                    <p style='margin: 5px 0 0 0; color: #64748b; font-size: 14px;'>Formulaire de contact du site cabinet dentaire</p>
                </div>
                <div style='padding: 30px;'>
                    <p style='font-size: 16px; color: #334155; margin-bottom: 20px;'>Vous avez reçu une nouvelle demande d'informations :</p>
                    
                    <table style='width: 100%; border-collapse: collapse; margin-bottom: 25px;'>
                        <tr>
                            <td style='padding: 10px 0; color: #64748b; font-weight: 600; width: 30%; border-bottom: 1px solid #f1f5f9;'>Nom :</td>
                            <td style='padding: 10px 0; color: #0f172a; border-bottom: 1px solid #f1f5f9;'>{$name}</td>
                        </tr>
                        <tr>
                            <td style='padding: 10px 0; color: #64748b; font-weight: 600; border-bottom: 1px solid #f1f5f9;'>Téléphone :</td>
                            <td style='padding: 10px 0; color: #0f172a; border-bottom: 1px solid #f1f5f9; font-weight: 600;'>{$tel}</td>
                        </tr>
                        <tr>
                            <td style='padding: 10px 0; color: #64748b; font-weight: 600; border-bottom: 1px solid #f1f5f9;'>Email :</td>
                            <td style='padding: 10px 0; color: #0f172a; border-bottom: 1px solid #f1f5f9;'>".(!empty($email) ? $email : 'Non fourni')."</td>
                        </tr>
                    </table>

                    <div style='background-color: #f8fafc; border-left: 4px solid #cbd5e1; padding: 15px; border-radius: 4px;'>
                        <h4 style='margin: 0 0 8px 0; color: #475569; font-size: 14px;'>Message ou Remarque :</h4>
                        <p style='margin: 0; color: #334155; line-height: 1.6; font-size: 15px;'>".nl2br($message)."</p>
                    </div>
                </div>
                <div style='padding: 20px; background-color: #f8fafc; text-align: center; border-top: 1px solid #f1f5f9;'>
                    <p style='margin: 0; color: #94a3b8; font-size: 12px;'>&copy; ".date('Y')." Cabinet Dentaire Dr Sarra Haouet. Nabeul, Tunisie.</p>
                </div>
            </div>
        </div>
        ";

        // Content Setup mta3 el Mail
        $mail->isHTML(true);
        $mail->Subject = "Contact Client: " . $name;
        $mail->Body    = $htmlTemplate;
        $mail->AltBody = "Nom: {$name}\nTél: {$tel}\nEmail: {$email}\nMessage: {$message}";

        $mail->send();
        echo json_encode(["success" => true, "message" => "Message envoyé avec succès."]);

    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(["success" => false, "message" => "Le message n'a pas pu être envoyé. Erreur Mailer: {$mail->ErrorInfo}"]);
    }
} else {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Méthode de requête non autorisée."]);
}