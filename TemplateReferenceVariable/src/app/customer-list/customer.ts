/*REMEMBER : TypeScript error would occur when you have class properties 
                        - without initializers or default values, and 
                        - that are not marked as optional with the "?" symbol. */
export class Customer {
    customerNo: number = 0 ;
    name: string = '';
    address: string = '';
    city: string = '';
    country: string = '';
        
}
/*  ------ or ---------

export class Customer {

    customerNo: number;
    name: string;
    address: string;
    city: string;
    country: string;

    constructor() {
        this.customerNo = 0;
        this.name = '';
        this.address = '';
        this.city = '';
        this.country = '';
    }
}
    -----or-----
Optional Property (?) -
        1.1.When you mark a property with the "?" symbol, it indicates that the property is optional. 
                        It means that the property may or may not have a value assigned to it.
        2.By marking properties as optional using '?', you allow instances of the `Customer` class
                        to be created without explicitly providing values for these properties.
        3.Optional properties are allowed to be undefined or null.
        4.They can be assigned a value or left undefined.

export class Customer {
    customerNo?: number;
    name?: string;
    address?: string;
    city?: string;
    country?: string;
}

*/
