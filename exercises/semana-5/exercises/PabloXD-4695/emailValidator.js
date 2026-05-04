const REGEX_EMAIL = /^[\w.-]+(\+[\w.-]+)?@[\w-]+\.[\w-]+(\.[\w-]+)?$/;

const email1 = "john.doe@example.com";
const email2 = "jane_doe+shopping@example.org";
const email3 = "alice.smith+work@example.co.uk";
const email4 = "charlie.brown+newsletter@example.io";
const email5 = "emily.watson+notes@example.netconst";
const email6 = "pablo%sds@gamil.com";

const listEmail = [email1, email2, email3, email4, email5, email6];

const filteredList = listEmail.flatMap((email) => {
  const resultRegex = email.match(REGEX_EMAIL);
  return resultRegex ? editEmail(...resultRegex) : [];
});

function editEmail(mainAddress, subAddress) {
  return subAddress ? mainAddress.replace(subAddress, "") : mainAddress;
}

console.log(filteredList);
