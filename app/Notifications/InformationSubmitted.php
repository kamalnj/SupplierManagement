<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Notifications\Messages\MailMessage;

class InformationSubmitted extends Notification
{
    use Queueable;

    protected $type;

    public function __construct($type)
    {
        $this->type = $type;
    }

    public function via($notifiable)
    {
        return ['mail'];
    }

    public function toMail($notifiable)
    {
        return (new MailMessage)
            ->subject('Nouvelle Soumission d\'Informations')
            ->view('emails.information_submitted', ['type' => $this->type]);
    }
}
