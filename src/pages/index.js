import React from "react"
import { Link } from "gatsby"
import "tailwindcss/dist/base.min.css"
import 'src/tailwind.css'
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import tw, { styled } from "twin.macro"
import Chat from 'src/components/chat/chat.component'
const Wrapper = styled.div`
  ${tw`rounded-md text-gray-300 border-gray-300 border border-0 border shadow-lg`}
`

const messages_1 = [
  {
    author: 1,
    text: "Hey man, how is it going?",
  },
  {
    author: 2,
    text: "Hey, all good, how about you?",
  },
  {
    author: 1,
    text: "All good, I was wondering if you knew any good web developer",
  },
  {
    author: 2,
    text: "Sure, I know the guy for you. ",
  },
  {
    author: 2,
    text: "Hey man, how is it going?",
    photo: true,
    
  },
  {
    author: 2,
    text: "Hey, all good, how about you?",
  },
  {
    author: 1,
    text:
      "",
  },
];


const IndexPage = () => <div className="container overflow-auto bg-indigo-100 mx-auto min-h-screen shadow-md h-full"><Chat messages={messages_1}/></div>

export default IndexPage
