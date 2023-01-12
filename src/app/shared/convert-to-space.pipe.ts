import { PipeTransform,Pipe } from "@angular/core";
import {  } from "rxjs";

@Pipe({
    name: 'convertToSpaces'
})

export class ConverToSpace implements PipeTransform
{
    transform(value: string,character: string) {
       return value.replace(character,' ');
    }

}