<?php
namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class SupplierRegistrationMail extends Mailable
{
    use Queueable, SerializesModels;

    public $password;
    public $email;

    public function __construct($password, $email)
    {
        $this->password = $password;
        $this->email = $email;
    }

    public function build()
    {
        return $this->view('emails.supplier_registration')
                    ->with([
                        'password' => $this->password,
                        'email' => $this->email,
                    ]);
    }
}
