//Manifest Items




export const OrientationList : { id: number, type: string }[] = [
    { "id": 0, "type": "Portrait" },
    { "id": 1, "type": "Landscape" },
];


export class Icon {
    src: string;
    sizes: string;
    type: string;
}

export class Screenshot {
    src: string;
    sizes: string;
    type: string;
}



export class ManifestInfo {
    dir: string = "ltr";
    lang: string = "en";
    name: string;
    scope: string = "/";
    display: string = "standalone";
    start_url: string;
    short_name: string;
    theme_color: string;
    description: string;
    orientation: string;
    background_color: string;
    related_applications : string = "";
    prefer_related_applications : boolean = false;
    screenshots: Screenshot[];
    icons: Icon[];
    categories: string;
}