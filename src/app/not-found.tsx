import Container from "@/app/_components/preference/container";
import { PostBody } from "@/app/_components/post_gen/post-body";

export default function NotFound() {
  return (
    <Container>
      <div id="__NOT_FOUND__" style={{ display: "none" }} />
      <PostBody
          content={`# Oops ...

          This page you are looking for does *not* exist!

          Click [here](/) to go back to the main site. 
      `}
        />
    </Container>
  );
}
