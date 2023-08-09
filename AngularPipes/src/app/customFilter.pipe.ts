import { Pipe, PipeTransform } from "@angular/core";
import { Student } from "./student.model";

@Pipe({
    /*By default all builtin n custom pipes are `pure` pipes.
    We can also explicitly define a custom pipe as `pure` or `impure`*/  

   name: 'customfilterpipe', //name of custom pipe 
   /*`pure` pipes are those pipes which ONLY get executed 
                when angular detects a pure change on the input value */
   //pure: true,          //true - means pure pipe
   pure: false        //false means impure
})
export class FilterPipe implements PipeTransform{
    transform(students: Student[], filterText: string) {
        console.log("custom filterStudent pipe is called")
        if(students.length === 0 || filterText === ''){
            return students;
        }else{
        /*`filter()` iterates on each element of an array and 
            returns the elements of an array that meets the condition
                specified in its callback function*/
        return students.filter((student) => {
            return student.gender.toLowerCase() === filterText.toLowerCase()

            })
        }   
    }
}