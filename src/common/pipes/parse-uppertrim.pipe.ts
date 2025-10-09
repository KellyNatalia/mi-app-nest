import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";
import { metadata } from "reflect-metadata/no-conflict";

@Injectable()
export class ParseUpperTrimPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata) {
        if (typeof value === 'string') {
            return value.trim().toUpperCase();
        }
        if (typeof value === 'object') {
            throw new BadRequestException('El valor no es un STRING');
        return value;
    }
}