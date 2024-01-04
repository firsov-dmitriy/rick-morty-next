import {TOrigin} from "@/types/TOrigin";
import {TLocation} from "@/types/TLocation";

export type TChar = {
    id: number
    name: string,
    status: string
    species : string
    type : string
    gender : string
    origin : TOrigin
    location : TLocation
    image: string
    episode : Array<string>
    url: string
    created: string
}