import { NodeSignalConnection, NodeSignalConnectionType } from "./Connection";

export interface NodeSignalType {
  Connections: Array<NodeSignalConnectionType>,
  Fire(...args: any): Function,
  Connect(Callback: Function): Function,
  Wait(): Promise<unknown>
}

export class NodeSignal {
  Connections: Array<NodeSignalConnectionType>

  constructor() {
    this.Connections = []
  }

  Fire(...args: any) {
    let index = 1
    for (let connection of this.Connections) {
      if (!connection.ShouldBeRemoved) {
        connection.Callback(...args)
      } else {
        this.Connections.splice(index, 1)
      }
      index += 1
    }
  }

  Connect(Callback: Function) {
    const Connection = new NodeSignalConnection(Callback)
    this.Connections.push(Connection)
    return Connection
  }

  Wait() {
    return new Promise((resolve) => {
      this.Connect(function () {
        resolve(undefined)
      })
    })
  }
}