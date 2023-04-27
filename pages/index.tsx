import { Center } from "@chakra-ui/react"
import Head from "next/head"
import { useState } from "react"
import Confetti from "react-confetti"
import useSound from "use-sound"

export default function Home() {
  const [shouldRenderConfetti, setRenderConfetti] = useState(false)
  const [play] = useSound("/partyhorn.mp3")

  const clicky = () => {
    setRenderConfetti(true)
    window.setTimeout(() => setRenderConfetti(false), 5000)
    play()
  }

  return (
    <>
      <Head>
        <title>{"PONY PARTY"}</title>
        <meta name="description" content="IT'S A PONY PARTY UP IN HURR" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/pony.png" />
      </Head>

      {shouldRenderConfetti && <Confetti />}

      <Center h={"100vh"}>
        <img src="/pony.png" alt={"It's a pony!"} onClick={clicky} />
      </Center>
    </>
  )
}
