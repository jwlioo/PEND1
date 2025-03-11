let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "nunc@nonummyac.co.uk"
    }, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
    }, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];


contacts[contacts.length - 1] = {
    name: "Maisie Haley",
    phone: "0913 531 3030",
    email: "risus@urna.com"
};


console.log(`Nome: ${contacts[0].name} / Telefone: ${contacts[0].phone} / Email: ${contacts[0].email}`);
console.log(`Nome: ${contacts[contacts.length - 1].name} / Telefone: ${contacts[contacts.length - 1].phone} / Email: ${contacts[contacts.length - 1].email}`);