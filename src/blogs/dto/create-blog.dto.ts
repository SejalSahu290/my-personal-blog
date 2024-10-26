/* eslint-disable prettier/prettier */


import { IsString } from "class-validator";
export class CreateBlogDto{

    @IsString()
    username: string;

    @IsString()
    password: string;

}

