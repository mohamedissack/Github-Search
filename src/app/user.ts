export class User {
    constructor(public login: string,
                // tslint:disable-next-line:variable-name
                public avatar_url: string, public blog: string, public name: string, public public_repos: number,
                public followers: number
        ,       public following: number){

    }
}



