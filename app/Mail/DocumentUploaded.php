<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class DocumentUploaded extends Mailable
{
    use Queueable, SerializesModels;

    public $documentName;
    public $supplierName;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($documentName, $supplierName)
    {
        $this->documentName = $documentName;
        $this->supplierName = $supplierName;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject('Nouveau document téléchargé')
                    ->view('emails.document_uploaded')
                    ->with([
                        'documentName' => $this->documentName,
                        'supplierName' => $this->supplierName,
                    ]);
    }
}
