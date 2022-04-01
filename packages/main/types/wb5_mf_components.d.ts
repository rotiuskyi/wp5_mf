/// <reference types="react" />
declare module "wb5_mf_components/Counter" {
    const Counter: () => JSX.Element;
    export default Counter;
}
declare module "wb5_mf_components/Hello" {
    interface HelloProps {
        name?: string;
    }
    const Hello: ({ name }: HelloProps) => JSX.Element;
    export default Hello;
}
