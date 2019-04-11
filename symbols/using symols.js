let firstName = Symbol("first name");
// use a computed object literal property
let person = {
[firstName]: "Nicholas"
};
// make the property read only
Object.defineProperty(person, firstName, { writable: false });
let lastName = Symbol("last name");
Object.defineProperties(person, {
[lastName]: {
value: "Zakas",
writable: false
}
});
console.log(person[firstName]);
console.log(person[lastName]);