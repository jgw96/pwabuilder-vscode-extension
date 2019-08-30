//Manifest Items




export const OrientationList : { id: number, type: string }[] = [
    { "id": 0, "type": "Portrait" },
    { "id": 1, "type": "Landscape" },
];


export const myOptions = [

    {

        label: "Books",

        value: "NY",

    },

    {

        label: "Business",

        value: "WA",

    },

    {

        label: "Education",

        value: "CA",

    },

    {

        label: "Finance",

        value: "NJ",

    },

    {

        label: "Food",

        value: "food",

    },

    {

        label: "Games",

        value: "games",

    },

    {

        label: "Government",

        value: "government",

    },

    {

        label: "Health",

        value: "health",

    },

    {

        label: "Kids",

        value: "kids",

    },

    {

        label: "Lifestyle",

        value: "lifestyle",

    },

    {

        label: "Magazines",

        value: "magazines",

    },

    {

        label: "Medical",

        value: "medical",

    },

    {

        label: "Music",

        value: "music",

    },

    {

        label: "Navigation",

        value: "navigation",

    },

    {

        label: "News",

        value: "news",

    },



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
    categories: string;
}

export const categoryData = [
"",
"books",
"business",
"education",
"entertainment",
"finance",
"fitness",
"food",
"games",
"government",
"health",
"kids",
"lifestyle",
"magazines",
"medical",
"music",
"navigation",
"news",
"personalization",
"photo",
"politics",
"productivity",
"security",
"shopping",
"social",
"sports",
"travel",
"utilities",
"weather"]