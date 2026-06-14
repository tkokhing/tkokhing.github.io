import Container from "@/app/_components/preference/container";
import { PostBody } from "@/app/_components/post_gen/post-body";

export default function NotFound() {
  return (
    <Container>
      <div id="__NOT_FOUND__" style={{ display: "none" }} />
      <PostBody
          content={`# Oops ...
            
          ## You seem to have lost your way. Let me help you find what you were looking for:

          I have these in my website:
          - see what's happening on the [blog](/blog)
          - for topics that I focus on is [here](/topics)
          - what does air combat [kill-chain](/heptagoning) has to do with cybersecurity
          - interested in my [research?](/research)
          
          Or, click [here](/) to go back to the main site

      `}
        />
    </Container>
  );
}
