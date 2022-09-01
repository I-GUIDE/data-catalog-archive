import React from 'react';
import ForceGraph, { NodeObject as FGNodeObject, GraphData } from 'react-force-graph-2d';
import { useNavigate } from 'react-router-dom';

export interface Props {
    resourceId: string
    graphData: GraphData
    graphSize: GraphSize
}

type GraphSize = {
    width: number
    height: number
}

type NodeObject = FGNodeObject & {
    type: string
    title?: string
}

function labelNode(node: NodeObject): string {
    return node.title ?? `id: ${node.id}` ?? ""
}

function colorNode(node: NodeObject): string {
    switch (node.type) {
        // child of root
        case "hasPart":
            return "green"

        // parent of root
        case "isPartOf":
            return "red"

        case "root":
            return "black"
    }
    return "blue"
}

export const RelationsGraphView = ({ graphData, graphSize, resourceId }: Props) => {
    const navigate = useNavigate()

    function handleClick(node: FGNodeObject) {
        if (node.id === resourceId) return
        navigate(`../${node.id}`)
    }

    return <ForceGraph graphData={graphData} width={graphSize.width} height={graphSize.height}
        // @ts-ignore
        nodeColor={colorNode}
        // @ts-ignore
        nodeLabel={labelNode}
        dagMode="lr"
        dagLevelDistance={100}
        linkDirectionalParticles={1}
        linkDirectionalParticleSpeed={0.05}
        onNodeClick={handleClick}
    />
}
export default RelationsGraphView
