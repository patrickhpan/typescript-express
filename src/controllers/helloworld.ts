interface IHelloWorldRequest {}

interface IHelloWorldResponse {
  text: string;
}

export function HelloWorld (req: IHelloWorldRequest): IHelloWorldResponse {
  return {
    text: 'Hello World!!!'
  }
}