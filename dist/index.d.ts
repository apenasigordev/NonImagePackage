declare class Image {
    constructor(Image?: string);
    fakemsg(msg: string, username: string, avatar: string, bot: boolean): string;
    memes(): Promise<any>;
    cats(): Promise<any>;
}
export = Image;
