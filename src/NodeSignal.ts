import { NodeSignalConnection, NodeSignalConnectionType } from "./Connection";

export interface NodeSignalType {
  Connections: Array<NodeSignalConnectionType>,
  Fire(...args: any): void,
  Connect(Callback: Function): void,
  Wait(): Promise<unknown>
}

export class NodeSignal {
  Connections: Array<NodeSignalConnectionType>

  constructor() {
    this.Connections = []
  }

  /**
   * Fires the args to the connected events
   * @param {any} args The args you want to fire to the connected events 
   */

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

  /**
   * Lets you listen to a specific event
   * @param {Function} Callback The function you want you want to listen to the event with
   * @returns {NodeSignalConnection}
   */

  Connect(Callback: Function) {
    const Connection = new NodeSignalConnection(Callback)
    this.Connections.push(Connection)
    return Connection
  }

  /**
   * Lets you wait until a function is called to execute
   * @returns {Promise<unknown>}
   */

  Wait() {
    return new Promise((resolve) => {
      this.Connect(function () {
        resolve(undefined)
      })
    })
  }
}
