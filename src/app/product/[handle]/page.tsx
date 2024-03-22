'use client'

import { useParams, useSearchParams } from "next/navigation"
interface ProductPageProps {
    searchParams: {
      id: string
    }
  }
  
  
  export default async function ProductPage() {
    const params = useParams()
    const searchParams = useSearchParams()
    const id = searchParams.get('id')
   
  
    return <h1>Product Page</h1>
  }