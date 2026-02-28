import { redirect } from 'next/navigation'

export default function CatchAllPage() {
  redirect('/404')
}

export async function generateStaticParams() {
  return [{catchall: [' ']}]
}
