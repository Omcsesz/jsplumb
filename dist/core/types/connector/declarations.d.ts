import { Merge } from "@jsplumb/util";
import { EndpointSpec, Endpoint } from '../endpoint/endpoint';
import { Component } from "../component/component";
import { ConnectorBase } from "./abstract-connector";
import { ConnectParams } from '../params';
import { PaintStyle } from "../definitions";
/**
 * Common options for connectors.
 * @public
 */
export interface ConnectorOptions extends Record<string, any> {
    /**
     * Stub defines a number of pixels that the connector travels away from its element before the connector's actual path begins.
     */
    stub?: number | number[];
    /**
     * Defines a number of pixels between the end of the connector and its anchor point. Defaults to zero.
     */
    gap?: number;
    /**
     * Optional class to set on the element used to render the connector.
     */
    cssClass?: string;
    /**
     * Optional class to set on the element used to render the connector when the mouse is hovering over the connector.
     */
    hoverClass?: string;
}
/**
 * Alias for the use case that a Connector is referenced just by its `type`.
 * @public
 */
export declare type ConnectorId = string;
/**
 * Connector spec in the form `{type:.., options:{.. }}`
 * @public
 */
export declare type ConnectorWithOptions = {
    type: ConnectorId;
    options: ConnectorOptions;
};
/**
 * Specification of a connector - either the type id of some Connector, a type+options object.
 * @public
 */
export declare type ConnectorSpec = ConnectorId | ConnectorWithOptions;
/**
 * Used internally by connectors.
 * @internal
 */
export declare type PaintAxis = "y" | "x";
/**
 * High level definition of a Connector.
 * @public
 */
export interface Connector {
    /**
     * The connector's type.
     */
    type: string;
}
/**
 * Geometry defines the path along which a connector travels. The internal contents of a Geometry vary widely between connectors.
 * @public
 */
export interface Geometry {
    source: any;
    target: any;
}
/**
 * Definition of a connection between two elements.
 */
export interface Connection<E = any> extends Component {
    connector: ConnectorBase;
    defaultLabelLocation: number;
    scope: string;
    deleted: boolean;
    typeId: string;
    idPrefix: string;
    defaultOverlayKey: string;
    previousConnection: Connection<E>;
    /**
     * The id of the source of the connection
     * @public
     */
    sourceId: string;
    /**
     * The id of the target of the connection
     * @public
     */
    targetId: string;
    /**
     * The element that is the source of the connection
     * @public
     */
    source: E;
    /**
     * The element that is the target of the connection
     * @public
     */
    target: E;
    /**
     * Whether or not this connection is detachable
     * @public
     */
    detachable: boolean;
    /**
     * Whether or not this connection should be reattached if it were detached via the mouse
     * @public
     */
    reattach: boolean;
    /**
     * UUIDs of the endpoints. If this is not specifically provided in the constructor of the connection it will
     * be null.
     * @public
     */
    readonly uuids: [string, string];
    /**
     * Connection's cost.
     * @public
     */
    cost: number;
    /**
     * Whether or not the connection is directed.
     * @public
     */
    directed: boolean;
    /**
     * Source and target endpoints.
     * @public
     */
    endpoints: [Endpoint, Endpoint];
    endpointStyles: [PaintStyle, PaintStyle];
    readonly endpointSpec: EndpointSpec;
    readonly endpointsSpec: [EndpointSpec, EndpointSpec];
    endpointStyle: PaintStyle;
    endpointHoverStyle: PaintStyle;
    readonly endpointHoverStyles: [PaintStyle, PaintStyle];
    id: string;
    lastPaintedAt: string;
    paintStyleInUse: PaintStyle;
    /**
     * @internal
     */
    suspendedEndpoint: Endpoint;
    /**
     * @internal
     */
    suspendedIndex: number;
    /**
     * @internal
     */
    suspendedElement: E;
    /**
     * @internal
     */
    suspendedElementId: string;
    /**
     * @internal
     */
    suspendedElementType: string;
    /**
     * @internal
     */
    _forceReattach: boolean;
    /**
     * @internal
     */
    _forceDetach: boolean;
    /**
     * List of current proxies for this connection. Used when collapsing groups and when dealing with scrolling lists.
     * @internal
     */
    proxies: Array<{
        ep: Endpoint;
        originalEp: Endpoint;
    }>;
    /**
     * @internal
     */
    pending: boolean;
}
/**
 * @internal
 */
export declare type ConnectionOptions<E = any> = Merge<ConnectParams<E>, {
    source?: E;
    target?: E;
    sourceEndpoint?: Endpoint;
    targetEndpoint?: Endpoint;
    previousConnection?: Connection;
    geometry?: any;
}>;
export declare const TYPE_ID_CONNECTION = "_jsplumb_connection";
/**
 * Prefix to use on the ID for connections.
 * @internal
 */
export declare const ID_PREFIX_CONNECTION = "_jsPlumb_c";
export declare const TYPE_DESCRIPTOR_CONNECTION = "connection";
export declare const DEFAULT_LABEL_LOCATION_CONNECTION = 0.5;
//# sourceMappingURL=declarations.d.ts.map