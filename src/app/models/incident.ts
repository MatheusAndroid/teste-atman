export interface Incident {
    id: number
    createdAt :number;
    category: string,
    latitude: string;
    longitude: string;
    message: string;
    controllerId: number;
    controllerName: string

}

export function getControllerName(id:number) {
    return 'bob'
}