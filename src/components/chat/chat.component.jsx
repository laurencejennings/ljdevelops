import React, { useState, useRef } from "react"
import "react-chat-elements/dist/main.css"
import tw, { styled } from "twin.macro"
import { Input, MessageBox, Button } from "react-chat-elements"
import PersonCard from "src/components/chat/person_card.component"
import astra from "src/images/previews/astra.jpg"
import adriano from "src/images/previews/adriano.jpg"
import claudio from "src/images/previews/claudio.jpg"
import martin from "src/images/previews/martin.jpg"
import laurence from "src/images/previews/laurence.jpg"
import faker from 'faker'
import { AvatarGenerator } from 'random-avatar-generator';


const ChatHeader = styled(PersonCard)`
  ${tw`top-auto container fixed top-0 z-50 w-full shadow-lg sm:sticky`}
  @media screen and (min-width:400px){
    position: sticky
  }
`

const ChatWindow = styled.div`
  ${tw`h-full flex flex-col `}
  @media screen and (min-width:400px){
    display: block
  }
`

const Messages = styled.div`
  ${tw`flex-grow mb-32`}
`

const InputWrapper = styled.div`
  
  margin: 0 20px;
  ${tw`fixed bottom-0 right-0 left-0  mb-5`}
  @media screen and (min-width: 400px){
    bottom: 1rem;
    position: sticky
  }
`

const PatientMsg = styled(MessageBox)`
  .rce-mbox {
    margin-left: 20px;
  }
  div {
    ${tw`bg-teal-300`}
  }
  path {
    ${tw`border-teal-300 text-teal-300 fill-current`}
  }
`

const AppMsg = styled(MessageBox)`
  .rce-mbox {
    margin-right: 20px;
  }
`

const StyledInput = styled(Input)`
  ${tw`border-solid border border-teal-300 rounded-md mt-5`}
`

const StyledBtn = styled(Button)`
  ${tw`bg-teal-300! text-black!`}
`

const FittedImage = styled(PatientMsg)`
  .rce-mbox-photo--img img {
    object-fit: contain;
  }
`

