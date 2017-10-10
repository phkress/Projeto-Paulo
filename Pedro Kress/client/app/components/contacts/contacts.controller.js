class ContactsController {
  constructor(ContactsService) {
    this.titulo = 'Contacts';
    ContactsService.getContacts()
      .then( contacts => this.contacts = contacts ); 
    }
    sendEmail(){
    	console.log(this.yourEmail);
    	console.log(this.sugestao);
    	console.log('Email enviado com sucesso!');
    	alert('Email enviado com sucesso!');
    }

}

ContactsController.$inject = ['ContactsService'];
export default ContactsController;
