import { ListTemplate } from './classes/ListTemplates.js';
import { Invoice } from './classes/invoice.js';
import { Payment } from './classes/payment.js';
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [toFrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docyOne = addUID({ name: 'owshi', age: 40 });
console.log(docyOne);
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["ETC"] = 3] = "ETC";
})(ResourceType || (ResourceType = {}));
const docyThree = {
    uid: 1,
    resourceName: ResourceType.FILM,
    data: { name: 'yawn' }
};
console.log(docyThree);
const docyFour = {
    uid: 2,
    resourceName: ResourceType.BOOK,
    data: ['cromp', 'blomp']
};
console.log(docyFour);
let arr = ['prius', 4, false];
let tup = ['cruis', 44, true];
tup[0] = 'pen';
tup[1] = 11;
tup[2] = false;
let student;
student = ['punli', 48939];
