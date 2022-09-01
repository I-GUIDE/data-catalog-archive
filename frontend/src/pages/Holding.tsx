import Container, { ContainerProps } from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Search, useLocation, useNavigate, useParams, useResolvedPath } from "react-router-dom";
import { SearchResourceResult, useGetResource, useRelationsSearch } from "../graphql/queries";
import formatCreators from "../utilities/formatCreator";
import formatBytes from "../utilities/humanReadableByteSize";
import timeSince from "../utilities/timeSince";
import formatNFiles from "../utilities/formatNFiles";
import ForceGraph, { NodeObject as FGNodeObject, LinkObject, GraphData } from "react-force-graph-2d"
import { useEffect, useLayoutEffect, useRef } from "react";
import { useState } from "react";
import Paper from "@mui/material/Paper";
import { RelationsSearchResult } from "../graphql/queries";
import RelationsViewToggleButton, { View } from "../components/RelationsViewToggleButton";
import RelationsAccordionView from "../components/RelationsAccordionView";
import RelationsGraphView from "../components/RelationsGraphView";

export interface Props {
    props?: SearchResourceResult
    containerProps?: ContainerProps
}

// export type RelationsSearchResult = {
//     id?: Maybe<string>
//     title?: Maybe<string>
//     type?: Maybe<string>
// }



function genGraphHelper(id: string, result: RelationsSearchResult): LinkObject {
    switch (result.type) {
        case "hasPart":
            return { source: id, target: result.id! }
        case "isPartOf":
            return { source: result.id!, target: id }
        default:
            return { source: undefined, target: undefined }
    }
}

function genGraph(title: string, id: string, results: RelationsSearchResult[]): GraphData {
    return {
        nodes: [...results.map(item => ({ id: item.id ?? "null", type: item.type, title: item.title })), { id: id, type: "root", title }],
        links: [...results.map(item => genGraphHelper(id, item))]
    };
}

export function Resource(props?: Props) {
    // TODO: instead of passing state from <Link/>, use SearchParams to determine the resource id
    // and query here for the information needed.
    let { state } = useLocation()
    const navigate = useNavigate();

    const { id: pathId } = useParams()
    const { results: result } = useGetResource(pathId ?? "")

    const { doQuery, results } = useRelationsSearch()
    const ref = useRef<HTMLElement>(null)

    const [graphSize, setGraphSize] = useState<{ width: number, height: number }>({ width: 400, height: 400 })
    const [graphData, setGraphData] = useState<GraphData>({ nodes: [], links: [] })
    const [view, setView] = useState<View>(View.Accordion)

    useLayoutEffect(() => {
        const boundingBox = ref.current?.getBoundingClientRect()

        if (boundingBox === undefined) {
            return
        }
        setGraphSize(curr => ({ ...curr, width: boundingBox.width }))
    }, [graphData, setGraphSize])

    useEffect(() => {
        if (!state && !result) return
        const { id } = state ? state as SearchResourceResult : result as SearchResourceResult
        if (!id) return
        doQuery(id)
    }, [state, doQuery, result])

    useEffect(() => {
        if (!results || (!state && !result)) return
        if (view !== View.Graph) {
            setGraphData({ nodes: [], links: [] })
            return
        }

        const { id, title } = state ? state as SearchResourceResult : result as SearchResourceResult
        setGraphData(genGraph(title!, id!, results))
    }, [results, setGraphData, state, result, view])

    // does not take into account props case
    if (!state && !result) return null


    // const { title, creators, abstract, created, nFiles, size } = props.props
    const { id, title, creators, abstract, created, nFiles, size } = result ? result as SearchResourceResult : state as SearchResourceResult

    const creationDate = created ? new Date(created.slice(0, 10)) : undefined
    const timeSinceCreated = creationDate ? timeSince(creationDate) : undefined

    // @ts-ignore
    const formattedCreators = creators ? formatCreators(creators, creators.length) : ""
    const formattedSize = formatBytes(size, 2)


    // title
    // abstract
    // creators : name & organization
    // created :
    // modified
    // rights: rightsStatement &  URL
    // URL: derive from id
    // download link

    // add published badge
    // add last updated
    return (
        // <Container {...props.containerProps}>
        <Container >
            <h1>{title}</h1>
            <h4>{formattedCreators}</h4>
            <Typography variant="body2">
                Uploaded: {`${timeSinceCreated} ago`} | {formatNFiles(nFiles)}(size: {formattedSize})
            </Typography>
            <h2>Abstract</h2>
            <section style={{ whiteSpace: "pre-line" }} ref={ref}>{abstract}</section>
            <br />
            {/* if there are results, then we know we can derive graph data */}
            <div style={{ display: (results?.length ?? 0) > 0 ? "block" : "none" }}>
                <h2>Relations</h2>
                <RelationsViewToggleButton selected={view} setSelected={setView} />

                <div style={{ display: view === "Graph" ? "block" : "none" }}>
                    <RelationsGraphView graphData={graphData} graphSize={graphSize} resourceId={id!} />
                </div>

                <div style={{ display: view === "Accordion" ? "block" : "none" }}>
                    {/* @ts-ignore */}
                    < RelationsAccordionView parts={results ? results.filter(item => item?.type === "hasPart") : []} isPartOf={results ? results.filter(item => item?.type === "isPartOf") : []} />
                </div>
            </div>

        </Container>
    )
}

