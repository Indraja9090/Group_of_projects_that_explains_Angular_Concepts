import { Pipe, PipeTransform } from "@angular/core";

/*In order to create a custome pipe we need to make a class 
                                implements an interface `PipeTransform
 Since we are implementing `PipeTransform` interface, 
    WE HAVE TO implement a method `transform` provided by this interface*/ 

@Pipe({
    name: 'custompercentagepipe' //name of custom pipe
}) 
/*REMEMBER : we need to register this pipe class in AppModule class same as Component class */
export class PercentagePipe implements PipeTransform {
    /*`value` parameter recieves a value on which we were using this custom pipe*/
    //Case-1:

    //transform(value: number) {
        /* method need to return the transformed value.
            And as we are creating a custom `percentage` pipe we are just multiplying value by 100*/
        //return value*100;   
    //}
    //case-2:

    transform(value: number, totalMarks: number, decimal: number) {
        console.log("custom Percentage pipe is called");
        /* method need to return the transformed value.
            And as we are creating a custom `percentage` pipe we are just multiplying value by 100*/
        /*calling `toFixed()` method on expression which returns a string 
                    representing number in fixed-point notation i.e., No.of digits after decimal*/
        return (value/totalMarks *100).toFixed(decimal);   
        
    }

}