import { Content } from "./content-interface";

export class ContentList{
    //Private List Array
    private _list: Content[];

    //Constructor
    constructor(){
        this._list = [];
    }

    //Getter
    get list(): Content[]{
        return this._list;
    }

    //Add function
    add(item: Content){
        this.list.push(item);
    }

    //Number of objects function
    listNum(){
        return this.list.length;
    }

    //Display function
    display(index: number){

        //Check if the index exists
        if(index > (this.list.length - 1)){
            return "The index does not exist."
        }
        else{
            return "<h3>Title: " + this.list[index].title + "</h3>" +
                "<h3>Description: " + this.list[index].description + "</h3>" +
                "<h3>Creator: " + this.list[index].creator + "</h3>" +
                "<h3>Image:</h3>" + "<img src=" + this.list[index].imgURL + " width=300 height=300>" +
                "<h3>Type: " + this.list[index].type + "</h3>" +
                "<h3>-------------------------------------------------</h3>"
        }
    }
}