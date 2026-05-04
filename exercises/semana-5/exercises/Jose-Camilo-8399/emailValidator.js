const emailsList = [
   'john.doe@example.com',
   'jane_doe+++++shopping@example.org',
   '   m+@ ',
   'alice.smith+work@example.co.uk',
   'charlie.brown+ne+wsletter@example.io',
   'emily.watson+notes@example.net',
   '1z.s@z.ec',
];

const emailPattern = /^[\w-]+(\.[\w-]+)*([\w-\+]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

const listFilter = emailsList
   .filter(email => (emailPattern.test(email)))
   .map(email => {
      let posInicio = email.search(/[+]/);
      let posFinal = email.search(/[@]/);
      const fragment = email.slice(posInicio, posFinal);
      const arr = email.split(fragment);
      return arr.join('');
   });

console.log(listFilter);


