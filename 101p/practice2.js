// Before copy on write
let mailing_list = [];

function add_contact(email) {
  mailing_list.push(email);
}

function submit_form_handler(event) {
  const form = event.target;
  const email = form.elements["email"].value;
  add_contact(email);
}

// after
let mailing_list = [];

function add_contact(list, email) {
  const new_list = list.slice();
  new_list.push(email);
  return new_list;
}

function submit_form_handler(event) {
  const form = event.target;
  const email = form.elements["email"].value;
  mailing_list = add_contact(mailing_list, email);
}
