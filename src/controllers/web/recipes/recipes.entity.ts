import { IsNotEmpty, IsEmail, MinLength, IsUrl, ValidateIf } from "class-validator";
import { Transform, TransformFnParams } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class NewRecipeDTO {
    @ApiProperty()
    user_id: number;

    @ApiProperty()
    name: string;

    @ApiProperty()
    cooking_time: string;

    @ApiProperty()
    cooking_time_type: number;

    @ApiProperty()
    description: string;

    @ApiProperty()
    preparation_time: string;

    @ApiProperty()
    preparation_time_type: number;

    @ApiProperty()
    difficulty_field: number;
}

export class RemoveRecipeDTO {
    @ApiProperty()
    id: number;
}