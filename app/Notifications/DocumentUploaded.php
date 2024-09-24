<?php
namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;

class DocumentUploaded extends Notification 
{
    use Queueable;

    public $documentName;
    public $supplierName;

    public function __construct($documentName, $supplierName)
    {
        $this->documentName = $documentName;
        $this->supplierName = $supplierName;
    }

    public function via($notifiable)
    {
        return ['mail'];  // Specify the channels (e.g., 'mail', 'database')
    }

    public function toMail($notifiable)
    {
        return (new MailMessage)
                    ->subject('New Document Uploaded')
                    ->view('emails.document_submitted', [
                        'documentName' => $this->documentName,
                        'supplierName' => $this->supplierName,
                    ]);
    }


}
