import {Overlay} from '../overlay/overlay'
import { Constructable} from '@jsplumb/util'
import { JsPlumbInstance } from "../core"
import {Component} from '../component/component'
const overlayMap:Record<string, Constructable<Overlay>> = {}

export const OverlayFactory = {
    get:(instance:JsPlumbInstance, name:string, component:Component, params:any):Overlay => {

        let c:Constructable<Overlay> = overlayMap[name]
        if (!c) {
            throw {message:"jsPlumb: unknown overlay type '" + name + "'"}
        } else {
            return new c(instance, component, params) as Overlay
        }
    },

    register:(name:string, overlay:Constructable<Overlay>) => {
        overlayMap[name] = overlay
    }
}