function useAsyncHook(searchBook) {
  const [result, setResult] = React.useState([])
  const [loading, setLoading] = React.useState("false")

  React.useEffect(() => {
    async function fetchBookList() {
      try {
        setLoading("true")
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${searchBook}`
        )

        const json = await response.json()
        setResult(
          json.items.map(item => {
            return item.volumeInfo.title
          })
        )
      } catch (error) {
        setLoading("null")
      }
    }

    if (searchBook !== "") {
      fetchBookList()
    }
  }, [searchBook])

  return [result, loading]
}
function useAsyncHook2(messages) {
  const [result, setResult] = React.useState([])
  const [loading, setLoading] = React.useState("false")

  React.useEffect(() => {
    async function fetchBookList() {
      try {
        setLoading("true")

        setResult(messages)
      } catch (error) {
        setLoading("null")
      }
    }

    if (messages !== []) {
      fetchBookList()
    }
  }, [messages])

  return [result, loading]
}

const Chat = ({ messages, className }) => {
  const [message, setMessage] = useState("")
  const [inputs, appendInput] = useState([])
  const [inputValue, setInput] = useState("")
  const [output, setOutput] = useState("")
  const [result, loading] = useAsyncHook2(inputs)
  const everyEmoji = ['🤷', '🤔', '🤯', '😏']
  const possibleOutputs = [
    "You shouldn't be writing to me here, an email will work better! 😏",
    "Seriously, you should write me an email, it's the only way I'll read these messages... 🤷",
    "This chat is just for decoration, do send me an email. 😉",
    "I'll go full random if you continue... 🤔",
    "That's it, you asked for it...",
  ]
  let resultsRef = useRef(null);
  const appendOutput = ()=>{
    let newOutput
    if(output.length == 0 ){
      newOutput = [...output, possibleOutputs[0]]
    } else if(output.length === 1){
      newOutput = [...output, possibleOutputs[1]]
    }else if(output.length === 2){
      newOutput = [...output, possibleOutputs[2]]
    }else if(output.length === 3){
      newOutput = [...output, possibleOutputs[3]]
    }else if(output.length === 4){
      newOutput = [...output, possibleOutputs[4]]
    } else {
      let out = everyEmoji[Math.floor(Math.random() * everyEmoji.length)]
      newOutput = [...output, out]
    }
    setOutput(newOutput)
  }
  const sendText = e => {
    e.preventDefault()
    
    let newState = [...inputs, inputValue]
    appendInput(newState)
    appendOutput()
    if (resultsRef.current) {
      window.scrollTo({
        behavior: "smooth",
        top: resultsRef.current.offsetTop
      });
    }
    console.log(inputValue)
    setInput("")
    console.log(inputValue)
    inputRef.clear();
  }

  const changeInput = newInput => {
    setInput(newInput)
  }
  const usedEmojis = []
  let inputRef = useRef();
   
const generator = new AvatarGenerator();
 
// Simply get a random avatar
const avatarino = generator.generateRandomAvatar();
  
  return (
    <>
    

    <ChatWindow className={className}>
      <ChatHeader
        alt="profile avatar"
        name={faker.name.findName()}
        description=""
        avatar={avatarino}
        />
      <Messages>
        <AppMsg
          position="left"
          type={"text"}
          text={"Hey, how is it going?👋"}
          />
        <PatientMsg
          position="right"
          type={"text"}
          text={`Hey, all good, how about you?`}
          />
        <AppMsg
          position="left"
          type={"text"}
          text={`Great, I was wondering if you knew any good web developer`}
          />
        <PatientMsg
          position="right"
          type={"text"}
          text={`Sure, I know the guy for you 👍`}
          />
        <a href="mailto:jennings.laurence@gmail.com">
          <FittedImage
            position="right"
            type={"photo"}
            text={`Here is his contact:
            Laurence Jennings
            click to send an email`}
            data={{
              uri: laurence,
            }}
            />
        </a>
        <PatientMsg
          position="right"
          type={"text"}
          text={`I'll send you some links to some of his websites so you can have a look and see for yourself`}
          />
        <a href="https://www.astramarina.com">
          <PatientMsg
            position="right"
            type={"photo"}
            text={"Here's a website he made for a fashon designer"}
            data={{
              uri: astra,
            }}
            />
        </a>
        <a href="https://www.martinnings.com">
          <PatientMsg
            position="right"
            type={"photo"}
            text={"Here's one for an English sculptor"}
            data={{
              uri: martin,
            }}
            />
        </a>
        <a href="https://www.studioverter.com">
          <PatientMsg
            position="right"
            type={"photo"}
            text={
              "And here's one for an architecture studio based in Rotterdam"
            }
            data={{
              uri: claudio,
            }}
            />
        </a>
        <a href="https://www.solho.eu">
          <PatientMsg
            position="right"
            type={"photo"}
            text={"Here's one for a renewable energy startup company"}
            data={{
              uri: adriano,
            }}
            />
        </a>
        {loading === "false" ? (
          <h1>This should not be here 🤷</h1>
          ) : loading === "null" ? (
            <h1>This shouldn't be here 🤷</h1>
            ) : (
              result.map((item,idx) => {
                
                return (
                  <>
                <AppMsg key={`cioccio_item${item}`} position="left" type={"text"} text={item} />
                <PatientMsg
                key={`cioccio_item${output[idx]}`}
                position="right"
                type={"text"}
                text={
                  output[idx]
                }
                />
              </>
            )
          })
          )}
        <div ref={resultsRef}/>
      </Messages>
      <InputWrapper>
        <StyledInput
          placeholder="Type here..."
          multiline={true}
          onChange={e => changeInput(e.target.value)}
          ref={el => (inputRef = el)}
          rightButtons={
            <StyledBtn
            color="white"
            backgroundColor="black"
            text="Send"
            onClick={sendText}
            disabled={inputValue.length === 0}
            />
          }
          />
      </InputWrapper>
    </ChatWindow>
    </>
  )
}

export default Chat
