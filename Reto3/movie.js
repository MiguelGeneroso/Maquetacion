// let {Professional} = require("./professional");

class Movie{

    constructor(title, releaseYear, nacionality, genre){
        
        this.title = title;
        this.releaseYear = releaseYear;
        this.nacionality = nacionality;
        this.genre = genre;
        this.language = "";
        this.plataforma = "";
        this.isMCU = false;
        this.mainCharacterName = "";
        this.producer = "";
        this.distributor = "";
        this.director;
        this.writer;
        this.actors=[];
    }

    printAll(){

        console.log(this.title , this.releaseYear , this.actors , this.nacionality , this.director , this.writer , this.language , this.plataforma ,
                    this.isMCU , this.mainCharacterName , this.producer , this.distributor , this.genre);
        
    }

    
}
// module.exports = {Movie};