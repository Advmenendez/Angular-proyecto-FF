export interface ffModel {
    nav: Nav;
    main: Main;
    characters: Characters[];
    games: Games[];

}

export interface Nav {
    title: string;
    logo: Img;
}


export interface Main{
    title: string;
    description: string ;
    titleChocobo: string;
    chocobo: Img;
    button: string;
    happychocobo: Img;
    angrychocobo: Img;
    moguri: Img;
    formulario: string;
}

export interface Characters{
    name: string;
    game: string;
    description: string;
    img: Img;
    
}
export interface Games {
    title: string;
    img: Img;

}

export interface Img {
    src: string;
    alt: string;
}
