export {}

declare global {
  interface IPost {
    id: number
    title: string
    body: string
  }

  type RootLayoutProps={
    children:React.ReactNode

  }
}