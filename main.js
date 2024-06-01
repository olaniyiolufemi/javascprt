        //this is my firs javascript code
        console.log('hello world');
        let number = 2;
        console.log(number);
        let x = 6;
        let y = 6;
        console.log(x+y);

        //there should not be a resolved keyword
        //variable name should have meaning and descriptive
        //they cannot start with a number
        //should not contain a space or hypen
        //use camel notation e.g "firstName"
        //they are case sensitive
        //
        let firstName = 'Olaniyi';
        let lastName = 'Olufemi';
        console.log(firstName, lastName);

        const interestRate = 0.3;
        console.log(interestRate);

        //primitive types
        //string
        //Number
        //Boolean
        //undefined
        //null

        let name = 'olaniyi'; //string
        let age = 30; //number
        let isApprove = false; //boolean true and false are reserved keywords
        let middleName = undefined;
        let selectedColour = null;
        //type of variable can be determined by the values assigned to them

        //reference types
        //objects
        //arrays
        //functions


        //objects
        // {} = empty object / object literal
        let person = {
            name: 'niyi',
            age: 30
        };
        //dot notation
        person.name = 'Ola'; 
        console.log (person.name);

        //bracket notation
        let selection = 'name';
        person[selection] = 'ola';
        person['name'] = 'staraneg';
        person.age = 3  
        console.log (person.name, person.age);

        //arrays
        //[] = empty array / array literal
        let selectedColours = ['red', 'blue'];
        selectedColours[2] = '1';
        //use square brackets and index number to specify the array you want to display
        console.log(selectedColours[2]);
        //an array is a struture to repesent list of items

        //functions
        ///performs a task
        ////for declaring functions use () and {}
        /////whatever is inside the {} is the body of the function
        //////you don't need to add ; after the {} to declare it
        ///////name is a parameter of the greet function
        ////////niyi is an argument of the greet function

        function greet(name, lastName, age) {
            console.log('hello' + ' '+ name + ' ' + lastName + ' ' + age);
        }
        greet('niyi', 'ola', 30);

    //types of functions
     ///calculate a value
     function square(number) {
        return number * number;
     }

    console.log(square(2));
        