import { LoaderFunctionArgs } from '@remix-run/node'
import React from 'react'
import { MongoClient } from 'mongodb'
const url = "mongodb://127.0.0.1:27017/"
const client = new MongoClient(url)
const dbname = "dummy"
export const loader=async({params}:LoaderFunctionArgs)=>{
  console.log("_id",params.name)
  let name=params.name
  await client.connect()
  console.log("connection succesfull")
  const db = client.db(dbname)
  const collection = db.collection("students")
  const result = await collection.deleteOne({name:name})
  console.log("hmss ",result)
  return null

}

export default function deletedata () {
  return (
    <div>deletedata</div>
  )
}
