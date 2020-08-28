import React from "react"
import { Link } from "gatsby"
import "tailwindcss/dist/base.min.css"
import 'src/tailwind.css'
import 'src/components/bg.scss'
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import tw, { styled } from "twin.macro"
import Chat from 'src/components/chat/chat.component'
const Wrapper = styled.div`
  ${tw`rounded-md text-gray-300 border-gray-300 border border-0 border shadow-lg`}
`

const DesktopWrapper = styled.div`
  ${tw`overflow-hidden border-black border rounded-md bg-black relative ml-20 mt-20 shadow-xl`}
  height: 185mm;
  width: 95mm;
  border-radius: 1rem;
  box-shadow: 0 20px 25px -5px rgba(255, 255, 255, 0.9),0 10px 10px -5px rgba(255, 255, 255, 0.9);
  
  &::-webkit-scrollbar
  {
    width: 12px;  /* for vertical scrollbars */
    height: 12px; /* for horizontal scrollbars */
  }
  
  &::-webkit-scrollbar-track
  {
    background: rgba(0, 0, 0, 0.1);
  }
  
  &::-webkit-scrollbar-thumb
  {
    background: rgba(0, 0, 0, 0.5);
  }
  
`

const DesktopTextWrapper = styled.div`
  position: absolute;
  right: 0rem;
  top: 5rem;
  height: 20rem;
  width: 40rem;
  background-color: white;
  border-radius: 1rem;
  background: 
  linear-gradient(135deg, #3A3A3A 25%, transparent 25%) -50px 0,
  linear-gradient(225deg, #3A3A3A 25%, transparent 25%) -50px 0,
  linear-gradient(315deg, #3A3A3A 25%, transparent 25%),
  linear-gradient(45deg, #3A3A3A 25%, transparent 25%);	
  background-size: 2em 2em;
  background-color: #A3A3A3;
  color: white;
  ${tw`overflow-hidden border-black border rounded-md bg-black absolute mr-20 mt-20 shadow-xl`}
  border-radius: 1rem;
  box-shadow: 0 20px 25px -5px rgba(255, 255, 255, 0.9),0 10px 10px -5px rgba(255, 255, 255, 0.9);
  font-family: 'Raleway', sans-serif;
  padding: 1rem;
  h1{
    font-size: 1.5rem;
  }
  h3{
    font-size: 1.2rem;
    text-decoration: underline;
  }
  @media screen and (max-width: 1400px){
    display: none;
  }
`

const ScreenWrapper = styled.div`
  position: absolute;
  top: 1cm;
  bottom: 1.5cm;
  margin: auto;
  background-color: white;
  left: 0.1rem;
  right: 0.1rem;
  border-radius: 0.5rem;
  overflow: auto;
`

const MobileChat = styled(Chat)`
  display: none!important;
`

// bg-indigo-100
const IndexPage = () => <div className="container overflow-show relative mx-auto min-h-screen shadow-md h-full">
  <DesktopWrapper><ScreenWrapper><Chat /></ScreenWrapper></DesktopWrapper>
  <DesktopTextWrapper><h1>Web developer available to create your ideas</h1>
  <h3><a href="mailto:jennings.laurence@gmail.com">contact me by email</a></h3></DesktopTextWrapper>
  <MobileChat/>
  
  </div>

export default IndexPage
