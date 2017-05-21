export function openDatabase(name: string): Promise<Database>
export class Database{
    public execSQL(query:string,params?:Array<any>):Promise<number>;
    public all(query:string):Promise<Array<any>>
}