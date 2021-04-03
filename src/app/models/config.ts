export enum ConfigType {
    text,
    dropdow,
}


export class Config {
    key: string;
    groupName: string;
    name: string;
    remark: string;
    details: string;
    type: ConfigType;
    arrValue?: string [];
}
