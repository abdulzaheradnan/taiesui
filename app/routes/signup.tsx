import { ActionFunctionArgs, LoaderFunctionArgs } from '@remix-run/node'
import { Form, Link, useActionData, useLoaderData } from '@remix-run/react'
import React, { useState } from 'react'
import { json } from 'stream/consumers'
import { MongoClient } from 'mongodb'
const url = "mongodb://127.0.0.1:27017/"
const client = new MongoClient(url)
const dbname = "dummy"
export const loader = async ({ request }: LoaderFunctionArgs) => {

    await client.connect()
    console.log("connection succesfull")
    const db = client.db(dbname)
    const collection = db.collection("students")
    const result = await collection.find({}).toArray()
    // console.log("this is real",result)
    return result

}

export default function Signup() {
    const data = useLoaderData()
    // console.log("yes brother", data)



    return (
        <div className="ml-9">
            <Form method='post'>
                <label htmlFor="">name</label>
                <input type="text" name='name' className='border-2' /><br />
                <label htmlFor="">password</label>
                <input type="password" name='password' className='border-2' /><br />
                <button type='submit' name="action" value='create'>add</button>
            </Form>
            <div>{data.map((item) => {
                return (
                    <div key={item._id} className='flex'>

                        <span>{item.name}</span>
                        {/* <Link to={`/deletedata/${item.name}`}> */}
                        <span>

                        <Form method='post'>
                           <span>
                            <input type="hidden" value={item.name} name='name'/>
                            {/* <input type="hidden" value={item._id} name='id'/> */}
                            </span> 
                        <button className='bg-slate-500 border-1 rounded p-3' name="action" value='delete' type='submit'>d</button>
                        </Form>
                        </span>
                        {/* </Link> */}
                    </div>)
            })}</div>
        </div>
    )
}
export const action = async ({ request }: ActionFunctionArgs) => {

    const formData = await request.formData()
    const name = formData.get("name")
    const password = formData.get("password")

    const { action, ...values } = Object.fromEntries(formData)
    console.log("this is values",values,action)
    if (action === "create") {

        await client.connect()
        console.log("connection succesfull")
        const db = client.db(dbname)
        const collection = db.collection("students")
        const result = await collection.insertOne({ name: name, password: password })
        // console.log(name, password)
        return { name: name, password: password }
    }
    if (action === "delete") {
        await client.connect()
        console.log("connection succesfull")
        const db = client.db(dbname)
        const collection = db.collection("students")
        const result = await collection.deleteOne(values)
        console.log("hmss ", result)
        return null
    }

}