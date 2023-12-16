import React from "react";
import axios from "axios";
import { Button, Form,Input } from "antd"
const signup = ()=>{
    const register = (values)=>{
        const r = async (values)=>{
            const {data} = await axios.post('http://localhost:8080/signup',values)
            console.log(data);
        } 
        r()  
    }

    return (
        <Form className="w-[450px] h-[560px]" onFinish={register}>
            <Form.Item name="firstname">
                <Input type='text' placeholder="firstname"/>
            </Form.Item>
            <Form.Item name="lastname">
            <Input type='text' placeholder="lastname"/>
            </Form.Item>
            <Form.Item name="email" >
            <Input type='text' placeholder="email"/>
            </Form.Item>
            <Form.Item name="password">
            <Input type='text' placeholder="password"/>
            </Form.Item>
            <Form.Item name="mobile">
            <Input type='text' placeholder="mobile"/>
            </Form.Item>
            <Form.Item name="address">
            <Input type='text' placeholder="address"/>
            </Form.Item>
            <Form.Item>
            <Button htmlType="submit" className="text-[black] bg-[red]">submit</Button>
            </Form.Item>
        </Form>
    )
}

export default signup