export class Task{
    headline!: string;
    todos:any;

    constructor(obj?: any){
        this.headline = obj? obj.headline : '';
        this.todos = obj ? obj.headline : [];
    }

}