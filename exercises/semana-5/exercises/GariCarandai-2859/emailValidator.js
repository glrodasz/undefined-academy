
const FILTER_REJEX = /^[\w-]+([\.|\+][\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

const emails =`john.doe@example.com
jane_doe+shopping@example.org
alice.smith+work@example.co.uk
charlie.brown+newsletter@example.io
emily.watson+notes@example.net`;

const arrayEmails = emails.split(/\n/);


function checkEmails(e){
  let validEmails = e.filter( email => email.match(FILTER_REJEX) );
  return validEmails;
}

function transformEmailsSubaddresing(e){
  return e.map( email => email.replace(/\+[\w-]+/, "") );
}

console.log(arrayEmails);
console.log(transformEmailsSubaddresing(checkEmails(arrayEmails)));