export default Resource

/*
insert
update
delete
query

- edge weights don't matter to us
- so, the concept of an edge is really just a visual nicety

q's:
- determine when you have an island


{
    vertices = {
    [id: string]: {
        edges: set<id's>
        node: GraphNode
    }

    }

}
*/

// // id field is required
// type NodeObject = Required<Pick<FGNodeObject, "id">> & Omit<FGNodeObject, "id">
// interface Node extends NodeObject {
//     edges: Set<Node>
// }
// // type Edges = {
// //     edges: Set<Node>

// // }

// // type Node = NodeObject & {
// //     edges: Set<Node>
// // }

// type Vertices = object & {
//     [id: string]: Node
// }


// class UndirectedGraph {
//     nodes: Nodes
//     edges: AdjacentNodes

//     constructor() {
//         this.nodes = {}
//         this.edges = {}
//     }

//     static fromRelationsSearchResult(id: string, results: RelationsSearchResult[]): UndirectedGraph {
//         o = new UndirectedGraph();

//         return {
//             nodes: [...results.map(item => ({ id: item.id ?? "null", type: item.type, title: item.title })), { id: id, type: "root", title: undefined }],
//             links: [...results.map(item => genGraphHelper(id, item))]
//         };
//     }

//     exists(id: string): boolean {
//         return this.nodes[id] !== undefined
//     }

//     insert(node: FGNodeObject, relations?: Relations): boolean {
//         // cant insert if it already exists
//         if (!this.exists(node.id! as string)) return false


//         // need to update all parents and all children
//         const parents = new Set()
//         const children = new Set()

//         const id = node.id! as string

//         const an: AdjacentNode = {
//             id,
//             parents: new Set(),
//             children: new Set()
//         }

//         // root case
//         if (Object.keys(this.nodes).length === 0) {
//             this.nodes[id] = an

//         }

//         // if (Object.keys(this.nodes).length === 0 || Object.keys(this.edges).length === 0) {

//         // node.

//         // }

//     }

//     update(id: string): boolean { }
//     delete(id: string): boolean { }
//     get(id: string): Node { }

// }

// type Relations = {
//     parents: string[]
//     children: string[]
// }


// type AdjacentNode = {
//     id: string
//     parents: Set<string>
//     children: Set<string>
// }

// type AdjacentNodes = {
//     [key: string]: AdjacentNode
// }

// type Nodes = {
//     [key: string]: FGNodeObject
// }
