import { GraphQLClientSingleton } from "app/graphql"
import { cookies } from "next/headers"
import { customerName } from "app/graphql/queries/customerName"

export const validateAccesToken = async ()=>{
const cookiesStore = cookies()
const accessToken = cookiesStore.get("accessToken")?.value
const graphqlClient =  GraphQLClientSingleton.getInstance().getClient()
const {customer} = await graphqlClient.request(customerName,{
    customerAccessToken: accessToken
})
return customer
}