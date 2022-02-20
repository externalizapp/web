import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class Config {
    public static ALLOWED_LANGUAGES: Array<string> = ['ca', 'en', 'es'];
    public static DEFAULT_LANGUAGE: string = 'es';
    public static API_HOST: string = 'https://61fe97eba58a4e00173c98ef.mockapi.io';
    public static API_PORT: string | number = '443';
    public static SEARCH_URL: string = 'externalizapp/v1/contratos/';
    public static VIEWER_URL: string = 'externalizapp/v1/contratos/{idContract}';
}