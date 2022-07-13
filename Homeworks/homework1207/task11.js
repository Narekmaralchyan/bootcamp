// 11)


const checkKnow = {
    surname: 'surname',
    name: 'checkKnow',
    foo: {
        name: 'foo',
        logName(){
            console.log(this.surname);
        }
    },
    boo(){
        const obj = {
            name: 'boo method',
            check: () => {
                console.log(this.name);
            }
        }
        obj.check();
    }
}


checkKnow.foo.logName();

checkKnow.boo();

// with a few words explain why this is happening Armenian or English.

/*
1 դեպքում logName - ը function declaration է որի this-ը  "․" -ից գրված օբյեկտն է ասյնինքն checkKnow.foo
իսկ դա surname property չունի հետեվաբար կտպի undefined

2 դեպքում check -ը arrow function է որի this այն ֆունկցիայի this է որտեղ ինքը հայտարարվելէ այսինքն 
boo -ի this-ը որնել հանդիսանում է "․" -ից գրված օբյեկտը (checkKnow) ,
*/